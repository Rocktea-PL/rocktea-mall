import { useState } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

export default function SearchForm() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    navigate(`/search?query=${query}`);
  };

  return (
    <div className="flex items-center justify-center mx-auto mt-5 mb-3 w-full lg:hidden">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch(searchQuery);
        }}
        className="flex items-center justify-between w-[70%] bg-white gap-4 border-[1.6px] border-solid border-orange p-2 rounded-lg outline-none"
      >
        <input
          type="search"
          placeholder="Tell me what you’re looking for?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border-0 outline-0 w-[75%]"
        />
        <button className="flex items-center gap-2 common p-2  rounded-lg">
          {" "}
          <HiOutlineMagnifyingGlass /> Search{" "}
        </button>
      </form>
    </div>
  );
}
