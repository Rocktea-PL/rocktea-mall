import { category } from "../constant/data";

function Categories() {
  const handleCategoryClick = (category) => {
    if (category.name.toLowerCase() === "services") {
      // Handle Services category
      window.location.href = "https://rocktea-mall.vercel.app/services/home"; //http://localhost:5173/services/home';
    } else {
      // Handle other categories or show a message
      console.log(`Clicked on category: ${category.name}`);
    }
  };
  return (
    <section className=" mt-5 pt-2 pb-5  rounded-lg ">
      <h2 className="text-center font-semibold  text-2xl bg-white h-14 flex items-center justify-center rounded-md">
        Categories
      </h2>
      <article className="flex items-center max-md:overflow-auto max-w-[100%] gap-5 mt-5 ">
        {category.map((item) => (
          <div
            key={item.id}
            onClick={() => handleCategoryClick(item)}
            role="button"
            className="   rounded-lg w flex flex-col items-center  justify-center bg-white max-md:!w-[200px] max-md:h-[180px] py-5 max-md:px-8 shadow-md w-[200px]"
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
