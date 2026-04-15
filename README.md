# My Recipes

A robust recipe management application built with Next.js. It allows users to browse, create, edit, filter, and manage their favorite recipes in a highly responsive and modern interface.

## 🚀 Features

- **Recipe Management:** Create, read, update, and delete (CRUD) your recipes.
- **Advanced Filtering & Search:** Search recipes by name, description, tags, category, and difficulty level.
- **User Authentication:** Secure user sign-up, login, and session management.
- **User Profiles:** Manage user profiles and link recipes to their authors.
- **Beautiful & Modern UI:** Responsive, accessible design using Tailwind CSS v4, Base UI, and beautifully crafted components.
- **Database Integration:** Reliable data persistence with Neon Serverless Postgres and Drizzle ORM.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (Version 16, React 19)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [Base UI](https://base-ui.com/), [Shadcn UI](https://ui.shadcn.com/)
- **Database:** [Neon Serverless Database](https://neon.tech/) (PostgreSQL)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication:** [Better Auth](https://better-auth.com/)
- **Icons:** [Lucide React](https://lucide.dev/), Hugeicons
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## 💻 Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Make sure to set up your `.env` file with the necessary credentials for your Neon database and Better Auth variables.

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the project by modifying `app/page.tsx` or `app/recipes/page.tsx`. The app auto-updates as you edit the files.
