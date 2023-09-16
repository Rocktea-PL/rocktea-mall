let skin =
  "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694422703/rocktea-product-website/assets/skincare_icypoy.png";
const category = [
  {
    id: 1,
    image: skin,
    name: "Skin Care",
  },
  {
    id: 1,
    image: skin,
    name: "Skin Care",
  },
  {
    id: 1,
    image: skin,
    name: "Skin Care",
  },
  {
    id: 1,
    image: skin,
    name: "Skin Care",
  },
  {
    id: 1,
    image: skin,
    name: "Skin Care",
  },
  {
    id: 1,
    image: skin,
    name: "Skin Care",
  },
];

function Categories() {
  return (
    <section className=" mt-5 pt-2 pb-5 md:mx-12 rounded-lg px-5">
      <h2 className="text-center font-semibold mb-5 text-2xl">Categories</h2>
      <section className="flex items-center justify-between gap-3 overflow-x-scroll ">
        {category.map((item) => (
          <div
            key={item.id}
            className="bg-white px-3 py-10 rounded-lg flex flex-col items-center justify-center w-[230px]"
          >
            <figure>
              <img src={item.image} alt="" width={150} height={150} />
            </figure>
            <p className="mt-3">{item.name}</p>
          </div>
        ))}
      </section>
    </section>
  );
}

export default Categories;
