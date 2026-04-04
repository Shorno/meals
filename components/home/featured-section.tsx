function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3.5 h-3.5 ${star <= rating ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const featuredRecipes = [
  { name: "Cloud Cake", emoji: "🍰", gradient: "from-pink-200 via-rose-200 to-pink-300" },
  { name: "Dreamy Croissant", emoji: "🥐", gradient: "from-amber-200 via-orange-200 to-amber-300" },
  { name: "Milk Cake", emoji: "🎂", gradient: "from-stone-200 via-gray-200 to-stone-300" },
];

const topCollections = [
  { rank: 1, name: "Kritika Adhikari", change: "+26.52%", avatar: "from-pink-300 to-pink-400" },
  { rank: 2, name: "Lorem", change: "+23.92%", avatar: "from-amber-300 to-amber-400" },
  { rank: 3, name: "Ipsum", change: "+22.88%", avatar: "from-indigo-300 to-indigo-400" },
  { rank: 4, name: "User", change: "+20.12%", avatar: "from-emerald-300 to-emerald-400" },
  { rank: 5, name: "Krii", change: "+16.52%", avatar: "from-violet-300 to-violet-400" },
];

export default function FeaturedSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Big Feature Card */}
          <div className="relative rounded-3xl overflow-hidden shadow-md group">
            <div className="w-full h-96 bg-gradient-to-br from-green-200 via-teal-200 to-emerald-300 flex items-center justify-center">
              <div className="text-center">
                <span className="text-8xl block mb-2">🍬</span>
                <p className="text-gray-600 text-sm font-medium">Macaroons Collection</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white/90 to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-300 to-pink-400 border-2 border-white" />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">
                    The Mystery Macaroons
                  </p>
                  <p className="text-xs text-gray-500">Kritika Adhikari</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <p className="text-xs text-gray-500">100K Ratings</p>
                <StarRating rating={3} />
              </div>
            </div>
          </div>

          {/* Center - Recipe Cards Stack */}
          <div className="space-y-4">
            {featuredRecipes.map((recipe) => (
              <div
                key={recipe.name}
                className="flex items-center gap-4 p-3 rounded-2xl bg-white border border-gray-100 hover:border-pink-200 hover:shadow-md transition-all"
              >
                <div
                  className={`w-20 h-20 rounded-xl bg-gradient-to-br ${recipe.gradient} flex items-center justify-center shrink-0`}
                >
                  <span className="text-3xl">{recipe.emoji}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-800 text-sm">
                    {recipe.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-pink-300 to-pink-400 border border-white" />
                    <span className="text-xs text-gray-500">
                      Kritika Adhikari
                    </span>
                  </div>
                  <StarRating rating={5} />
                  <button className="mt-2 text-xs font-medium text-pink-400 border border-pink-300 rounded-full px-4 py-1 hover:bg-pink-50 transition-colors">
                    Learn more
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Top Collections */}
          <div>
            <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-800">
                Top Collections over
              </h3>
              <p className="text-pink-400 font-medium text-sm">Last 7 days</p>
            </div>

            <div className="space-y-3">
              {topCollections.map((user) => (
                <div
                  key={user.rank}
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-bold text-gray-400 w-6 text-center">
                    {user.rank}
                  </span>
                  <div className="relative">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${user.avatar} border-2 border-white shadow-sm`}
                    />
                    {user.rank <= 2 && (
                      <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-pink-400 rounded-full flex items-center justify-center">
                        <svg
                          className="w-2.5 h-2.5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-800 truncate">
                      {user.name}
                    </p>
                    <StarRating rating={5} />
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-emerald-500">
                      {user.change}
                    </p>
                    <p className="text-[10px] text-gray-400">Ratings</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
