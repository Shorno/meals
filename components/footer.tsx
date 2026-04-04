import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-pink-400">
              BakingTales
            </Link>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              Your ultimate recipe hub. Discover, cook, and share recipes with
              bakers around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3 text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Marketplace", "Recipes", "About", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase()}`}
                    className="text-sm text-gray-500 hover:text-pink-400 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3 text-sm">
              Categories
            </h4>
            <ul className="space-y-2">
              {["Cakes", "Bread", "Muffins", "Cupcakes", "Cookies"].map(
                (cat) => (
                  <li key={cat}>
                    <Link
                      href={`/recipes?category=${cat.toLowerCase()}`}
                      className="text-sm text-gray-500 hover:text-pink-400 transition-colors"
                    >
                      {cat}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3 text-sm">
              Stay Updated
            </h4>
            <p className="text-sm text-gray-500 mb-3">
              Subscribe to get the latest recipes and baking tips.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400/30 focus:border-pink-400"
              />
              <button className="px-4 py-2 bg-pink-400 text-white text-sm font-medium rounded-full hover:bg-pink-500 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            Copyright © 2024 BakingTales. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-300 to-pink-400 border-2 border-white" />
          </div>
        </div>
      </div>
    </footer>
  );
}
