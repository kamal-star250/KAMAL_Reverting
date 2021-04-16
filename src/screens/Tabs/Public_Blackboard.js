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
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from "accordion-collapse-react-native";

class Public_Blackboard extends Component {
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
        {/* <Text style={{ color: "#fff" }}>Your Public Black Here</Text> */}
        <Collapse style={{ paddingVertical: "1%" }}>
          <CollapseHeader>
            <View style={styles.collapse_header_view}>
              <Text style={styles.normal_text}>Who can reach you</Text>
              <Image
                source={require("../../images/add1.png")}
                style={styles.right_side_icon}
              />
            </View>
          </CollapseHeader>
          <CollapseBody>
            <View style={{ padding: 10 }}>
              <Text style={styles.normal_text}>Upload document or file</Text>
              <View style={styles.upload_main_view}>
                {/* upload a file view */}
                <View style={styles.upload_view}>
                  <Text style={[styles.normal_text, { color: "#F79535" }]}>
                    Name of file
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity style={{ right: 20 }}>
                      <Image
                        source={require("../../images/upload.png")}
                        style={styles.upload_icon}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image
                        source={require("../../images/add1.png")}
                        style={styles.upload_icon}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              {/*Save Button  */}
              <View style={{ paddingVertical: 10 }}>
                <TouchableOpacity style={styles.save_button}>
                  <Text style={styles.normal_text}>SAVE</Text>
                </TouchableOpacity>
              </View>
            </View>
          </CollapseBody>
        </Collapse>
        <View
          style={{
            padding: 10,
            borderBottomColor: "grey",
            borderBottomWidth: 1,
          }}
        >
          <Text style={styles.normal_text}>Private Files</Text>
        </View>
        {/* private files list */}
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
              <View>
                <TouchableOpacity style={styles.delete_icon}>
                  <Image
                    source={require("../../images/delete.png")}
                    style={styles.right_side_icon}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.anyone_container}>
                  <Image
                    source={require("../../images/globe.png")}
                    style={styles.globe_icon}
                  />
                  <Text
                    style={[
                      styles.normal_text,
                      { fontSize: 10, paddingLeft: 5 },
                    ]}
                  >
                    Private
                  </Text>
                </TouchableOpacity>
              </View>
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
  collapse_header_view: {
    paddingVertical: "3%",
    backgroundColor: "#121212",
    alignItems: "center",
    paddingHorizontal: "3%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  right_side_icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  upload_icon: {
    width: 15,
    height: 15,
    resizeMode: "contain",
  },
  upload_main_view: {
    padding: 5,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  upload_view: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  save_button: {
    padding: 10,
    height: 30,
    width: 60,
    backgroundColor: "#F79535",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
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
  delete_icon: {
    alignSelf: "flex-end",
    paddingVertical: 5,
    paddingRight: 5,
  },
});
export default Public_Blackboard;
