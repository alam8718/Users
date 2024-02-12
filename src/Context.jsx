import {createContext, useContext, useEffect, useState} from "react";

export const AppContext = createContext();
export const AppProvider = ({children}) => {
  const [users, setUsers] = useState([]);
  const [sortName, setSortName] = useState("");

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

  //sorting data
  const sortData = (para) => {
    const userCopy = [...users];
    if (para === "firstName" || para === "email") {
      userCopy.sort((a, b) => {
        const first = a[para].toLowerCase();
        const second = b[para].toLowerCase();

        if (first > second) {
          return 1;
        } else if (first < second) {
          return -1;
        } else {
          return 0;
        }
      });
      // console.log("sorted data", userCopy);
      setUsers(userCopy);
    } else if (para === "company") {
      userCopy.sort((a, b) => {
        const first = a[para]?.name.toLowerCase();
        const second = b[para]?.name.toLowerCase();

        if (first > second) {
          return 1;
        } else if (first < second) {
          return -1;
        } else {
          return 0;
        }
      });
      // console.log("sorted company data", userCopy);
      setUsers(userCopy);
    } else {
      userCopy.sort((a, b) => {
        const first = a[para];
        const second = b[para];

        if (first > second) {
          return 1;
        } else if (first < second) {
          return -1;
        } else {
          return 0;
        }
      });
      // console.log("sorted default data", userCopy);
      setUsers(userCopy);
    }
  };

  useEffect(() => {
    sortData(sortName);
  }, [sortName]);

  useEffect(() => {
    fetchingData();
  }, []);

  // console.log(`I am filter search -> ${}`);
  // console.log(`I am user ${user}`);
  // console.log(`I am user id ${userID}`);

  return (
    <AppContext.Provider
      value={{
        users,
        setUsers,
        sortName,
        setSortName,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
