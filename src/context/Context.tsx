import { createContext, useEffect, useState } from "react";
import { addFavoriteType, Children } from "../ts/types";
import * as SecureStore from "expo-secure-store";

export const AppConfigContex = createContext({} as any);

 export  const MayProvaiderFuction = ({ children }: Children) => {
  const [UserInfo, setUserInfo] = useState();

  const [isUser, setIsUser] = useState(false);

  const [addFavotito, setAddFavotito] = useState<Array<addFavoriteType>>([]);

  console.log(addFavotito);
  

  return (
    <AppConfigContex.Provider
      value={{ isUser, setIsUser, setAddFavotito, addFavotito }}
    >
      {children}
    </AppConfigContex.Provider>
  );
};
