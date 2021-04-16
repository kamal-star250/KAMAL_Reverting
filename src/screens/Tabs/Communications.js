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
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from "accordion-collapse-react-native";
import CheckBox from "@react-native-community/checkbox";
import { Switch } from "react-native-switch";

class Communications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle_switch: false,
      room_checkbox: false,
      every_one_checkbox: false,
      email_checkbox: false,
      contact_checkbox: false,
    };
  }
  render() {
    const {
      room_checkbox,
      every_one_checkbox,
      email_checkbox,
      contact_checkbox,
    } = this.state;
    return (
      <SafeAreaView>
        <View style={{ height: "100%", backgroundColor: "#191C1E" }}>
          <ScrollView style={{ paddingVertical: "2%" }}>
            {/* who can reach you */}
            <Collapse style={{ paddingVertical: "1%" }}>
              <CollapseHeader>
                <View style={styles.email_container}>
                  <Text style={styles.normal_text}>Who can reach you</Text>
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
            {/* invitation to contact */}
            <Collapse style={{ paddingVertical: "1%" }}>
              <CollapseHeader>
                <View style={styles.email_container}>
                  <Text style={styles.normal_text}>Invitation to contact</Text>
                  <Image
                    source={require("../../images/networknext.png")}
                    style={styles.right_side_icon}
                  />
                </View>
              </CollapseHeader>
              <CollapseBody>
                <View style={{ padding: 10 }}>
                  <View style={styles.enyone_view}>
                    <Text style={[styles.normal_text, { color: "#F79535" }]}>
                      Everyone on Reverting
                    </Text>
                    <CheckBox
                      tintColors={({ true: "#F79535" }, { false: "#FFF" })}
                      value={every_one_checkbox}
                      onValueChange={() =>
                        this.setState({
                          every_one_checkbox: !every_one_checkbox,
                        })
                      }
                    />
                  </View>
                  <View style={styles.enyone_view}>
                    <View style={{ width: "90%" }}>
                      <Text style={[styles.normal_text]}>
                        Only people who know your email address {"\n"} {"\n"}or
                        appear in your "Approved Contacts" list
                      </Text>
                    </View>
                    <CheckBox
                      tintColors={({ true: "#F79535" }, { false: "#FFF" })}
                      value={email_checkbox}
                      onValueChange={() =>
                        this.setState({ email_checkbox: !email_checkbox })
                      }
                    />
                  </View>
                  <View style={styles.enyone_view}>
                    <View style={{ width: "90%" }}>
                      <Text style={[styles.normal_text]}>
                        Only people who appear in your all {"\n"}
                        {"\n"}"Imported Contact list"
                      </Text>
                    </View>
                    <CheckBox
                      tintColors={({ true: "#F79535" }, { false: "#FFF" })}
                      value={contact_checkbox}
                      onValueChange={() =>
                        this.setState({ contact_checkbox: !contact_checkbox })
                      }
                    />
                  </View>
                </View>
              </CollapseBody>
            </Collapse>
            {/*invitation from your network */}
            <Collapse style={{ paddingVertical: "1  %" }}>
              <CollapseHeader>
                <View style={styles.email_container}>
                  <Text style={styles.normal_text}>
                    Invitation from your network
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
            {/* messages*/}
            <Collapse style={{ paddingVertical: "1%" }}>
              <CollapseHeader>
                <View style={styles.email_container}>
                  <View style={{ width: "90%" }}>
                    <Text style={styles.normal_text}>messages</Text>
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
            {/*reply suggestion*/}
            <Collapse style={{ paddingVertical: "1  %" }}>
              <CollapseHeader>
                <View style={styles.email_container}>
                  <View style={{ width: "90%" }}>
                    <Text style={styles.normal_text}>Reply suggestion</Text>
                  </View>
                  <Image
                    source={require("../../images/networknext.png")}
                    style={styles.right_side_icon}
                  />
                </View>
              </CollapseHeader>
              <CollapseBody>
                <View style={{ padding: 10 }}>
                  <View style={styles.enyone_view}>
                    <View style={{ width: "85%" }}>
                      <Text style={[styles.normal_text]}>
                        Choose Chooses if you want to see {"\n"}recommended
                        replies when responding{"\n"}to a message
                      </Text>
                    </View>
                    <Switch
                      height={20}
                      activeText={false}
                      inActiveText={false}
                      circleSize={20}
                      barHeight={22}
                      // trackColor={{ false: "#F79535", true: "#F79535" }}
                      thumbColor={this.state.toggle_switch ? "#000" : "#000"}
                      value={this.state.toggle_switch}
                      onValueChange={(toggle_switch) =>
                        this.setState({ toggle_switch })
                      }
                    />
                    {/* <CheckBox
                      tintColors={({ true: "#F79535" }, { false: "#FFF" })}
                      value={email_checkbox}
                      onValueChange={() =>
                        this.setState({ email_checkbox: !email_checkbox })
                      }
                    /> */}
                  </View>
                </View>
              </CollapseBody>
            </Collapse>
            {/*read receipts and typing indicators*/}
            <Collapse style={{ paddingVertical: "1  %" }}>
              <CollapseHeader>
                <View style={styles.email_container}>
                  <View style={{ width: "90%" }}>
                    <Text style={styles.normal_text}>
                      Read receipts and typing indicators
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
  enyone_view: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "grey",
  },
});
export default Communications;
