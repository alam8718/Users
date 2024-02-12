import React from "react";

function SearchDetails({data}) {
  console.log(length);
  return (
    <>
      <div className="my-4  w-full h-[calc(100%-100px)]  ">
        <div className="w-full h-[70px] flex items-center pl-6  gap-4 bg-white  rounded-xl">
          <div>
            <img src={data?.image} alt="" className="w-[60px] h-[50px]" />
          </div>
          <div className="w-full ">
            <h1 className="text-[15px] ">{`${data?.firstName} ${data?.lastName} ${data?.maidenName}`}</h1>
            <h1 className="text-sm">
              username: <span className="text-gray-500">{data?.username}</span>
            </h1>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchDetails;
