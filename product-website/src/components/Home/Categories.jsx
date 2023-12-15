import { category } from "../constant/data";

function Categories() {
  return (
    <section className=" mt-5 pt-2 pb-5  rounded-lg ">
      <h2 className="text-center font-semibold  text-2xl bg-white h-14 flex items-center justify-center rounded-md">
        Categories
      </h2>
      <article className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-5">
        {category.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md pt-3   rounded-lg w flex flex-col items-center justify-center "
          >
            <figure className=" w-[80px] h-[80px] bg-[#ECEBEB]  flex items-center justify-center  rounded-full   ">
              <img
                src={item.image}
                alt=""
                width={50}
                height={50}
                className="  object-cover"
              />
            </figure>
            <p className="mt-0  py-5 w-full text-center rounded-b-lg">
              {item.name}
            </p>
          </div>
        ))}
      </article>
    </section>
  );
}

export default Categories;
