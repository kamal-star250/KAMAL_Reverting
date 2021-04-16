import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Switch } from "react-native-switch";
import CheckBox from "@react-native-community/checkbox";
class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle_switch: false,
      room_checkbox: false,
      history_checkbox: false,
    };
  }
  render() {
    const { toggle_switch, room_checkbox, history_checkbox } = this.state;
    return (
      <SafeAreaView>
        <View style={{ height: "100%", backgroundColor: "#191C1E" }}>
          <ScrollView>
            <View style={{ paddingHorizontal: "3%", paddingVertical: "1%" }}>
              {/* topic name */}
              <View style={styles.Topic_view}>
                <Text style={styles.normal_text}>Topic</Text>
                <Text style={[styles.normal_text, { color: "#F79535" }]}>
                  #Pizza
                </Text>
              </View>
              {/* mute notification */}
              <View style={styles.Topic_view}>
                <Text style={styles.normal_text}>Mute Notification</Text>
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
              </View>
              <View style={{ paddingVertical: "2%" }}>
                <View
                  style={{
                    padding: 20,
                    backgroundColor: "#121212",
                    borderRadius: 20,
                  }}
                >
                  <Text style={[styles.normal_text, { color: "grey" }]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque nisl eros, pulvinar facilisis justo mollis, auctor
                    consequat urna. Morbi a bibendum metus. Donec scelerisque
                    sollicitudin enim eu venenatis.
                  </Text>
                </View>
              </View>
            </View>
            {/* who can access */}
            <View style={styles.heading_view}>
              <Text style={styles.normal_text}>Who can access this room? </Text>
            </View>
            <View style={styles.inner_view}>
              <View style={{ width: "90%" }}>
                <Text style={styles.normal_text}>
                  Only people who have been invited
                </Text>
              </View>
              <CheckBox
                tintColors={({ true: "#F79535" }, { false: "#FFF" })}
                value={room_checkbox}
                onValueChange={() =>
                  this.setState({ room_checkbox: !room_checkbox })
                }
              />
            </View>
            {/*Who can read history */}
            <View style={styles.heading_view}>
              <Text style={styles.normal_text}>Who can read history? </Text>
            </View>
            <View style={styles.inner_view}>
              <View style={{ width: "90%" }}>
                <Text style={styles.normal_text}>
                  Members only(since the point in time of selecting this option)
                </Text>
              </View>
              <CheckBox
                tintColors={({ true: "#F79535" }, { false: "#FFF" })}
                value={history_checkbox}
                onValueChange={() =>
                  this.setState({ history_checkbox: !history_checkbox })
                }
              />
            </View>
            <View style={styles.inner_view}>
              <View style={{ width: "90%" }}>
                <Text style={styles.normal_text}>
                  Members only(since they were invited)
                </Text>
              </View>
              <CheckBox
                tintColors={({ true: "#F79535" }, { false: "#FFF" })}
                value={history_checkbox}
                onValueChange={() =>
                  this.setState({ history_checkbox: !history_checkbox })
                }
              />
            </View>
            <View style={styles.inner_view}>
              <View style={{ width: "90%" }}>
                <Text style={styles.normal_text}>
                  Members only(since they joined)
                </Text>
              </View>
              <CheckBox
                tintColors={({ true: "#F79535" }, { false: "#FFF" })}
                value={history_checkbox}
                onValueChange={() =>
                  this.setState({ history_checkbox: !history_checkbox })
                }
              />
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
  Topic_view: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: "3%",
    paddingHorizontal: "2%",
    borderBottomWidth: 1,
    borderColor: "grey",
  },
  inner_view: {
    paddingHorizontal: "3%",
    paddingVertical: "2%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "grey",
    backgroundColor: "#121212",
    // width: "90%",
  },
  heading_view: {
    paddingHorizontal: "3%",
    height: 40,
    backgroundColor: "#31323B",
    justifyContent: "center",
  },
});
export default Settings;
