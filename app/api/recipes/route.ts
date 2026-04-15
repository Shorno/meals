import { db } from "@/db/config";
import { recipe, recipeIngredient, recipeStep } from "@/db/schema";
import { desc } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

// GET /api/recipes — List all recipes
export async function GET() {
  try {
    const recipes = await db.query.recipe.findMany({
      with: {
        ingredients: {
          orderBy: (ingredients, { asc }) => [asc(ingredients.sortOrder)],
        },
        steps: {
          orderBy: (steps, { asc }) => [asc(steps.sortOrder)],
        },
        user: true,
      },
      orderBy: [desc(recipe.createdAt)],
    });

    return Response.json(recipes);
  } catch (error) {
    console.error("Failed to fetch recipes:", error);
    return Response.json(
      { error: "Failed to fetch recipes" },
      { status: 500 }
    );
  }
}

// POST /api/recipes — Create a new recipe
export async function POST(request: Request) {
  try {
    const session = await auth.api.getSession({
      headers: await headers()
    });

    if (!session) {
      return Response.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const {
      title,
      description,
      category,
      difficulty,
      prepTime,
      cookTime,
      servings,
      imageUrl,
      tags,
      ingredients,
      steps,
    } = body;

    // Validate required fields
    if (!title || !description || !category || !difficulty || !prepTime || !cookTime || !servings) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const result = await db.transaction(async (tx) => {
      // Insert recipe
      const [newRecipe] = await tx
        .insert(recipe)
        .values({
          title,
          description,
          category,
          difficulty,
          prepTime,
          cookTime,
          servings,
          imageUrl: imageUrl || null,
          tags: tags || [],
          userId: session.user.id,
        })
        .returning();

      // Insert ingredients
      if (ingredients && ingredients.length > 0) {
        await tx.insert(recipeIngredient).values(
          ingredients.map(
            (ing: { name: string; amount: string; unit: string }, index: number) => ({
              recipeId: newRecipe.id,
              name: ing.name,
              amount: ing.amount,
              unit: ing.unit,
              sortOrder: index,
            })
          )
        );
      }

      // Insert steps
      if (steps && steps.length > 0) {
        await tx.insert(recipeStep).values(
          steps.map(
            (step: { instruction: string }, index: number) => ({
              recipeId: newRecipe.id,
              instruction: step.instruction,
              sortOrder: index,
            })
          )
        );
      }

      return newRecipe;
    });

    // Fetch the complete recipe with relations
    const completeRecipe = await db.query.recipe.findFirst({
      where: (r, { eq }) => eq(r.id, result.id),
      with: {
        ingredients: {
          orderBy: (ingredients, { asc }) => [asc(ingredients.sortOrder)],
        },
        steps: {
          orderBy: (steps, { asc }) => [asc(steps.sortOrder)],
        },
        user: true,
      },
    });

    return Response.json(completeRecipe, { status: 201 });
  } catch (error) {
    console.error("Failed to create recipe:", error);
    return Response.json(
      { error: "Failed to create recipe" },
      { status: 500 }
    );
  }
}
