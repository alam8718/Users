import React from "react";
import {useGlobalContext} from "../../Context";
import {useParams} from "react-router-dom";

function UserDetails() {
  const {users} = useGlobalContext();
  const {id} = useParams();
  const userDetails = users.find((user) => user.id === parseInt(id));

  // console.log(userDetails);
  return (
    <>
      <div className="w-full h-screen overflow-y-scroll py-10 px-10 bg-[#F0F0F0]">
        <div className=" w-full h-full  bg-white rounded-3xl p-3">
          <div className="w-full h-full overflow-hidden mx-auto container">
            {/* headline  */}
            <div className="max-tablet:ml-10 flex flex-col items-center mx-auto container  max-tablet:items-start">
              <h1 className=" text-4xl font-inter mt-4 ">User Profile</h1>
              <hr className="border-b border-red-400 w-full sm:w-[300px]" />
            </div>
            {/* details */}
            <div className="w-full h-full min-laptop:flex gap-10">
              {/* user avater */}
              <div className=" max-tablet:mt-10 min-laptop:w-[350px] flex justify-center max-tablet:justify-center items-center max-tablet:items-start">
                <p className="absolute rotate-90 mt-4 w-[180px] h-[180px] rounded-full border border-gray-100 shadow-md shadow-gray-200 flex justify-center items-center  "></p>
                <p className="absolute rotate-180 mt-4 w-[180px] h-[180px] rounded-full border border-gray-100 shadow-md shadow-gray-200 flex justify-center items-center  "></p>
                <p className="absolute -rotate-45 mt-4 w-[180px] h-[180px] rounded-full border border-gray-100 shadow-md shadow-gray-200 flex justify-center items-center  "></p>
                <div className=" mt-4 w-[180px] h-[180px] rounded-full  shadow-md shadow-gray-200 flex justify-center items-center ring-4 ring-purple-400 ">
                  <img
                    src={userDetails?.image}
                    alt="avater"
                    className="w-[140px] h-[140px] "
                  />
                </div>
              </div>
              {/* user details */}
              <div className="w-full max-laptop:w-[500px]  h-full mt-10 min-laptop:mt-6 max-laptop:mx-5 flex flex-col items-center max-tablet:items-start ">
                {/* first name  */}
                <div className="mb-4 flex flex-col justify-center ">
                  <h1 className="text-[13px] max-tablet:text-[14px] font-roboto font-semibold">
                    First Name
                  </h1>
                  <div className="w-[250px] sm:w-[400px] max-tablet:w-[600px] h-[35px] max-mobile:h-[50px] rounded-full ring-2 ring-gray-200 shadow-sm flex items-center  ">
                    <p className="pl-7 w-full h-full flex items-center text-[14px] font-medium text-[#868686]">
                      {userDetails?.firstName}
                    </p>
                  </div>
                </div>
                {/* last name */}
                <div className="mb-4 flex flex-col gap-1 justify-center ">
                  <h1 className="text-[13px] max-tablet:text-[14px] font-roboto font-semibold">
                    Last Name
                  </h1>
                  <div className="w-[250px] sm:w-[400px] max-tablet:w-[600px] h-[35px] max-mobile:h-[50px] rounded-full ring-2 ring-gray-200 shadow-sm flex items-center  ">
                    <p className="pl-7 w-full h-full flex items-center text-[14px] font-medium text-[#868686]">
                      {userDetails?.lastName}
                    </p>
                  </div>
                </div>
                {/* email */}
                <div className="mb-4 flex flex-col gap-1 justify-center ">
                  <h1 className="text-[13px] max-tablet:text-[14px] font-roboto font-semibold">
                    Email
                  </h1>
                  <div className="w-[250px] sm:w-[400px] max-tablet:w-[600px] h-[35px] max-mobile:h-[50px] rounded-full ring-2 ring-gray-200 shadow-sm flex items-center  ">
                    <p className="pl-7 w-full h-full flex items-center text-[14px] font-medium text-[#868686]">
                      {userDetails?.email}
                    </p>
                  </div>
                </div>
                {/* address */}
                <div className="mb-4 flex flex-col gap-1 justify-center ">
                  <h1 className="text-[13px] max-tablet:text-[14px] font-roboto font-semibold">
                    Address
                  </h1>
                  <div className="w-[250px] sm:w-[400px] max-tablet:w-[600px] h-[50px]   rounded-full ring-2 ring-gray-200 shadow-sm flex items-center  ">
                    <p className="pl-7 w-[240px] sm:w-full h-full flex items-center  text-[14px] font-medium text-[#868686]">
                      {`${userDetails?.address?.address}, ${userDetails?.address?.city}, ${userDetails?.address?.state}`}
                    </p>
                  </div>
                </div>
                {/* company name */}
                <div className="mb-4 flex flex-col gap-1 justify-center ">
                  <h1 className="text-[13px] max-tablet:text-[14px] font-roboto font-semibold">
                    Company Name
                  </h1>
                  <div className="w-[250px] sm:w-[400px] max-tablet:w-[600px] h-[35px] max-mobile:h-[50px] rounded-full ring-2 ring-gray-200 shadow-sm flex items-center  ">
                    <p className="pl-7 w-full h-full flex items-center text-[14px] font-medium text-[#868686]">
                      {userDetails?.company?.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDetails;
