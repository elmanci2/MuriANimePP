import "dotenv/config";

export default {
  expo: {
    name: "MuriAnime",
    slug: "MuriAnime",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/Muri/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/Muri/splascreen.png",
      resizeMode: "contain",
      backgroundColor: "#5764c5",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },

    extra: {
      APY_KY: process.env.APY_KY,
      authDomain: process.env.authDomain,
      projectId: process.env.projectId,
      storageBucket: process.env.storageBucket,
      messagingSenderId: process.env.messagingSenderId,
      appId: process.env.appId,
      measurementId: process.env.measurementId,
    },
  },
};
