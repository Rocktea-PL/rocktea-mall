export default function Hero({ FormattedType, FilterAllProducts }) {
  return (
    <section className="  mb-5">
      <div className="my-4 py-4">
        <div className="flex items-center justify-between">
          <h3>
            Home - <span className="font-semibold">{FormattedType}</span>
          </h3>
          <p>{FilterAllProducts?.length} Item(s)</p>
        </div>
        <hr className="mt-3" />
      </div>
      <figure className="relative">
        <img
          src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1702665716/rocktea-product-website/assets/Groceries_1_m3egno.png"
          alt={FormattedType}
        />
        <div className="absolute top-[50%] translate-y-[-50%] left-5 text-[2.5rem] font-bold tracking-wide text-primary">
          {FormattedType}
        </div>
      </figure>
    </section>
  );
}
