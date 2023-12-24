export const category = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1702613710/rocktea-product-website/assets/categories/image_218_gwydsm.svg",
    name: "Services",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1702250400/rocktea-product-website/assets/categories/allcategories.svg",
    name: "Categories",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1702250400/rocktea-product-website/assets/categories/image_217_yymxbk.svg",
    name: "Soft Drinks",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1702250400/rocktea-product-website/assets/categories/image_214_hwmufz.svg",
    name: "Beverages",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1702250400/rocktea-product-website/assets/categories/image_215_um9ytj.svg",
    name: "Grains & Cereals",
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1702613709/rocktea-product-website/assets/categories/red-wine_8243341_zdlyha.svg",
    name: "Wine",
  },
];

function Categories() {
  return (
    <article className=" mt-5 pt-2 pb-5  rounded-lg ">
      <h2 className="text-center font-semibold  text-2xl bg-white h-14 flex items-center justify-center rounded-md">
        Categories
      </h2>
      <article max-md:overfclassName="flex items-center low-auto max-w-[100%] gap-5 mt-5 ">
        {category.map((item) => (
          <div
            key={item.id}
            className="   rounded-lg w flex flex-col items-center  justify-center bg-white max-md:!w-[200px] max-md:h-[180px] py-5 max-md:px-8 shadow-md w-[200px]"
          >
            <figure className=" w-[80px] h-[80px] bg-[#ECEBEB]  flex items-center justify-center  rounded-full  px-3 ">
              <img
                src={item.image}
                alt=""
                width={50}
                height={50}
                className="  object-cover"
              />
            </figure>
            <p className="mt-2 w-full text-center rounded-b-lg whitespace-nowrap">
              {item.name}
            </p>
          </div>
        ))}
      </article>
    </article>
  );
}

export default Categories;
