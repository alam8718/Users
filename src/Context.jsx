import {createContext, useContext, useEffect, useState} from "react";

export const AppContext = createContext();
export const AppProvider = ({children}) => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sortName, setSortName] = useState("");
  const [sorttedResult, setSorttedResult] = useState([]);

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

  useEffect(() => {
    fetchingData();
  }, []);

  // console.log(`I am search -> ${sortName}`);
  // console.log(`I am sort result  -> ${sortingResult}`);
  // console.log(`I am user ${user}`);
  // console.log(`I am user id ${userID}`);

  return (
    <AppContext.Provider
      value={{
        users,
        search,
        setSearch,
        sortName,
        setSortName,
        sorttedResult,
        setSorttedResult,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
