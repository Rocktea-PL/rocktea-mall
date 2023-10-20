const category = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695728360/rocktea-product-website/assets/Rectangle_35_rdtaox.png",
    name: "Processed Food",
  },
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695728356/rocktea-product-website/assets/Rectangle_35_1_abtt0z.png",
    name: "Soft Drinks",
  },
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695728354/rocktea-product-website/assets/Rectangle_35_2_dndm8o.png",
    name: "Wine",
  },
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695728351/rocktea-product-website/assets/Rectangle_35_3_mi82zb.png",
    name: "Beverages",
  },
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695728350/rocktea-product-website/assets/Rectangle_35_4_hwyzor.png",
    name: "Grains & Cereals",
  },
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695728349/rocktea-product-website/assets/Rectangle_35_5_msfzqc.png",
    name: "Diary Products",
  },
];

function Categories() {
  return (
    <section className=" mt-5 pt-2 pb-5  rounded-lg ">
      <h2 className="text-center font-semibold  text-2xl">Categories</h2>
      <article className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-5">
        {category.map((item) => (
          <div
            key={item.id}
            className="   rounded-lg w flex flex-col items-center justify-center "
          >
            <figure className="rounded-t-lg w-full  h-[150px]">
              <img
                src={item.image}
                alt=""
                className="w-full h-full rounded-t-lg object-cover"
              />
            </figure>
            <p className="mt-0 bg-white py-5 w-full text-center rounded-b-lg">
              {item.name}
            </p>
          </div>
        ))}
      </article>
    </section>
  );
}

export default Categories;
