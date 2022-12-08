import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { Styles } from "../../styles/Styles";
import { datraFavorite, naviagtion } from "../../ts/types";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Entypo, EvilIcons, MaterialIcons } from "@expo/vector-icons";
import Constant from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";
import Starts from "../../components/minicomponets/Start";
import { useMemo, useRef, useState } from "react";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import FavoritoAdd from "../../components/minicomponets/FavoritoAdd";
import AlertCustom from "../../components/AlertCustom/AlertCustom";

interface Capitulos {
  episode: number;
  id: string;
  imagePreview: string;
  nextEpisodeDate: string;
}

export default function AnimePreviw({ route, navigation }: naviagtion) {
  const { id, episode, type, synopsis, rating, genres, poster, name, debut } =
    route.params;

  const imageProcimo =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd6_z0Nk_vPrqKIeMLY3NV_zaUyLvmvpp153k7PFEf6Wmo0aVnetXrtG-zvOJL7stWDrc&usqp=CAU";

  const { width, height } = Dimensions.get("window");

  const share = async () => {};



  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(
    () => ["50%","90%"], []);

  /// array   delete next episode

  const [Alert, setAlert] = useState(false);
  const [error, setError] = useState(false);

  const INfoAnime = {
    id: id,
    episode: episode,
    synopsis: synopsis,
    type: type,
    rating: rating,
    genres: genres,
    poster: poster,
    name: name,
    debut: debut,
  };

  return (
    <View style={styles.body}>
      <View style={styles.banner}>
        <View style={styles.arrows}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo name="chevron-small-left" size={35} color="white" />
          </TouchableOpacity>

          <TouchableOpacity onPress={share}>
            <EvilIcons name="share-apple" size={30} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.backgranOpasiti} />

        <View style={styles.imgBannerContainer}>
          <Image source={{ uri: poster }} style={styles.imgBanner} />
        </View>

        <LinearGradient
          colors={["transparent", Styles.dacrkColor.color]}
          style={styles.gradient}
        />

        <View style={styles.info}>
          <View style={styles.imgenConted}>
            <Image style={styles.imgBanner} source={{ uri: poster }} />
          </View>


          <View style={styles.metainfo}>
            <Text numberOfLines={2} style={styles.name}>
              {name}
            </Text>
            <Starts star={Math.trunc(parseInt(rating))} />

            <FlatList
              horizontal
              data={genres}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Generes", { Generes: item })
                  }
                >
                  <Text style={styles.generos}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        handleIndicatorStyle={{
          backgroundColor: "rgba(19, 28, 30, 1)",
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
        handleStyle={{
          backgroundColor: Styles.dacrkColor.color,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
      >
        <BottomSheetFlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ backgroundColor: Styles.dacrkColor.color }}
          data={[]}
          renderItem={({ item, index }) => <></>}
          ListHeaderComponent={
            <View>
              <LinearGradient
                colors={[
                  Styles.dacrkColor.color,
                  "rgba(19, 28, 30, 1)",
                  Styles.dacrkColor.color,
                ]}
                style={{
                  width: "100%",
                  height: 600,
                  position: "absolute",
                  top: 0,
                }}
              />

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 10,
                }}
              >
                <Text
                  style={[styles.textINfoLOve, { color: "white" }]}
                >
                  {type}
                </Text>
                <Text
                  style={[
                    styles.textINfoLOve,
                    debut === "En emision"
                      ? { color: "rgb(0, 247, 255)" }
                      : { color: "red" },
                  ]}
                >
                  {debut}
                </Text>
                <Text style={[styles.textINfoLOve]}>{`Ep: ${
                   !episode? []  :episode.length - 1
                }`}</Text>
                <FavoritoAdd data={INfoAnime as any } id={id} />
              </View>

              <View style={[styles.Sinopsis]}>
                <Text style={[styles.sinopsiText]}>{synopsis}</Text>
              </View>
            </View>
          }
          ListEmptyComponent={
            <>
              <View style={styles.containerCapitulos}>
                <Text style={[styles.textCapitulo]}>Capitulos</Text>
                <View style={styles.episodeoListContainer}>
                  {episode?.map((e: Capitulos) => (
                        <TouchableOpacity
                        onPress={() =>
                          e.episode === undefined
                            ? null
                            : navigation.navigate("videoPlayer", {
                                EPid: e.id,
                                nameCapi: e.episode,
                                nsmeAnime: name,
                              })
                        }
                          key={e.episode}
                          style={styles.Capitulos}
                        >
                          <View style={styles.imagenEpisodeoConte}>
                            <Image
                              source={{
                                uri:
                                  e.episode === undefined
                                    ? imageProcimo
                                    : e.imagePreview,
                              }}
                              style={{
                                borderRadius: 7,
                                width: "100%",
                                height: "100%",
                              }}
                            />
                          </View>

                          <View style={styles.capituloINfo}>
                            <Text
                              numberOfLines={2}
                              style={[
                                {
                                  paddingRight: "38%",
                                  marginBottom: 5,
                                  color: "white",
                                },
                              ]}
                            >
                              {name}
                            </Text>
                            <Text
                              style={[
                                e.episode === undefined
                                  ? styles.capituloextreno
                                  : styles.capitulostile,
                              ]}
                            >
                              {e.episode === undefined
                                ? "Próximo " + e.nextEpisodeDate
                                : "Episodeo " + e.episode}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      ))}
                </View>
              </View>

{/* 
      <AlertCustom title="agregado"  /> */}
            </>
          }
        />
      </BottomSheet>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    height: "100%",
    backgroundColor: Styles.dacrkColor.color,
  },

  banner: {
    height: "47%",
    backgroundColor: "rgba(18, 27, 28, 0.766)",
    position: "relative",
  },

  arrows: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: Constant.statusBarHeight,
    position: "absolute",
    zIndex: 5,
    top: 0,
  },

  imgBannerContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  imgBanner: {
    width: "100%",
    height: "100%",
    borderRadius: 6,
  },

  backgranOpasiti: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(18, 27, 28, 0.766)",
    zIndex: 2,
  },

  gradient: {
    zIndex: 4,
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "100%",
  },

  info: {
    position: "absolute",
    bottom: 0,
    zIndex: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    height: 170,
  },

  imgenConted: {
    width: 115,
    height: 170,
  },

  metainfo: {
    height: "100%",
    width: "70%",
    paddingRight: 10,
    paddingLeft: 10,
    justifyContent: "flex-start",
    marginTop: "30%",
  },

  name: {
    color: "white",
    fontWeight: "500",
    fontSize: 22,
  },

  generos: {
    marginRight: 5,
    color: "white",
    padding: 5,
    borderRadius: 5,
    textTransform: "capitalize",
    backgroundColor: Styles.colors.color,
  },

  //// information extra  styles

  imagenconted: {
    width: 110,
    height: 170,
  },

  InfoContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    position: "absolute",
    bottom: 0,
    alignItems: "center",
  },

  nameNimeInfo: {
    width: "60%",
    paddingRight: 5,
    textAlignVertical: "center",
    fontWeight: "700",
    fontSize: 20,
  },

  Sinopsis: {
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  sinopsiText: {
    color: "white",
    borderRadius: 6,
    /*     backgroundColor: "rgba(19, 28, 30, 0.91)", */
    fontWeight: "400",
    paddingVertical: 10,
    paddingHorizontal: 7,
  },

  containerCapitulos: {
    paddingHorizontal: 20,
  },

  textCapitulo: {
    color: "white",
    marginTop: 10,
    fontSize: 16,
  },

  episodeoListContainer: {
    marginTop: 10,
  },

  ///////  estilos capitulos

  imagenEpisodeoConte: {
    width: 140,
    height: 100,
    marginVertical: 10,
    backgroundColor: "black",
    borderRadius: 7,
  },

  Capitulos: {
    flexDirection: "row",
    alignItems: "center",
  },

  capituloINfo: {
    paddingLeft: 10,
  },

  capituloextreno: {
    color: "rgb(0, 255, 170)",
    fontWeight: "500",
  },

  capitulostile: {
    color: "rgb(255, 186, 0)",
    fontWeight: "500",
  },


  /* rgb(0, 247, 255) */
  /// info  love

  textINfoLOve: {
    color: "white",
    fontSize: 16,
    marginHorizontal: 10,
    textTransform: "capitalize",
    fontWeight: "500",
  },
});
