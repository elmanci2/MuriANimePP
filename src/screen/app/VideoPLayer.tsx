import { ResizeMode } from "expo-av";

import { StyleSheet, Text, View, StatusBar, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useBackHandler } from "@react-native-community/hooks";

import VideoPlayer from "../../components/videoPLayerComponent/dist";
import useFetch from "../../hook/useFetch";

interface props {
  route: any;
  navigation: any;
}

export default function VideoPLayer({ route, navigation }: props) {
  const votear = () => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    StatusBar.setHidden(false);
  };
  useBackHandler(votear as any);

  const { EPid, nameCapi, nsmeAnime } = route.params;

  const [urls, seturls] = useState([]);

  const { data, loading } = useFetch(
    `server/${EPid.split("/").slice(1).toString()}`
  );

  console.log(EPid);

  const febedUrl = async (id: string) => {
    const redirect = await fetch(`https://fembed.com/v/${id}`).then((res) =>
      res.url.replace("/v/", "/api/source/")
    );
    const video = await fetch(redirect, { method: "POST" }).then((res) =>
      res.json()
    );
    if (!video["success"]) return { success: false };
    seturls(video);
  };

  febedUrl(data === undefined ? "" : data[1].urls);

  StatusBar.setHidden(true);
  ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.LANDSCAPE_LEFT ||
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
  );
  return (
    <View style={styles.containerVideo}>
      <VideoPlayer
        videoProps={{
          shouldPlay: true,
          resizeMode: ResizeMode.CONTAIN,
          source: {
            uri: !urls ? "" : urls.data[0].file ,
          },
        }}
        fullscreen={{
          visible: false,
        }}
        icon={{
          title: nsmeAnime + " EP " + nameCapi,
          play: <Feather name="play" size={30} color="white" />,
          pause: (
            <MaterialCommunityIcons name="pause" size={40} color="white" />
          ),
        }}
        style={{
          width: Dimensions.get("window").width,
          videoBackgroundColor: "rgba(0, 0, 0, 9.99)",
          controlsBackgroundColor: "rgba(0, 0, 0, 9.99)",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerVideo: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    position: "relative",
  },
});
