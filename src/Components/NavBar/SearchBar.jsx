import React, {useEffect, useState} from "react";
import {useGlobalContext} from "../../Context";
import SortingPart from "./SortingPart";
import SearchDetails from "./SearchDetails";
import {Link} from "react-router-dom";

function SearchBar() {
  const {users} = useGlobalContext();
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [focus, setFocus] = useState(false);

  function handleChange(e) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    const filterSearch = users.filter((user) =>
      user.username.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(filterSearch);
  }, [search]);

  console.log(searchResult);

  return (
    <>
      <div className="w-full h-full bg-gray flex flex-col max-tablet:flex-row max-tablet:items-center max-tablet:px-10 max-laptop:px-32">
        <div className="relative w-full max-tablet:w-[500px] pt-4 pb-2 flex justify-center max-tablet:justify-start container mx-auto">
          {/* input part  */}
          <div className="w-[300px] max-mobile:w-[400px] max-mobile:mx-10 h-[40px] flex justify-center items-center  rounded-full  bg-white border border-gray-300  ">
            <div className="w-full h-full rounded-full  ">
              <input
                type="text"
                value={search}
                onChange={handleChange}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                className="w-full h-full pl-5 rounded-full outline-none focus:border  focus:border-blue-500 transition-all duration-300 "
                placeholder="Search here"
              />
            </div>
          </div>
          {/* showin gsearch result part  */}
          {searchResult.length > 0 && search !== "" && focus ? (
            <div className="absolute top-16 max-tablet:top-16 max-tablet:left-10 bg-gray-200 w-[400px] max-tablet:w-[500px] max-h-[600px] rounded-2xl overflow-y-scroll px-6">
              {searchResult.map((result, index) => (
                <Link to={`/user/${result?.id}`} target="_blank" key={index}>
                  <div>
                    <SearchDetails data={result} />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <>
              {focus && (
                <div className="absolute top-16 max-tablet:top-16 max-tablet:left-10 bg-gray-200 w-[400px] max-tablet:w-[500px] h-[200px] rounded-2xl  px-6 ">
                  <h1 className="w-full h-full flex justify-center items-center font-bold text-lg text-gray-500">
                    No results found for query
                  </h1>
                </div>
              )}
            </>
          )}
        </div>
        {/* sorting part  */}
        <div className="w-[300px] py-2 pl-10  flex justify-center items-center max-mobile:justify-start container mx-auto">
          <SortingPart />
        </div>
      </div>
    </>
  );
}

export default SearchBar;
