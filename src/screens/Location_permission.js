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

class Location_permission extends Component {
  constructor(props) {
    super(props);
    // this.state = {  };
  }
  async requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // alert("You can use the location");
        this.props.navigation.navigate('Friends_suggestion');
      } else {
        // alert("Location permission denied");
      }
    } catch (err) {
      // console.warn(err);
    }
    // alert("hi");
    this.props.navigation.navigate('Friends_suggestion');
  }
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
                  source={require('../images/map.png')}
                  style={styles.map_icon}
                />
                <Text style={styles.location_text}>
                  Allow Reverting access{'\n'} your location
                </Text>
              </View>
            </View>

            {/* allow button */}
            <View style={styles.allow_view}>
              <Button
                btnheight={50}
                btnwidth={'100%'}
                bgcolor={'#F79535'}
                onPress={() => this.requestLocationPermission()}>
                ALLOW
              </Button>
              <View style={{paddingVertical: 10}}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Friends_suggestion')
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
    width: 150,
    height: 150,
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
export {Location_permission};
