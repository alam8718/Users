import React, {useEffect} from "react";
import {useGlobalContext} from "../../Context";

function SortingPart() {
  const {users, sortName, setSortName} = useGlobalContext();

  const handleSelect = (e) => {
    setSortName(e.target.value);
  };
  return (
    <>
      <div className="w-full h-full">
        <div>
          <div className="flex gap-3 items-center">
            <h1>Sort By:</h1>
            <select
              name=""
              id="sorting"
              value={sortName}
              onChange={handleSelect}
              className=" pl-3 pr-4 py-1 text-sm border border-amber-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-lg">
              <option value="id">Default</option>
              <option value="firstName">Name</option>
              <option value="email">Email</option>
              <option value="company">Company Name</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default SortingPart;
