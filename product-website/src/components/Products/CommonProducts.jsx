import ProductCard from "../../Features/ProductCard";
let Malt =
  "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694422692/rocktea-product-website/assets/malt_ofvezu.png";

function CommonProducts() {
  return (
    <div className="">
      <h2 className="font-semibold text-2xl">Customers Also Viewed</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 w-full  justify-between   py-3 overflow-hidden">
        {product.map((item) => (
          <ProductCard
            name={item.name}
            image={item.image}
            price={item.price}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default CommonProducts;

const product = [
  {
    id: 1,
    image: Malt,

    name: "Pepsi",
    price: 1200,
  },
  {
    id: 2,
    image: Malt,

    name: "Pepsi",
    price: 1200,
  },
  {
    id: 3,
    image: Malt,

    name: "Pepsi",
    price: 1200,
  },
  {
    id: 4,
    image: Malt,

    name: "Pepsi",
    price: 1200,
  },
  {
    id: 5,
    image: Malt,

    name: "Pepsi",
    price: 1200,
  },
  {
    id: 6,
    image: Malt,

    name: "Pepsi",
    price: 1200,
  },
];
