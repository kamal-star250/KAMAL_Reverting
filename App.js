import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// import all screens from screens folder
import {
  Register_now,
  SplashScreen,
  Signup,
  Signin,
  ForgotPassword,
  Otp_page,
  Friends_suggestion,
  DrawerPage,
  Dashboard,
  Notification,
  Create_post,
  Hashtag,
  My_network,
  Topic_chat,
  Forward_message,
  Help_center,
  Scan_QRcode,
  Group_manager,
  Group_Connections,
  Add_connections,
  Teammate_list,
  Add_teammate,
  Group_list,
  Add_group,
  Blacklisted_user,
  My_contact_list,
  Invite_people,
  Setting_screen,
  Topic_profile,
  Topic_screens,
  Location_permission,
  Template_page,
  Add_template,
  User_all_post,
  New_group_list,
  User_profile,
  User_edit_profile,
  People_you_know,
  Contact_Permission,
  Invitation_list,
} from './src/screens';

const Stack = createStackNavigator();

function AllScreenStack({navigation}) {
  return (
    <Stack.Navigator headerMode={false} initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Register_now" component={Register_now} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Otp_page" component={Otp_page} />
      <Stack.Screen name="Friends_suggestion" component={Friends_suggestion} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Create_post" component={Create_post} />
      <Stack.Screen name="My_network" component={My_network} />
      <Stack.Screen name="Hashtag" component={Hashtag} />
      <Stack.Screen name="Topic_chat" component={Topic_chat} />
      <Stack.Screen name="Forward_message" component={Forward_message} />
      <Stack.Screen name="Help_center" component={Help_center} />
      <Stack.Screen name="Scan_QRcode" component={Scan_QRcode} />
      <Stack.Screen name="Group_manager" component={Group_manager} />
      <Stack.Screen name="Group_Connections" component={Group_Connections} />
      <Stack.Screen name="Add_connections" component={Add_connections} />
      <Stack.Screen name="Teammate_list" component={Teammate_list} />
      <Stack.Screen name="Add_teammate" component={Add_teammate} />
      <Stack.Screen name="Group_list" component={Group_list} />
      <Stack.Screen name="Add_group" component={Add_group} />
      <Stack.Screen name="Blacklisted_user" component={Blacklisted_user} />
      <Stack.Screen name="My_contact_list" component={My_contact_list} />
      <Stack.Screen name="Invite_people" component={Invite_people} />
      <Stack.Screen name="Setting_screen" component={Setting_screen} />
      <Stack.Screen name="Topic_profile" component={Topic_profile} />
      <Stack.Screen name="Topic_screens" component={Topic_screens} />
      <Stack.Screen name="Template_page" component={Template_page} />
      <Stack.Screen
        name="Location_permission"
        component={Location_permission}
      />
      <Stack.Screen name="Add_template" component={Add_template} />
      <Stack.Screen name="User_all_post" component={User_all_post} />
      <Stack.Screen name="New_group_list" component={New_group_list} />
      <Stack.Screen name="User_profile" component={User_profile} />
      <Stack.Screen name="User_edit_profile" component={User_edit_profile} />
      <Stack.Screen name="People_you_know" component={People_you_know} />
      <Stack.Screen name="Contact_Permission" component={Contact_Permission} />
      <Stack.Screen name="Invitation_list" component={Invitation_list} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerPage {...props} />}>
        <Drawer.Screen
          name="AllScreenStack"
          options={{drawerLabel: 'Home Screen Option'}}
          component={AllScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
