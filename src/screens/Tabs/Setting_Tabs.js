import React, { Component } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Account from "./Account";
import Privacy from "./Privacy";
import Communications from "./Communications";

const Tab = createMaterialTopTabNavigator();

function Setting_Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#fff",
        inactiveTintColor: "grey",
        labelStyle: {
          textTransform: "none",
          width: "100%",
          right: 10,
        },
        indicatorStyle: {
          borderBottomWidth: 3,
          borderColor: "#F79535",
        },
        style: { backgroundColor: "#191C1E" },
      }}
      initialRouteName={"Account"}
    >
      <Tab.Screen name="Account" component={Account} />
      <Tab.Screen name="Privacy" component={Privacy} />
      <Tab.Screen name="Communications" component={Communications} />
    </Tab.Navigator>
  );
}

export default Setting_Tabs;
