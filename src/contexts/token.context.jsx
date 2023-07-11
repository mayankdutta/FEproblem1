import { createContext, useState } from "react";

import { useEffect } from "react";
import axios from "axios";

import { TOKEN_URI } from "../defaultValues";

export const TokenContext = createContext({});

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState();

  const findingFalcon = async () => {
    const data = await axios.post(
      TOKEN_URI,
      {},
      { headers: { Accept: "application/json" } }
    );

    setToken(data.data.token);
  };

  useEffect(() => {
    findingFalcon();
  }, []);

  const value = { token };

  return (
    <TokenContext.Provider value={value}>{children}</TokenContext.Provider>
  );
};
