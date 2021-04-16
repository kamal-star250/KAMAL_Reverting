import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Large_header from "../../common/Large_header";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from "accordion-collapse-react-native";

class Privacy extends Component {
  constructor(props) {
    super(props);
    // this.state = {  };
  }
  render() {
    return (
      <SafeAreaView>
        <View style={{ height: "100%", backgroundColor: "#191C1E" }}>
          <ScrollView style={{ paddingVertical: "2%" }}>
            {/* Edit publc profile  */}
            <Collapse style={{ paddingVertical: "1%" }}>
              <CollapseHeader>
                <View style={styles.email_container}>
                  <Text style={styles.normal_text}>Edit publc profile</Text>
                  <Image
                    source={require("../../images/networknext.png")}
                    style={styles.right_side_icon}
                  />
                </View>
              </CollapseHeader>
              <CollapseBody>
                <View style={{ padding: 10 }}>
                  <View style={{ height: 100 }}></View>
                </View>
              </CollapseBody>
            </Collapse>
            {/* Who can see your email address */}
            <Collapse style={{ paddingVertical: "1  %" }}>
              <CollapseHeader>
                <View style={styles.email_container}>
                  <Text style={styles.normal_text}>
                    Who can see your email address
                  </Text>
                  <Image
                    source={require("../../images/networknext.png")}
                    style={styles.right_side_icon}
                  />
                </View>
              </CollapseHeader>
              <CollapseBody>
                <View style={{ padding: 10 }}>
                  <View style={{ height: 100 }}></View>
                </View>
              </CollapseBody>
            </Collapse>
            {/*Manage active status */}
            <Collapse style={{ paddingVertical: "1  %" }}>
              <CollapseHeader>
                <View style={styles.email_container}>
                  <Text style={styles.normal_text}>Manage active status</Text>
                  <Image
                    source={require("../../images/networknext.png")}
                    style={styles.right_side_icon}
                  />
                </View>
              </CollapseHeader>
              <CollapseBody>
                <View style={{ padding: 10 }}>
                  <View style={{ height: 100 }}></View>
                </View>
              </CollapseBody>
            </Collapse>
            {/* who can see your connections*/}
            <Collapse style={{ paddingVertical: "1  %" }}>
              <CollapseHeader>
                <View style={styles.email_container}>
                  <View style={{ width: "90%" }}>
                    <Text style={styles.normal_text}>
                      Who can see your connections
                    </Text>
                  </View>
                  <Image
                    source={require("../../images/networknext.png")}
                    style={styles.right_side_icon}
                  />
                </View>
              </CollapseHeader>
              <CollapseBody>
                <View style={{ padding: 10 }}>
                  <View style={{ height: 100 }}></View>
                </View>
              </CollapseBody>
            </Collapse>
            {/*who can follow you*/}
            <Collapse style={{ paddingVertical: "1  %" }}>
              <CollapseHeader>
                <View style={styles.email_container}>
                  <View style={{ width: "90%" }}>
                    <Text style={styles.normal_text}>Who can follow you</Text>
                  </View>
                  <Image
                    source={require("../../images/networknext.png")}
                    style={styles.right_side_icon}
                  />
                </View>
              </CollapseHeader>
              <CollapseBody>
                <View style={{ padding: 10 }}>
                  <View style={{ height: 100 }}></View>
                </View>
              </CollapseBody>
            </Collapse>
            {/*who can discover by email*/}
            <Collapse style={{ paddingVertical: "1  %" }}>
              <CollapseHeader>
                <View style={styles.email_container}>
                  <View style={{ width: "90%" }}>
                    <Text style={styles.normal_text}>
                      Manage who can discover your profile from your email
                    </Text>
                  </View>
                  <Image
                    source={require("../../images/networknext.png")}
                    style={styles.right_side_icon}
                  />
                </View>
              </CollapseHeader>
              <CollapseBody>
                <View style={{ padding: 10 }}>
                  <View style={{ height: 100 }}></View>
                </View>
              </CollapseBody>
            </Collapse>
            {/*who can discover by contact */}
            <Collapse style={{ paddingVertical: "1%" }}>
              <CollapseHeader>
                <View style={styles.email_container}>
                  <View style={{ width: "90%" }}>
                    <Text style={styles.normal_text}>
                      Manage who can discover your profile from your contact
                      number
                    </Text>
                  </View>
                  <Image
                    source={require("../../images/networknext.png")}
                    style={styles.right_side_icon}
                  />
                </View>
              </CollapseHeader>
              <CollapseBody>
                <View style={{ padding: 10 }}>
                  <View style={{ height: 100 }}></View>
                </View>
              </CollapseBody>
            </Collapse>
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
  email_container: {
    paddingVertical: "3%",
    backgroundColor: "#121212",
    alignItems: "center",
    paddingHorizontal: "3%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  right_side_icon: {
    width: 15,
    height: 15,
    resizeMode: "contain",
  },
});
export default Privacy;
