import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Footer from '../common/Footer';
import User_post_Tabs from './Tabs/User_post_Tabs';
class User_all_post extends Component {
  constructor(props) {
    super(props);
    // this.state = {  };
  }
  render() {
    return (
      <SafeAreaView>
        <View style={{height: '100%', backgroundColor: '#191C1E'}}>
          <View style={{height: '92%'}}>
            {/* small header */}
            <View style={styles.small_header_view}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image
                  style={styles.edit_icon}
                  source={require('../images/backicon.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('User_profile')}>
                <Image
                  style={styles.edit_icon}
                  source={require('../images/edit.png')}
                />
              </TouchableOpacity>
            </View>
            {/* about user view */}
            <View style={styles.about_user_view}>
              {/* left side user image */}
              <ImageBackground
                source={require('../images/profileback.png')}
                style={styles.image_circle}>
                <Image
                  source={require('../images/group.png')}
                  style={styles.user_profile}
                />
              </ImageBackground>
              {/* right side user details */}
              <View style={{width: '40%', justifyContent: 'center'}}>
                <Text style={[styles.normal_text, {fontSize: 18}]}>User 1</Text>
                <Text style={[styles.normal_text, {color: '#BBBCBD'}]}>
                  Lorem ipsum dolor sit amet, consetetur.
                </Text>
              </View>
            </View>
            {/* main location or calender view */}
            <View style={styles.location_main_view}>
              {/* left side location view */}
              <View style={styles.location_view}>
                <Image
                  source={require('../images/location.png')}
                  style={styles.edit_icon}
                />
                <Text style={styles.location_text}>Berlin</Text>
              </View>
              {/* right side calendar view */}
              <View style={[styles.location_view, {width: '40%'}]}>
                <Image
                  source={require('../images/calendar.png')}
                  style={styles.edit_icon}
                />
                <Text style={styles.location_text}>joined on 18 Nov 2020</Text>
              </View>
            </View>
            <View style={{flexGrow: 1, paddingVertical: 10}}>
              {/* Tabs imported by Tabs folder and file name is User_post_Tabs */}
              <User_post_Tabs />
            </View>
          </View>
          <View style={{height: '8%'}}>
            <Footer
              homepress={() => this.props.navigation.navigate('Dashboard')}
              notificationpress={() =>
                this.props.navigation.navigate('Notification')
              }
              ceate_postpess={() =>
                this.props.navigation.navigate('Create_post')
              }
              my_networkpress={() =>
                this.props.navigation.navigate('My_network')
              }
              hashpress={() => this.props.navigation.navigate('Hashtag')}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  normal_text: {
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
  },
  small_header_view: {
    height: 50,
    // backgroundColor: "#31323B",
    paddingHorizontal: '3%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  small_header_text: {
    color: '#F79535',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
  edit_icon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    // left: 15,
  },
  about_user_view: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
  },
  image_circle: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  user_profile: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  location_main_view: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  location_view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location_text: {
    fontFamily: 'Montserrat-Regular',
    color: '#BBBCBD',
    left: 5,
    fontSize: 12,
  },
});
export {User_all_post};
