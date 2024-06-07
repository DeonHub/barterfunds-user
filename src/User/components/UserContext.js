// UserContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    // const navigate = useNavigate();
    const [user, setUser] = useState({});
  
  
    useEffect(() => {
      document.title = "User Dashboard  | BarterFunds";
      const token = window.sessionStorage.getItem("token");
      // const userId = window.sessionStorage.getItem("userId");
  
    //   if (!token) {
    //     navigate("/login");
    //     return;
    //   }
  
      const headers = {
        Authorization: `Bearer ${token}`,
      };
  
      const body = {
        token,
      };
  
      console.log(body)
  
  
      axios
        .post(`${process.env.REACT_APP_API_URL}/auth/get-user-from-token`, body, {
          headers: headers,
        })
        .then((response) => {
          if (response.data.success) {
            setUser(response.data.user);
            // console.log(response.data.user)
  
          } else {
            setUser([]);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
