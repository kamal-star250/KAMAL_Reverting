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

class Media_links extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Post_Available: true,
      post_list: [
        {
          id: 0,
          text:
            "https://docs.google.com/spreadsheets/d/1rB9q AIDQQL2QxegHtZAnTnKuuQAjbIZZ/edit#gid= 1269921081",
        },
        {
          id: 1,
          text:
            "https://docs.google.com/spreadsheets/d/1rB9q AIDQQL2QxegHtZAnTnKuuQAjbIZZ/edit#gid= 1269921081",
        },
        {
          id: 2,
          text:
            "https://docs.google.com/spreadsheets/d/1rB9q AIDQQL2QxegHtZAnTnKuuQAjbIZZ/edit#gid= 1269921081",
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
                    <TouchableOpacity style={styles.anyone_container}>
                      <Text
                        style={[styles.post_text, { fontSize: 10, left: 5 }]}
                      >
                        View messages
                      </Text>
                      <Image
                        source={require("../../images/nexticon.png")}
                        style={styles.email_icon}
                      />
                    </TouchableOpacity>
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
    borderRadius: 10,
    backgroundColor: "#121212",
  },
  text_container: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  anyone_container: {
    backgroundColor: "#000",
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: "space-between",
  },
  left_side: {
    flexDirection: "row",
    alignItems: "center",
  },
  email_icon: {
    width: 15,
    height: 15,
    resizeMode: "contain",
  },
});
export default Media_links;
