import React from "react";

function SingleUserCard({user}) {
  return (
    <>
      <div className="w-[380px] h-[410px] min-laptop:w-[330px] max-laptop:w-[360px] lg:h-[450px] px-2">
        <div className=" flex justify-center items-center flex-col max-tablet:justify-start gap-3 w-full h-full border border-gray-200 shadow-md rounded-2xl overflow-hidden py-3 px-1 ">
          {/* image  */}
          <div className="flex justify-center items-center w-[190px] h-[180px] lg:w-[210px] lg:h-[200px] rounded-2xl border border-gray-100 shadow-md p-2 ">
            <img
              src={user?.image}
              alt=""
              className="w-full h-full rounded-2xl "
            />
          </div>
          <div className=" w-[90%]  h-full flex flex-col gap-2 ">
            {/* company name  */}
            <div className="my-1 flex justify-center items-center  ">
              <h1 className="shadow-sm font-inter text-center text-2xl  text-black  border border-gray-100 rounded-xl px-3">
                {user?.company?.name}
              </h1>
            </div>
            {/* user details  */}
            <div className="text-[#030303] flex flex-col gap-1">
              <h1 className="text-md font-lighter">
                First Name:{" "}
                <span className="font-semibold">{user?.firstName}</span>
              </h1>
              <h1 className="text-md font-lighter">
                Last Name:{" "}
                <span className="font-semibold">{user?.lastName}</span>
              </h1>
              {/* email and address */}
              <div className=" ">
                <div className="flex gap-1 items-center ">
                  Email:
                  <p className="text-gray-600 text-sm hover:text-blue-900 hover:underline ">{`${user?.email}`}</p>
                </div>
                <div className="flex gap-1  ">
                  Address:
                  <p className="mt-[3px] text-gray-600 text-sm">{`${user?.address?.address}, ${user?.address?.city}`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleUserCard;
