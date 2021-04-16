import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  SafeAreaView,
} from "react-native";
import Modal from "react-native-modal";

const Large_header = ({ navigation, profilepress, qrpress }) => {
  return (
    <View style={styles.container_view}>
      {/* left side user icon */}
      <TouchableOpacity onPress={profilepress}>
        <Image
          source={require("../images/user.png")}
          style={styles.user_icons}
        />
      </TouchableOpacity>
      {/* search bar view */}
      <View style={styles.search_bar_view}>
        {/* text input  */}
        <TextInput style={[styles.normal_text, { width: "80%", height: 40 }]} />
        {/* right side search icon */}
        <TouchableOpacity onPress={profilepress}>
          <Image
            source={require("../images/search.png")}
            style={{ width: 20, height: 20, resizeMode: "contain" }}
          />
        </TouchableOpacity>
      </View>
      {/* right side notification icon */}
      <TouchableOpacity onPress={qrpress}>
        <Image
          source={require("../images/headerqr.png")}
          style={styles.user_icons}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container_view: {
    height: 60,
    backgroundColor: "#121212",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "2%",
  },
  search_bar_view: {
    width: "70%",
    height: 40,
    backgroundColor: "#31323B",
    opacity: 0.8,
    borderRadius: 20,
    paddingHorizontal: "3%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  user_icons: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  normal_text: {
    color: "#fff",
    fontFamily: "Montserrat-Regular",
  },
});
export default Large_header;
