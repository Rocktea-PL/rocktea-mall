import { useState } from "react";

const ProductFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const categories = [
    "All Categories",
    "Breakfast",
    "Pasta & Noodles",
    "Coffee",
    "Juices",
    "Processed Foods",
    "Spices & Seasoning",
    "Grains & Rice",
    "Sugars & Sweetners",
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    // Add filtering logic here to filter products based on the selected category.
  };

  return (
    <section className="overflow-x-auto whitespace-nowrap  mt-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`${
            selectedCategory === category
              ? "bg-[var(--orange)] text-black"
              : "bg-white text-black"
          } inline-flex items-center text-sm px-4 py-2 rounded-sm mr-2 mb-2 cursor-pointer hover:bg-[var(--orange)] transition duration-300 ease-in-out`}
        >
          {category}
        </button>
      ))}
    </section>
  );
};

export default ProductFilter;
