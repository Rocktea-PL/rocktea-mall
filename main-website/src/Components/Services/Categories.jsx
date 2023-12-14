export const category = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695728360/rocktea-product-website/assets/Rectangle_35_rdtaox.png",
    name: "Processed Food",
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
      "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695728349/rocktea-product-website/assets/Rectangle_35_5_msfzqc.png",
    name: "Diary Products",
  },
];

function Categories() {
  return (
    <article className=" mt-5 pt-2 pb-5  rounded-lg ">
      <h2 className="text-center font-semibold  text-2xl bg-white h-14 flex items-center justify-center rounded-md">
        Categories
      </h2>
      <article className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-6 gap-4 mt-5 ">
        {category.map((item) => (
          <div
            key={item.id}
            className="   rounded-lg w flex flex-col items-center justify-center bg-white py-5 shadow-md"
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
            <p className="mt-2 w-full text-center rounded-b-lg">{item.name}</p>
          </div>
        ))}
      </article>
    </article>
  );
}

export default Categories;
