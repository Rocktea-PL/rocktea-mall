export default function Hero({ FormattedType, FilterAllProducts }) {
  return (
    <section className=" ">
      <div className="my-4 py-4">
        <div className="flex items-center justify-between">
          <h3>
            Home - <span className="font-semibold">{FormattedType}</span>
          </h3>
          <p>{FilterAllProducts?.length} Item(s)</p>
        </div>
        <hr className="mt-3" />
      </div>
      <div className="bg-product bg-no-repeat bg-cover bg-center h-[300px] ">
          <h2 className="text-start text-[3rem] sm:text-[4rem] text-white pl-10  pt-[10rem] font-semibold leading-tight">
          {FormattedType}
          </h2>
        </div>
      
    </section>
  );
}
