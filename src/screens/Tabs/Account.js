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
import { Switch } from "react-native-switch";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle_switch: false,
    };
  }
  render() {
    const { toggle_switch } = this.props;
    return (
      <SafeAreaView>
        <View style={{ height: "100%", backgroundColor: "#191C1E" }}>
          <ScrollView>
            {/* Email address  */}
            <Collapse style={{ paddingVertical: "1%" }}>
              <CollapseHeader>
                <View style={styles.email_container}>
                  <Text style={styles.normal_text}>Email addresses</Text>
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
            {/* Phone numbers   */}
            <Collapse style={{ paddingVertical: "1  %" }}>
              <CollapseHeader>
                <View style={styles.email_container}>
                  <Text style={styles.normal_text}>Phone number</Text>
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
            {/* Change password */}
            <Collapse style={{ paddingVertical: "1  %" }}>
              <CollapseHeader>
                <View style={styles.email_container}>
                  <Text style={styles.normal_text}>Change password</Text>
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
            {/* Two step Verification */}
            <Collapse style={{ paddingVertical: "1  %" }}>
              <CollapseHeader>
                <View style={styles.email_container}>
                  <Text style={styles.normal_text}>Two step Verification</Text>
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
            {/*Sync contact*/}
            <Collapse style={{ paddingVertical: "1  %" }}>
              <CollapseHeader>
                <View style={styles.email_container}>
                  <Text style={styles.normal_text}>Sync contact</Text>
                  <Image
                    source={require("../../images/networknext.png")}
                    style={styles.right_side_icon}
                  />
                </View>
              </CollapseHeader>
              <CollapseBody>
                <View
                  style={{
                    padding: 10,
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <Text style={styles.normal_text}>Sync contact</Text>
                  <Switch
                    height={20}
                    activeText={false}
                    inActiveText={false}
                    circleSize={20}
                    barHeight={20}
                    trackColor={{ false: "#D4330D", true: "#BEBEBE" }}
                    thumbColor={this.state.toggle_switch ? "#000" : "#000"}
                    value={this.state.toggle_switch}
                    onValueChange={(toggle_switch) =>
                      this.setState({ toggle_switch })
                    }
                  />
                </View>
              </CollapseBody>
            </Collapse>
            {/*App lock*/}
            <Collapse style={{ paddingVertical: "1  %" }}>
              <CollapseHeader>
                <View style={styles.email_container}>
                  <Text style={styles.normal_text}>App lock</Text>
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
            {/*Close Account*/}
            <Collapse style={{ paddingVertical: "1%" }}>
              <CollapseHeader>
                <View style={styles.email_container}>
                  <Text style={styles.normal_text}>Close Account</Text>
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

            <View
              style={{
                paddingHorizontal: "3%",
                paddingVertical: "1%",
                paddingTop: 10,
              }}
            >
              {/*Help center*/}
              <Collapse style={{ paddingVertical: "1%" }}>
                <CollapseHeader>
                  <View style={styles.help_center_view}>
                    <Text style={styles.normal_text}>Help center</Text>
                  </View>
                </CollapseHeader>
                <CollapseBody>
                  <View style={{ padding: 10 }}>
                    <View style={{ height: 100 }}></View>
                  </View>
                </CollapseBody>
              </Collapse>
              {/*user aggriment end user license agreement*/}
              <Collapse style={{ paddingVertical: "1%" }}>
                <CollapseHeader>
                  <View style={styles.help_center_view}>
                    <Text style={styles.normal_text}>User aggriment</Text>
                  </View>
                </CollapseHeader>
                <CollapseBody>
                  <View style={{ padding: 10 }}>
                    <View style={{ height: 100 }}></View>
                  </View>
                </CollapseBody>
              </Collapse>
              {/*End user license agreement*/}
              <Collapse style={{ paddingVertical: "1%" }}>
                <CollapseHeader>
                  <View style={styles.help_center_view}>
                    <Text style={styles.normal_text}>
                      End user license agreement
                    </Text>
                  </View>
                </CollapseHeader>
                <CollapseBody>
                  <View style={{ padding: 10 }}>
                    <View style={{ height: 100 }}></View>
                  </View>
                </CollapseBody>
              </Collapse>
              {/*Sign out*/}
              <Collapse style={{ paddingVertical: "1%" }}>
                <CollapseHeader>
                  <View style={styles.help_center_view}>
                    <Text style={styles.normal_text}>Sign out</Text>
                  </View>
                </CollapseHeader>
                {/* <CollapseBody>
                  <View style={{ padding: 10 }}>
                    <Text style={styles.normal_text}>XXXXXXXXXX</Text>
                  </View>
                </CollapseBody> */}
              </Collapse>
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
  email_container: {
    backgroundColor: "#121212",
    alignItems: "center",
    paddingHorizontal: "3%",
    flexDirection: "row",
    paddingVertical: "3%",
    justifyContent: "space-between",
  },
  help_center_view: {
    height: 30,
    borderBottomWidth: 1,
    borderColor: "grey",
  },
  right_side_icon: {
    width: 15,
    height: 15,
    resizeMode: "contain",
  },
});
export default Account;
