import React, {Component} from 'react';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button from '../common/Button';

class Register_now extends Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }
  render() {
    return (
      <SafeAreaView>
        <View
          style={{
            height: '100%',
          }}>
          {/* background image area  start */}
          <ImageBackground
            style={styles.bg_image}
            source={require('../images/splashscreen.png')}>
            {/* logo view with 60%  */}
            <View
              style={{
                height: '55%',
                justifyContent: 'center',
              }}>
              {/* logo image  */}
              <Image
                style={{width: 150, height: 150, resizeMode: 'contain'}}
                source={require('../images/logo.png')}
              />
            </View>
            {/* <KeyboardAwareScrollView style={{ width: "100%" }}> */}
            <View style={{paddingVertical: '5%'}}>
              <Text style={[styles.normal_text, {fontSize: 16}]}>
                Let's Get Started
              </Text>
            </View>
            {/* Register now button */}
            <View style={{width: '100%', paddingVertical: '2%'}}>
              <Button
                btnwidth={'90%'}
                btnheight={50}
                bgcolor={'#F79535'}
                onPress={() => this.props.navigation.navigate('Signup')}>
                REGISTER NOW
              </Button>
            </View>
            <View style={{paddingVertical: '2%'}}>
              <Text style={styles.normal_text}>OR</Text>
            </View>
            {/* register with linkedin button */}
            <View style={{width: '100%', paddingVertical: '2%'}}>
              <Button
                btnwidth={'90%'}
                btnheight={50}
                btnborder={1}
                bordercolor="#fff"
                // onPress={() => alert("ok")}
              >
                REGISTER WITH LINKEDIN
              </Button>
            </View>
            {/* already have  account  view */}
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Signin')}
              style={styles.already_account}>
              <Text style={styles.normal_text}>Already have an account?</Text>
              <Text style={[styles.normal_text, {color: '#F79535', left: 5}]}>
                Sign In
              </Text>
            </TouchableOpacity>
            {/* </KeyboardAwareScrollView> */}
          </ImageBackground>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  bg_image: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  already_account: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: '5%',
  },
  normal_text: {
    alignSelf: 'center',
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
  },
});

export {Register_now};
