"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import RecipeForm, {
  type RecipeFormData,
} from "@/components/recipes/recipe-form";

// Mock data for editing — will be replaced with API call
const MOCK_RECIPE_DATA: Record<string, RecipeFormData> = {
  "1": {
    title: "Classic Chocolate Chip Cookies",
    description:
      "Crispy on the edges, chewy in the center, and absolutely loaded with chocolate chips. The perfect cookie recipe that never fails.",
    category: "Cookies",
    difficulty: "Easy",
    prepTime: "15 mins",
    cookTime: "12 mins",
    servings: "24",
    imageUrl: "",
    tags: ["chocolate", "classic", "quick"],
    ingredients: [
      { id: "i1", name: "All-purpose flour", amount: "2.25", unit: "cups" },
      { id: "i2", name: "Butter, softened", amount: "1", unit: "cups" },
      { id: "i3", name: "Granulated sugar", amount: "0.75", unit: "cups" },
      { id: "i4", name: "Brown sugar, packed", amount: "0.75", unit: "cups" },
      { id: "i5", name: "Eggs", amount: "2", unit: "pieces" },
      { id: "i6", name: "Vanilla extract", amount: "1", unit: "tsp" },
      { id: "i7", name: "Baking soda", amount: "1", unit: "tsp" },
      { id: "i8", name: "Salt", amount: "1", unit: "tsp" },
      { id: "i9", name: "Chocolate chips", amount: "2", unit: "cups" },
    ],
    steps: [
      {
        id: "s1",
        instruction:
          "Preheat oven to 375°F (190°C). Line baking sheets with parchment paper.",
      },
      {
        id: "s2",
        instruction:
          "In a large bowl, cream together the butter, granulated sugar, and brown sugar until smooth and fluffy.",
      },
      {
        id: "s3",
        instruction:
          "Beat in the eggs one at a time, then stir in the vanilla extract.",
      },
      {
        id: "s4",
        instruction:
          "In a separate bowl, whisk together the flour, baking soda, and salt. Gradually blend into the butter mixture.",
      },
      {
        id: "s5",
        instruction:
          "Fold in the chocolate chips. Drop rounded tablespoon of dough onto the prepared baking sheets.",
      },
      {
        id: "s6",
        instruction:
          "Bake for 9 to 12 minutes, or until golden brown. Cool on the baking sheet for a few minutes before transferring to a wire rack.",
      },
    ],
  },
  "2": {
    title: "Sourdough Bread",
    description:
      "Artisan-style sourdough with a crisp golden crust and an open, airy crumb. Takes patience but rewards you with the best bread you'll ever eat.",
    category: "Bread",
    difficulty: "Hard",
    prepTime: "30 mins",
    cookTime: "45 mins",
    servings: "1",
    imageUrl: "",
    tags: ["sourdough", "artisan", "fermented"],
    ingredients: [
      { id: "i1", name: "Bread flour", amount: "500", unit: "g" },
      { id: "i2", name: "Water", amount: "350", unit: "ml" },
      { id: "i3", name: "Sourdough starter", amount: "100", unit: "g" },
      { id: "i4", name: "Salt", amount: "10", unit: "g" },
    ],
    steps: [
      {
        id: "s1",
        instruction:
          "Mix flour and water, autolyse for 30 minutes.",
      },
      {
        id: "s2",
        instruction:
          "Add starter and salt, mix until well combined. Perform stretch and folds every 30 minutes for 2 hours.",
      },
      {
        id: "s3",
        instruction:
          "Bulk ferment at room temperature for 4-6 hours until doubled in size.",
      },
      {
        id: "s4",
        instruction:
          "Shape the dough and place in a banneton. Cold retard in the fridge for 12-16 hours.",
      },
      {
        id: "s5",
        instruction:
          "Preheat Dutch oven at 500°F (260°C). Score the dough and bake covered for 20 minutes, then uncovered for 25 minutes at 450°F (230°C).",
      },
    ],
  },
  "3": {
    title: "Red Velvet Cupcakes",
    description:
      "Moist, tender red velvet cupcakes topped with smooth cream cheese frosting. A showstopper for any occasion.",
    category: "Cupcakes",
    difficulty: "Medium",
    prepTime: "20 mins",
    cookTime: "22 mins",
    servings: "12",
    imageUrl: "",
    tags: ["red-velvet", "cream-cheese", "celebration"],
    ingredients: [
      { id: "i1", name: "All-purpose flour", amount: "1.5", unit: "cups" },
      { id: "i2", name: "Cocoa powder", amount: "2", unit: "tbsp" },
      { id: "i3", name: "Buttermilk", amount: "1", unit: "cups" },
      { id: "i4", name: "Red food coloring", amount: "1", unit: "tbsp" },
      { id: "i5", name: "Cream cheese", amount: "8", unit: "oz" },
    ],
    steps: [
      {
        id: "s1",
        instruction: "Preheat oven to 350°F (175°C). Line cupcake tin with liners.",
      },
      {
        id: "s2",
        instruction: "Mix dry ingredients. In another bowl, combine wet ingredients including food coloring.",
      },
      {
        id: "s3",
        instruction: "Gradually combine wet and dry, mixing until just combined. Fill liners 2/3 full.",
      },
      {
        id: "s4",
        instruction: "Bake for 20-22 minutes. Cool completely before frosting with cream cheese frosting.",
      },
    ],
  },
};

export default function EditRecipePage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const recipeData = MOCK_RECIPE_DATA[id];

  if (!recipeData) {
    return (
      <>
        <Navbar />
        <main className="flex-1 bg-gray-50/50">
          <div className="max-w-3xl mx-auto px-6 py-20 text-center">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-800">
              Recipe Not Found
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              The recipe you&apos;re looking for doesn&apos;t exist or has been
              removed.
            </p>
            <Link
              href="/recipes"
              className="inline-block mt-6 px-6 py-2.5 bg-pink-400 hover:bg-pink-500 text-white rounded-xl text-sm font-semibold transition-colors"
            >
              Back to Recipes
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const handleSubmit = (data: RecipeFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    console.log("Updating recipe:", id, data);
    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/recipes");
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-gray-50/50">
        {/* Header */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-6 py-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <Link
                href="/recipes"
                className="hover:text-pink-400 transition-colors"
              >
                Recipes
              </Link>
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="text-gray-800 font-medium">Edit</span>
            </nav>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center shadow-lg shadow-amber-200/50">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Edit Recipe
                </h1>
                <p className="text-sm text-gray-500 mt-0.5">
                  Update &quot;{recipeData.title}&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="max-w-3xl mx-auto px-6 py-8">
          <RecipeForm
            initialData={recipeData}
            onSubmit={handleSubmit}
            onCancel={() => router.push("/recipes")}
            submitLabel="Save Changes"
            isSubmitting={isSubmitting}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
