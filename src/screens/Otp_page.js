import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import OTPInputView from '@twotalltotems/react-native-otp-input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button from '../common/Button';

class Otp_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: '',
      time_count: true,
      timer: 59,
    };
  }
  componentDidMount() {
    this.setState({
      code: 1234,
    });
    this.interval = setInterval(
      () => this.setState((prevState) => ({timer: prevState.timer - 1})),
      1000,
    );
  }

  componentDidUpdate() {
    const {time_count} = this.state;
    if (this.state.timer === 0) {
      clearInterval(this.interval);
    }
  }
  render() {
    const {otp, timer, time_count} = this.state;
    // console.log(otp);
    return (
      <SafeAreaView>
        <View style={{height: '100%'}}>
          <ImageBackground
            style={styles.bg_image}
            source={require('../images/splashscreen.png')}>
            {/* Back icon header */}
            <View style={styles.back_icon_view}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image
                  source={require('../images/backicon.png')}
                  style={{width: 20, height: 20, resizeMode: 'contain'}}
                />
              </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={{flexGrow: 1}}>
              <View
                style={{
                  height: '20%',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../images/thanku.png')}
                  style={{width: 120, height: 120, resizeMode: 'contain'}}
                />
              </View>

              {/* email text view */}
              <View style={{paddingVertical: '2%'}}>
                <Text
                  style={[
                    styles.normal_text,
                    {textAlign: 'center', fontSize: 16},
                  ]}>
                  An one time password has been {'\n'}send to email id :
                </Text>
              </View>
              {/* email id view */}
              <View style={{paddingVertical: '2%'}}>
                <Text
                  style={[
                    styles.normal_text,
                    {textAlign: 'center', color: '#F79535'},
                  ]}>
                  John@gmail.com
                </Text>
              </View>
              {/* phone number view */}
              <View style={{paddingVertical: '2%'}}>
                <Text
                  style={[
                    styles.normal_text,
                    {textAlign: 'center', fontSize: 16},
                  ]}>
                  and phone number is :
                </Text>
              </View>
              {/* number view */}
              <View style={{paddingVertical: '2%'}}>
                <Text
                  style={[
                    styles.normal_text,
                    {textAlign: 'center', color: '#F79535'},
                  ]}>
                  XXXXXXXXX
                </Text>
              </View>
              {/* OTP view */}
              <View
                style={{
                  alignSelf: 'center',
                  width: '80%',
                  height: 100,
                }}>
                <OTPInputView
                  pinCount={4}
                  code={otp}
                  //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                  onCodeChanged={(code) => {
                    this.setState({otp: code});
                  }}
                  autoFocusOnLoad
                  codeInputFieldStyle={styles.otp_circle_view}
                />
              </View>
              {/* timer view */}
              {timer > 0 ? (
                <View style={{paddingVertical: '5%'}}>
                  <Text style={[styles.normal_text, {textAlign: 'center'}]}>
                    This OTP is valid for 00:{timer}
                  </Text>
                </View>
              ) : (
                <View style={{paddingVertical: '5%'}}>
                  <Text style={[styles.normal_text, {textAlign: 'center'}]}>
                    I didn't received a code
                  </Text>
                </View>
              )}
              {/* resend view */}
              <View style={{paddingVertical: '2%'}}>
                <TouchableOpacity>
                  <Text
                    style={[
                      styles.normal_text,
                      {textAlign: 'center', color: '#F79535'},
                    ]}>
                    Resend
                  </Text>
                </TouchableOpacity>
              </View>
              {/* continue button view */}
              <View style={{paddingVertical: '5%'}}>
                <Button
                  btnwidth={'90%'}
                  btnheight={50}
                  bgcolor={'#F79535'}
                  onPress={() => this.props.navigation.navigate('Signin')}>
                  CONTINUE
                </Button>
              </View>
            </ScrollView>
          </ImageBackground>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  back_icon_view: {
    paddingVertical: '2%',
    paddingHorizontal: '3%',
    height: '10%',
    width: '100%',
    justifyContent: 'center',
  },
  bg_image: {
    width: '100%',
    height: '100%',
  },
  normal_text: {
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
  },
  otp_circle_view: {
    color: '#000',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
});
export {Otp_page};
