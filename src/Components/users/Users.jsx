import React from "react";
import SingleUserCard from "./SingleUserCard";
import {useGlobalContext} from "../../Context";
import {Link} from "react-router-dom";

function Users() {
  const {users} = useGlobalContext();
  return (
    <>
      <div className="py-10 w-full h-screen overflow-y-scroll max-mobile:flex max-mobile:flex-wrap max-mobile: gap-5 max-mobile:gap-0 max-mobile:justify-center   ">
        {users.map((user, index) => (
          <Link
            to={`/user/${user?.id}`}
            key={index}
            className=" my-3 w-full sm:w-auto flex justify-center flex-wrap ">
            <SingleUserCard user={user} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Users;
