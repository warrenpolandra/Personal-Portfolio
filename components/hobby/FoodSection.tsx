import Image from "next/image";
import { foodCategories } from "@/data/foodItems";

const FoodSection = () => {
  return (
    <section className="pb-6">
      <h2 className="text-2xl font-bold text-white sm:text-3xl">Favorite Foods</h2>
      <p className="mt-2 text-[#ADB7BE]">
        My top three dishes from each cuisine.
      </p>

      <div className="mt-6 space-y-8">
        {foodCategories.map((category) => (
          <section key={category.id} aria-labelledby={`${category.id}-food-title`}>
            <h3
              id={`${category.id}-food-title`}
              className="flex items-center gap-2 text-xl font-semibold text-primary-400 sm:text-2xl"
            >
              <Image
                src={category.flag}
                alt=""
                width={32}
                height={24}
                className="h-5 w-7 object-contain"
              />
              <span>{category.country}</span>
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {category.foods.map((food) => (
                <article
                  key={food.rank}
                  className="overflow-hidden rounded-xl border border-[#33353F] bg-[#121212]"
                >
                  {food.image ? (
                    <div className="group relative aspect-video overflow-hidden">
                      <Image
                        src={food.image}
                        alt={food.name}
                        fill
                        className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-video items-center justify-center border-b border-dashed border-[#33353F] text-sm text-[#ADB7BE]">
                      Food image coming soon
                    </div>
                  )}
                  <div className="flex items-center gap-3 px-4 py-3">
                    <span className="text-2xl font-bold tabular-nums text-primary-500/60">
                      #{food.rank}
                    </span>
                    <p className="font-semibold text-white">{food.name}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default FoodSection;
