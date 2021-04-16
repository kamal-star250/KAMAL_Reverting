import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  PermissionsAndroid,
} from 'react-native';
import Button from '../common/Button';

class Contact_Permission extends Component {
  constructor(props) {
    super(props);
    // this.state = {  };
  }
  async requestContactsPermission() {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        title: 'Hey you need to give us contacts permissions!',
        message:
          'We need to read your contacts so we can sell them to advertisers.',
      },
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  }

  getContacts = () => {
    this.requestContactsPermission().then((res) => {
      if (res == true) {
        // console.log('ok');
        this.props.navigation.navigate('Location_permission');
      } else {
        // console.log('not ok');
        this.props.navigation.navigate('Location_permission');
      }
    });
  };
  render() {
    return (
      <SafeAreaView>
        <View style={{height: '100%'}}>
          <ImageBackground
            style={styles.bg_image}
            source={require('../images/splashscreen.png')}>
            {/* bacicon view */}
            <View style={styles.back_icon_view}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image
                  source={require('../images/backicon.png')}
                  style={{width: 20, height: 20, resizeMode: 'contain'}}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.map_main_view}>
              {/* map View */}
              <View style={styles.map_view}>
                <Image
                  source={require('../images/contact.png')}
                  style={styles.map_icon}
                />
                <Text style={styles.location_text}>
                  Allow Reverting syncronize{'\n'} with your contact list
                </Text>
              </View>
            </View>

            {/* allow button */}
            <View style={styles.allow_view}>
              <Button
                btnheight={50}
                btnwidth={'100%'}
                bgcolor={'#F79535'}
                onPress={() => this.getContacts()}>
                ALLOW
              </Button>
              <View style={{paddingVertical: 10}}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Location_permission')
                  }>
                  <Text style={styles.not_now_text}>Not Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  bg_image: {
    height: '100%',
    width: '100%',
  },
  back_icon_view: {
    paddingVertical: '2%',
    paddingHorizontal: '3%',
    height: '10%',
    justifyContent: 'center',
  },
  map_view: {
    height: '70%',
    backgroundColor: '#000',
    borderRadius: 15,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map_main_view: {
    height: '75%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map_icon: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  location_text: {
    top: 30,
    color: '#626262',
    paddingVertical: 10,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
  },
  allow_view: {
    height: '15%',
    alignItems: 'center',
    paddingHorizontal: '3%',
  },
  dot_view: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: 'grey',
  },
  not_now_text: {
    color: '#626262',
    fontFamily: 'Montserrat-Regular',
  },
});
export {Contact_Permission};
