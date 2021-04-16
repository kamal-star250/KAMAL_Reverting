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

class Uploads extends Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }
  render() {
    return (
      <SafeAreaView>
        <View style={{ height: "100%", backgroundColor: "#191C1E" }}>
          <ScrollView></ScrollView>
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
});
export default Uploads;
