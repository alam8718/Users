import {createContext, useContext, useEffect, useState} from "react";

export const AppContext = createContext();
export const AppProvider = ({children}) => {
  const [users, setUsers] = useState([]);

  // fetching data from api
  const fetchingData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUsers(data.users);
      // console.log(data.users);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log({users});

  useEffect(() => {
    fetchingData();
  }, []);

  // console.log(`I am user ${user}`);
  // console.log(`I am user id ${userID}`);

  return <AppContext.Provider value={{users}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
