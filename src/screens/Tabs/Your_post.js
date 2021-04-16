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
import Button from "../../common/Button";

class Your_post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Post_Available: true,
      post_list: [
        {
          id: 0,
          text:
            " Lorem Ipsum has been the industrys standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          can_see: "Anyone",
          hashtag: "#pizza, #burger",
        },
        {
          id: 1,
          text:
            " Lorem Ipsum has been the industrys standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          can_see: "Anyone",
          hashtag: "#pizza, #burger",
        },
        {
          id: 2,
          text:
            " Lorem Ipsum has been the industrys standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          can_see: "Anyone",
          hashtag: "#pizza, #burger",
        },
      ],
    };
  }
  render() {
    const { Post_Available, post_list } = this.state;
    return (
      <View style={{ height: "100%", backgroundColor: "#191C1E" }}>
        {Post_Available == false ? (
          /////////////////// IF NO POST AVAILABLE HERE ///////////////////////////
          <View style={{ flex: 1, alignItems: "center" }}>
            <View style={{ paddingTop: 50, paddingHorizontal: 10 }}>
              <Text
                style={[styles.normal_text, { fontFamily: "Montserrat-Bold" }]}
              >
                You haven't send any message yet,{"\n"} when done, they will
                appear here
              </Text>
            </View>
            <View style={{ paddingTop: 50, paddingHorizontal: 10 }}>
              <Text style={[styles.normal_text, { color: "#F79535" }]}>
                When you published with photos and{"\n"} videosthen,there will
                show up here
              </Text>
            </View>
            <View style={styles.post_btn_view}>
              <Button
                btnheight={50}
                btnwidth={"100%"}
                bgcolor={"#F79535"}
                //   onPress={() => this.register()}
              >
                CREATE POST
              </Button>
            </View>
          </View>
        ) : (
          <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 5 }}>
            {/* user post list  */}
            <FlatList
              data={post_list}
              renderItem={({ item }) => (
                <View style={{ paddingVertical: 5 }}>
                  <View style={styles.post_container}>
                    {/* text container */}
                    <View style={styles.text_container}>
                      <Text style={styles.post_text}>{item.text}</Text>
                    </View>
                    {/* who can see this post */}
                    <View style={styles.anyone_container}>
                      {/* left side */}
                      <View style={styles.left_side}>
                        <Image
                          source={require("../../images/email1.png")}
                          style={styles.email_icon}
                        />
                        <Text
                          style={[
                            styles.post_text,
                            { color: "#fff", left: 10 },
                          ]}
                        >
                          {item.can_see}
                        </Text>
                      </View>
                      {/* right side */}
                      <View style={styles.left_side}>
                        <Text style={[styles.post_text, { color: "#F79535" }]}>
                          {item.hashtag}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              )}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  normal_text: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
    fontFamily: "Montserrat-Regular",
  },
  post_text: {
    fontFamily: "Montserrat-Regular",
    color: "#BBBCBD",
  },
  post_btn_view: {
    paddingHorizontal: 10,
    width: "100%",
    bottom: 20,
    position: "absolute",
  },
  post_container: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#121212",
  },
  text_container: {
    borderBottomWidth: 1,
    borderColor: "grey",
    paddingVertical: 5,
  },
  anyone_container: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    justifyContent: "space-between",
  },
  left_side: {
    flexDirection: "row",
    alignItems: "center",
  },
  email_icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});
export default Your_post;
