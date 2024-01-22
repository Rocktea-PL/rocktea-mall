import { Link } from "react-router-dom";

export default function Search() {
  return (
    <div>
      <form action="" className="lg:flex hidden !items-center gap-x-3 ">
        <input
          type="search"
          placeholder="search a service"
          className="px-3 !py-2 -mt-[0.4px] !h-[2.7rem] "
        />
        <Link to="/signin">
          <button className="w-[120px] h-10 bg-orange rounded-md">
            Search
          </button>
        </Link>
      </form>
    </div>
  );
}
