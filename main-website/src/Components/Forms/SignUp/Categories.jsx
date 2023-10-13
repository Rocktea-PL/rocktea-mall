import { useState } from "react";
import { useGlobalContext } from "../../../hooks/context";
import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";

// ... (categoryImageMap and other imports)
const categoryImageMap = {
  "Men's Fashion":
    "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1696740801/rocktea-main-website/assets/man_2_u6sd5x.png",
  "Kids": "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1696740801/rocktea-main-website/assets/man_2_u6sd5x.png",
  "Women's Fashion":
    "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1696740801/rocktea-main-website/assets/dress_3_jdhogd.png",
  "Health & Beauty":
    "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1696740801/rocktea-main-website/assets/dress_3_jdhogd.png",
  "Electronics":
    "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1696740800/rocktea-main-website/assets/electronics_1_vtekkt.png",
  "Home & Office":
    "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1696740800/rocktea-main-website/assets/electronics_1_vtekkt.png",
  "Groceries":
    "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1696740800/rocktea-main-website/assets/healthy-drink_1_kcjvfk.png",
  "Mobile Accessories":
    "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1696740801/rocktea-main-website/assets/mobile-phone_1_wqqa7p.png",
  "Phone and Tablet":
    "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1696740801/rocktea-main-website/assets/mobile-phone_1_wqqa7p.png",
  "Sporting":
    "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1696740800/rocktea-main-website/assets/sports_1_k0pqkf.png",
  "Video Games":
    "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1696740800/rocktea-main-website/assets/sports_1_k0pqkf.png",
  "Computing":
    "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1696740801/rocktea-main-website/assets/mobile-phone_1_wqqa7p.png",
};
export default function Categories() {
  const { categories, getCategories, setCurrentStep } = useGlobalContext();
  const [showAll, setShowAll] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null); // New state to hold the selected category ID

  const initialItemsToShow = 6;
  const visibleCategories = showAll
    ? categories
    : categories.slice(0, initialItemsToShow);

  const handleToggleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId); // Update the selected category ID
  };

  const handleContinueClick = async () => {
    const id = localStorage.getItem("storeId");
    console.log("store id", id);

    // Construct the URL for the PATCH request
    const apiUrl = `https://rocktea-mall-api-test.up.railway.app/rocktea/create/store/${id}/`;
    console.log("API URL:", apiUrl);

    try {
      // Make an API call to update the selected category
      const response = await axios.patch(apiUrl, {
        category: selectedCategoryId,
      });

      console.log("Updated API with category:", response.data);
      if (!selectedCategoryId) {
        toast.error("You must pick a category");
      } else {
        setCurrentStep((prevStep) => prevStep + 1);
      }
    } catch (error) {
      console.error("Error updating API:", error.response.data);
    }
  };

  return (
    <div className="px-10 w-full mb-20">
      <h2 className="text-black text-[1.3rem] md:text-lg leading-tight">
        What do you want to sell?
      </h2>

      <p className="text-orange mt-2 text-sm md:text-[20px]">
        Store Information
      </p>

      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-5 mt-10">
        {visibleCategories.map((category) => {
          const categoryImage = categoryImageMap[category.name];
      console.log(category.category)
          return (
            <li
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`border-2 border-black hover:border-orange flex flex-col items-center justify-center p-5 rounded-md ${
                selectedCategoryId === category.id
                  ? "border-orange"
                  : ""
              }`}
            >
              {categoryImage && (

                <img
                  src={categoryImage}
                  className="xxsm:w-[70px] xxsm:h-[70px] w-[100px] h-[100px]"
                  alt={category.name}
                  onLoad={() => console.log('Image loaded successfully')}
                    onError={() => console.error('Error loading image')}
                />
              )}
              <p className="mt-3">{category.name}</p>
            </li>
          );
        })}
      </ul>

      {categories.length > initialItemsToShow && (
        <button
          onClick={handleToggleShowAll}
          className="text-[1rem] flex items-end justify-end float-right text-right text-orange hover:underline cursor-pointer mt-5"
        >
          {showAll ? ">> Less" : "More >>"}
        </button>
      )}

      <button
        onClick={handleContinueClick}
        disabled={!selectedCategoryId}
        className="bg-orange w-[170px] h-14 p-2 flex items-center justify-center mx-auto mt-10 rounded-md text-white font-semibold text-[20px]"
      >
        Continue
      </button>
    </div>
  );
}

/**
  // Add more categories and their images here
}; */
