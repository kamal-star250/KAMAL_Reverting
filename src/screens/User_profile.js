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
class User_profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
                onPress={
                  () => this.props.navigation.navigate('User_edit_profile')
                  //   alert("ok")
                }>
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
                  source={require('../images/Alice.png')}
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
            <View style={{paddingVertical: '1%'}}>
              <TouchableOpacity style={styles.my_contact_view}>
                <Text style={styles.normal_text1}>Name</Text>
                <Image
                  source={require('../images/networknext.png')}
                  style={styles.right_icon}
                />
              </TouchableOpacity>
            </View>
            <View style={{paddingVertical: '1%'}}>
              <TouchableOpacity style={styles.my_contact_view}>
                <Text style={styles.normal_text1}>About</Text>
                <Image
                  source={require('../images/networknext.png')}
                  style={styles.right_icon}
                />
              </TouchableOpacity>
            </View>
            <View style={{paddingVertical: '1%'}}>
              <TouchableOpacity style={styles.my_contact_view}>
                <Text style={styles.normal_text1}>Background</Text>
                <Image
                  source={require('../images/networknext.png')}
                  style={styles.right_icon}
                />
              </TouchableOpacity>
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
    fontSize: 13,
  },
  normal_text1: {
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
  },
  my_contact_view: {
    paddingHorizontal: '3%',
    height: 55,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#121212',
  },
  right_icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
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
});
export {User_profile};
