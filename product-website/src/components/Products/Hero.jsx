export default function Hero() {
  return (
    <section className="  mb-5">
      <div className="my-4 py-4">
        <div className="flex items-center justify-between">
          <h3>
            Home - <span className="font-semibold">Products</span>
          </h3>
          <p>330 Items</p>
        </div>
        <hr className="mt-3" />
      </div>
      <figure>
        <img
          src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694422709/rocktea-product-website/assets/Groceries_yxkazq.png"
          alt=""
        />
      </figure>
    </section>
  );
}
