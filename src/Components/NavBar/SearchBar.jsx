import React from "react";
import {CiSearch} from "react-icons/ci";
import {useGlobalContext} from "../../Context";
import SortingPart from "./SortingPart";

function SearchBar() {
  const {search, setSearch} = useGlobalContext();

  // handleSearch
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className="w-full h-full bg-gray flex flex-col ">
        <div className="w-full pt-4 pb-2 flex justify-center max-mobile:justify-start container mx-auto">
          {/* input part  */}
          <div className="w-[300px] max-mobile:w-[400px] max-mobile:mx-10 h-[40px] flex justify-center items-center  rounded-full  bg-white ">
            <div className="w-full h-full rounded-l-full border border-r-0 border-purple-500 ">
              <input
                type="search"
                value={search}
                onChange={handleSearch}
                onKeyDownCapture={handleKeyPress}
                className="w-full h-full pl-5 rounded-l-full outline-none "
                placeholder="Search here"
              />
            </div>
            <button className="w-[50px] h-full rounded-r-full border-l-0 border border-purple-500 flex justify-center items-center p-1 hover:bg-black/10 transition-all duration-300 ">
              <CiSearch size={22} />
            </button>
          </div>
        </div>
        {/* sorting part  */}
        <div className="w-full py-2 pl-10  flex justify-center max-mobile:justify-start container mx-auto">
          <SortingPart />
        </div>
      </div>
    </>
  );
}

export default SearchBar;
