import { useEffect } from "react";
import { /*categories*/ product } from "../components/constant/data";
//import { FaAngleRight } from "react-icons/fa";
//import { useRef } from "react";
import { Link } from "react-router-dom";
import { useUserProductContext } from "../Hooks/UserProductContext";

const Categories = ({ closeModal }) => {
  // Categories and subcategories data
  const { categoryname } = useUserProductContext();
  // Add more categories and subcategories as needed
  console.log(categoryname);
  let subcategories = categoryname?.subcategories;
  //const Type= productType.filter(cat => cat.subcategory.name ===subcategories.name )
  let productType = categoryname?.product_types;
  console.log(subcategories);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleOverlayClick = (e) => {
    // Close the modal only if the click is on the overlay, not on the modal itself
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  // const modalContentRef = useRef(null);

  /* const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = modalContentRef.current;
    const percentScroll = (scrollTop / (scrollHeight - clientHeight)) * 100;
    const maxIconTranslate = 100 - 20; // 20 is the height of the icon

    const iconTranslate = (percentScroll / 100) * maxIconTranslate;
    document.getElementById(
      "scroll-icon",
    ).style.transform = `translateY(${iconTranslate}%)`;
  };*/
  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal lg:w-[70%] w-[90%] flex items-start justify-between gap-16">
        <div className="w-[80%]">
          <div className="flex items-start justify-between gap-10 mt-10">
            <h2 className="text-[1.4rem] font-semibold ">
              {categoryname?.category?.name}
            </h2>
            <button className="text-[1rem] font-medium ">View all</button>
            <button onClick={closeModal} className="close-button">
              &times;
            </button>
          </div>
          <div className="modal-content relative gap-8 pr-5 mt-5">
            {subcategories?.length > 0 &&
              subcategories.map((subcategory, subIndex) => {
                const decodedType = subcategory?.name.replace(/\s+/g, "-");
                //const FormattedType = subcategory.name.replace(/-/g, " ");
                return (
                  <div key={subIndex} className="border-r px-2">
                    <Link to={`/products/${decodedType}`}>
                      <h3 className="text-[1rem] font-medium hover:text-orange cursor-pointer  ">
                        {subcategory?.name}
                      </h3>
                      <hr className="my-2" />
                    </Link>
                    <ul key={subIndex} className="flex flex-col">
                      {productType
                        ?.filter(
                          (type) => type.subcategory.name === subcategory.name,
                        )
                        .map((type, typeIndex) => (
                          <li key={typeIndex}>
                            <Link to={`/products/${type.id}`}>
                              <p className="capitalize text-sm hover:text-orange leading-tight cursor-pointer">
                                {type.name}
                              </p>
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="w-[30%]  ">
          <h2 className="text-[1rem] font-medium my-6">Top Categories</h2>
          <div className="grid grid-cols-2 gap-2 mt-7">
            {product.slice(0, 6).map((item) => (
              <div key={item.id}>
                <img
                  src={item.image}
                  alt=""
                  className="w-[100px] h-[100px] rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
