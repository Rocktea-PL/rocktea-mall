import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa";
function Members() {
  return (
    <section className="flex flex-col items-center justify-center">
      <h2 className=" text-md xsm:text-[40px] text-center my-10 font-semibold leading-tight">
        Hear From <span className="text-[var(--yellow)]">Our Members</span>
      </h2>
      <article className="flex flex-col md:flex-row items-center justify-center  gap-16">
        <figure className="block m-auto md:m-1">
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421649/rocktea-main-website/assets/members-avatar_xzoi0a.png"
            width={300}
            height={300}
            alt="avatar"
          />
        </figure>
        <div className="md:max-w-[50%]">
          <div className="flex items-center justify-center md:justify-start gap-3 gap-y-1">
            <h4 className="font-semibold">Samuel L.</h4>
            <h5 className="text-[0.8rem]">7 Days ago</h5>
          </div>
          <div className="my-3 flex items-center md:items-start justify-center md:justify-start flex-col">
            <span className="flex items-center md:items-start gap-1 text-[var(--yellow)] mb-2">
              <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
              <FaStar className="text-gray-300" />
            </span>
            <p className="text-[15px] text-center md:text-start">
              {" "}
              &quot;I’ve tried other affiliate networks, but this one’s tracking
              accuracy is on a whole different level. The real-time data ensures
              that I’m always up-to-date with my performance metrics, making it
              easier to adjust my approach when needed.&quot;
            </p>
            <div className="flex gap-8 mt-4">
              <button className="w-[30px] border-2 border-solid border-[var(--yellow)] h-[30px] flex items-center justify-center rounded-full">
                <FaAngleLeft className="text-[var(--yellow)]" />
              </button>
              <button className="w-[30px] border-2 border-solid border-[var(--yellow)] h-[30px] flex items-center justify-center rounded-full">
                <FaAngleRight className="text-[var(--yellow)]" />
              </button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Members;
