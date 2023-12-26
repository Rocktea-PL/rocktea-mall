import { useState } from "react";
import { useUserProductContext } from "../../Hooks/UserProductContext";
import { Link } from "react-router-dom";

const ProductFilter = () => {
  const { categoryname } = useUserProductContext();
  // Add more categories and subcategories as needed
  console.log(categoryname);
  let subcategories = categoryname?.subcategories;
  //const Type= productType.filter(cat => cat.subcategory.name ===subcategories.name )
  let productType = categoryname?.product_types;
  console.log(subcategories);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    // Add filtering logic here to filter products based on the selected category.
  };

  return (
    <section className="overflow-x-auto whitespace-nowrap  lg:mt-6">
      {productType?.length &&
        productType.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.name)}
            className={`${
              selectedCategory === category.name
                ? "common"
                : "bg-white text-black"
            } inline-flex items-center text-sm px-4 py-2 rounded-sm mr-2 mb-2 cursor-pointer hover:bg-orange hover:text-white transition duration-300 ease-in-out`}
          >
            <Link to={`/products/${category.id}`}> {category.name}</Link>
          </button>
        ))}
    </section>
  );
};

export default ProductFilter;
