import React, { createContext } from "react";

export const WatchListContext = createContext(null);

export default function WatchListContextProvider({ children }) {
  const value = {};
  return (
    <WatchListContext.Provider value={value}>
      {children}
    </WatchListContext.Provider>
  );
}
