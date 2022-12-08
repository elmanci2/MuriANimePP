import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { addFavoriteType, datraFavorite } from "../../ts/types";
import { AppConfigContex } from "../../context/Context";
import * as SecureStore from "expo-secure-store";



export default function FavoritoAdd({ data, id }: addFavoriteType) {
  const [Active, setActive] = useState(false);

  const { setAddFavotito, addFavotito } = useContext(AppConfigContex);

  useEffect(() => {
    addFavotito === undefined
      ? null
      : addFavotito.filter((x: datraFavorite) => {
          x.id.includes(id as any) ? setActive(true) : null;
        });
  }, [addFavotito]);

  const addToFavorite = async () => {
    setAddFavotito([]);
    setActive(!Active);
    setAddFavotito([data, ...addFavotito]);
    await  SecureStore.setItemAsync (
      "Favoritoslist",
      JSON.stringify(addFavotito)
    );
  };

  const removeToFavorite = async () => {
    setActive(!Active);
    const quitar = addFavotito.filter((x: datraFavorite) => x.id !== id);
    setAddFavotito(quitar);
    const item   = await  SecureStore.setItemAsync (
      "Favoritoslist",
      JSON.stringify(addFavotito)
    );

    console.log(item)
    
  };



  return (
    <TouchableOpacity onPress={() => setActive(!Active)}>
      {Active ? (
        <TouchableOpacity onPress={removeToFavorite}>
          <MaterialIcons name="favorite" size={24} color="red" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={addToFavorite}>
          <MaterialIcons name="favorite-outline" size={24} color="red" />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
