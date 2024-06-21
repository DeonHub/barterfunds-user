import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from "axios";
import CryptoJS from 'crypto-js';
import { useNavigate } from "react-router-dom";

const UserContext = createContext();
const SECRET_KEY = 'secret_key';

const encryptData = (data) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};

const decryptData = (ciphertext) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

 
  useEffect(() => {
    const token = window.sessionStorage.getItem("token");

    // if (!token) {
    //   navigate("/login");
    //   return;
    // }

    const storedUser = localStorage.getItem("sha");
    if (storedUser) {
      try {
        const decryptedUser = decryptData(storedUser);
        setUser(decryptedUser);
      } catch (error) {
        console.error("Failed to decrypt user data from localStorage", error);
      }
    }

    const fetchUser = async () => {
      try {
        const headers = { Authorization: `Bearer ${token}` };
        const body = { token };

        const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/get-user-from-token`, body, { headers });
        if (response.data.success) {
          const fetchedUser = response.data.user;
          setUser(fetchedUser);

          if (!storedUser) {
            localStorage.setItem("sha", encryptData(fetchedUser));
          } else {
            const decryptedStoredUser = decryptData(storedUser);
            if (JSON.stringify(decryptedStoredUser) !== JSON.stringify(fetchedUser)) {
              localStorage.setItem("sha", encryptData(fetchedUser));
            }
          }
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchUser();
  }, [navigate]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
