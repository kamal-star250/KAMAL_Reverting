import React, { Component } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Your_post from "./Your_post";
import Media_links from "./Media_links";
import Public_Blackboard from "./Public_Blackboard";
import Private_files from "./Private_files";

const Tab = createMaterialTopTabNavigator();

function User_post_Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#fff",
        inactiveTintColor: "grey",
        labelStyle: {
          textTransform: "none",
          width: "100%",
          left: 0,
        },
        indicatorStyle: {
          borderBottomWidth: 3,
          borderColor: "#F79535",
        },
        style: { backgroundColor: "#121212" },
      }}
    >
      <Tab.Screen name={"Your\n Posts"} component={Your_post} />
      <Tab.Screen name={"Your media \n and links"} component={Media_links} />
      <Tab.Screen
        name={"Your public \nBlackboard"}
        component={Public_Blackboard}
      />
      <Tab.Screen name={" Private\n Files"} component={Private_files} />
    </Tab.Navigator>
  );
}

export default User_post_Tabs;
