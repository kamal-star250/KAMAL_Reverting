import React, { Component } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Members from "./Members";
import Uploads from "./Uploads";
import Settings from "./Settings";

const Tab = createMaterialTopTabNavigator();

function Topic_tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#fff",
        inactiveTintColor: "grey",
        labelStyle: {
          textTransform: "none",
          width: "100%",
        },
        indicatorStyle: {
          borderBottomWidth: 3,
          borderColor: "#F79535",
        },
        style: { backgroundColor: "#191C1E" },
      }}
      initialRouteName={"Account"}
    >
      <Tab.Screen name="Members" component={Members} />
      <Tab.Screen name="Uploads" component={Uploads} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default Topic_tabs;
