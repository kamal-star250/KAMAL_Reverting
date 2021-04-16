import React, {Component} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import All from './All';
import Initiated from './Initiated';

const Tab = createMaterialTopTabNavigator();

function Dashboard_Tabs() {
  return (
    <Tab.Navigator
      lazy={false}
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: 'grey',
        labelStyle: {
          textTransform: 'none',
          width: '100%',
          right: 10,
        },
        indicatorStyle: {
          borderBottomWidth: 3,
          borderColor: '#F79535',
        },
        style: {backgroundColor: '#191C1E'},
      }}
      initialRouteName={'Initiated by me'}>
      <Tab.Screen name="Initiated by me" component={Initiated} />
      <Tab.Screen name="All" component={All} />
    </Tab.Navigator>
  );
}

export default Dashboard_Tabs;
