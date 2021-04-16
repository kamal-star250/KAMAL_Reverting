import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

class Members extends Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }
  render() {
    return (
      <SafeAreaView>
        <View style={{ height: "100%", backgroundColor: "#191C1E" }}>
          <ScrollView>
            <View style={styles.profile_container}>
              {/* left side view */}
              <View>
                <ImageBackground
                  style={styles.profile_back_image}
                  source={require("../../images/profileback.png")}
                >
                  <Image
                    source={require("../../images/Alice.png")}
                    style={styles.profile_image}
                  />
                </ImageBackground>
              </View>
              {/* right side view */}
              <View style={{ left: 10, width: "60%" }}>
                <View>
                  <Text style={styles.username}>User 1</Text>
                  <Text style={[styles.normal_text, { color: "grey" }]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </View>
              </View>
            </View>

            {/* invited */}
            <View style={styles.heading_container}>
              <Text style={styles.normal_text}>Invited</Text>
            </View>
            <View>
              <View style={styles.user_list_container}>
                <Image
                  source={require("../../images/group.png")}
                  style={styles.user_icon}
                />
                <Text style={styles.user_name}>Dennis Matthews</Text>
              </View>
            </View>

            {/*    Topic copied*/}

            <View style={styles.heading_container}>
              <Text style={styles.normal_text}>
                Topic copied to the following withness
              </Text>
            </View>
            <View>
              <View style={styles.user_list_container}>
                <Image
                  source={require("../../images/group.png")}
                  style={styles.user_icon}
                />
                <Text style={styles.user_name}>Dennis Matthews</Text>
              </View>
            </View>
            <View>
              <View style={styles.user_list_container}>
                <Image
                  source={require("../../images/group.png")}
                  style={styles.user_icon}
                />
                <Text style={styles.user_name}>Dennis Matthews</Text>
              </View>
            </View>
            {/* invited */}
            <View style={styles.heading_container}>
              <Text style={styles.normal_text}>
                Blacklisted from this Topics
              </Text>
            </View>
            <View>
              <View style={styles.user_list_container}>
                <Image
                  source={require("../../images/group.png")}
                  style={styles.user_icon}
                />
                <Text style={styles.user_name}>Dennis Matthews</Text>
              </View>
            </View>
            <View>
              <View style={styles.user_list_container}>
                <Image
                  source={require("../../images/group.png")}
                  style={styles.user_icon}
                />
                <Text style={styles.user_name}>Dennis Matthews</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  normal_text: {
    color: "#fff",
    fontFamily: "Montserrat-Regular",
  },
  profile_container: {
    paddingVertical: "1%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  profile_back_image: {
    width: 110,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  profile_image: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    top: -5,
  },
  username: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Montserrat-ExtraBold",
  },
  heading_container: {
    paddingHorizontal: "3%",
    height: 40,
    backgroundColor: "#31323B",
    justifyContent: "center",
  },
  user_list_container: {
    paddingHorizontal: "3%",
    paddingVertical: "2%",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "grey",
    backgroundColor: "#121212",
  },
  user_icon: {
    height: 60,
    width: 60,
    resizeMode: "contain",
  },
  user_name: {
    color: "#F79535",
    left: 10,
    fontFamily: "Montserrat-Regular",
  },
});
export default Members;
