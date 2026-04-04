const categories = [
  {
    name: "Cheesecakes",
    mainEmoji: "🍰",
    mainGradient: "from-blue-200 via-indigo-200 to-blue-300",
    smallEmojis: ["🎂", "🍫", "🧁"],
    smallGradients: [
      "from-rose-200 to-rose-300",
      "from-amber-200 to-amber-300",
      "from-violet-200 to-violet-300",
    ],
  },
  {
    name: "Apple Pie",
    mainEmoji: "🥧",
    mainGradient: "from-amber-200 via-orange-200 to-amber-300",
    smallEmojis: ["🍎", "🥐", "🍪"],
    smallGradients: [
      "from-red-200 to-red-300",
      "from-yellow-200 to-yellow-300",
      "from-orange-200 to-orange-300",
    ],
  },
  {
    name: "Muffins",
    mainEmoji: "🧁",
    mainGradient: "from-yellow-200 via-orange-200 to-yellow-300",
    smallEmojis: ["🍩", "🫓", "🍞"],
    smallGradients: [
      "from-stone-200 to-stone-300",
      "from-pink-200 to-pink-300",
      "from-emerald-200 to-emerald-300",
    ],
  },
];

export default function RecentlyFeaturedSection() {
  return (
    <section className="bg-gray-50/50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Recently Featured{" "}
          <span className="text-pink-400 italic">Recipes</span>:
        </h2>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer"
            >
              {/* Image Grid */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {/* Main large image */}
                <div
                  className={`col-span-2 row-span-3 rounded-2xl bg-gradient-to-br ${cat.mainGradient} flex items-center justify-center h-48`}
                >
                  <span className="text-6xl group-hover:scale-110 transition-transform">
                    {cat.mainEmoji}
                  </span>
                </div>
                {/* Small images */}
                {cat.smallEmojis.map((emoji, i) => (
                  <div
                    key={i}
                    className={`rounded-xl bg-gradient-to-br ${cat.smallGradients[i]} flex items-center justify-center h-14`}
                  >
                    <span className="text-xl">{emoji}</span>
                  </div>
                ))}
              </div>

              {/* Bottom info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {/* Avatar stack */}
                  <div className="flex -space-x-2">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 border-2 border-white"
                      />
                    ))}
                  </div>
                  <p className="font-semibold text-gray-800 text-sm">
                    {cat.name}
                  </p>
                </div>
                <span className="text-xs text-pink-400 border border-pink-300 rounded-full px-3 py-1 font-medium">
                  20+ Recipes in total
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
