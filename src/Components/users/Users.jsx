import React from "react";
import SingleUserCard from "./SingleUserCard";
import {useGlobalContext} from "../../Context";
import {Link} from "react-router-dom";
import NavBar from "../NavBar/NavBar";

function Users() {
  const {users} = useGlobalContext();
  return (
    <>
      <NavBar />
      <div className="py-10 w-full h-[calc(100vh-115px)] overflow-y-scroll max-mobile:flex max-mobile:flex-wrap max-mobile: gap-5 max-mobile:gap-0 max-mobile:justify-center   ">
        {users.map((user, index) => (
          <Link
            to={`/user/${user?.id}`}
            target="_blank"
            key={index}
            className=" my-3 w-[365px] sm:w-auto flex justify-center flex-wrap ">
            <SingleUserCard user={user} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Users;
