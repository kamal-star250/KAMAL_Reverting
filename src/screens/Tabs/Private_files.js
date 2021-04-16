import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

class Private_files extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file_list: [
        {
          id: 0,
          file_name: "image -1",
        },
        {
          id: 1,
          file_name: "image -1",
        },
        {
          id: 2,
          file_name: "image -1",
        },
        {
          id: 3,
          file_name: "image -1",
        },
        {
          id: 4,
          file_name: "image -1",
        },
        {
          id: 5,
          file_name: "image -1",
        },
      ],
    };
  }
  render() {
    const { file_list } = this.state;
    return (
      <View style={{ height: "100%", backgroundColor: "#191C1E" }}>
        <View style={{ padding: 10, backgroundColor: "#31323B" }}>
          <Text style={styles.normal_text}>Private Files</Text>
        </View>
        <FlatList
          data={file_list}
          renderItem={({ item }) => (
            <View style={styles.file_container}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={styles.image_container}></View>
                <Text
                  style={[styles.normal_text, { color: "#F79535", left: 10 }]}
                >
                  Image -1
                </Text>
              </View>
              {/* anyone view */}
              <TouchableOpacity style={styles.anyone_container}>
                <Image
                  source={require("../../images/globe.png")}
                  style={styles.globe_icon}
                />
                <Text
                  style={[styles.normal_text, { fontSize: 10, paddingLeft: 5 }]}
                >
                  Anyone
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  normal_text: {
    color: "#fff",
    fontFamily: "Montserrat-Regular",
  },
  file_container: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  anyone_container: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#34363E",
    flexDirection: "row",
    alignItems: "center",
  },
  globe_icon: {
    width: 15,
    height: 15,
    resizeMode: "contain",
  },
  image_container: {
    width: 60,
    height: 60,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
});
export default Private_files;
