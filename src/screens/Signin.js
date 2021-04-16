import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {TextInput, HelperText} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button from '../common/Button';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      email_error: false,
      password_error: false,
      password_secure: true,
    };
  }

  //////////////////////// FUNCTOIN FOR CHECK THE EMPTY FIELD'S /////////////////
  submit = () => {
    const {email, password, password_error} = this.state;
    if (email == '') {
      this.setState({email_error: true});
    } else if (password == '') {
      this.setState({password_error: true});
    } else {
      this.props.navigation.navigate('Contact_Permission');
    }
  };
  render() {
    const {
      email,
      password,
      email_error,
      password_error,
      password_secure,
    } = this.state;
    return (
      <SafeAreaView>
        <View style={{height: '100%'}}>
          <ImageBackground
            style={styles.bg_image}
            source={require('../images/splashscreen.png')}>
            <KeyboardAwareScrollView
              style={{
                width: '100%',
                paddingHorizontal: '5%',
              }}>
              {/* logo view   */}
              <View style={styles.logo_view}>
                {/* logo image  */}
                <Image
                  style={{width: 100, height: 100, resizeMode: 'contain'}}
                  source={require('../images/logo.png')}
                />
                <View style={{paddingVertical: '5%'}}>
                  <Text style={[styles.normal_text, {fontSize: 16}]}>
                    Welcome Back!
                  </Text>
                </View>
              </View>
              {/* Company Email / Phone view */}
              <View style={styles.input_view}>
                <TextInput
                  mode="outlined"
                  label="Company Email / Phone"
                  placeholder="testuser@test.com"
                  onChangeText={({text}) => this.setState({email: text})}
                  theme={{
                    colors: {
                      placeholder: 'white',
                      text: 'white',
                      primary: '#F79535',
                      background: 'rgba(52, 52, 52, 0.8)',
                    },
                  }}
                />
                {email_error == true ? (
                  <HelperText type="error">Email Required</HelperText>
                ) : null}
              </View>
              {/* Password field with text secure and eye icon*/}
              <View style={styles.password_row}>
                <TextInput
                  style={{width: '100%'}}
                  mode="outlined"
                  label="Password"
                  placeholder="*********"
                  secureTextEntry={this.state.password_secure}
                  onChangeText={({text}) => this.setState({password: text})}
                  theme={{
                    colors: {
                      placeholder: 'white',
                      text: 'white',
                      primary: '#F79535',
                      background: 'rgba(52, 52, 52, 0.8)',
                    },
                  }}
                />
                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      password_secure: !this.state.password_secure,
                    })
                  }
                  style={styles.eye_icon_area}>
                  {password_secure == true ? (
                    <Image
                      source={require('../images/eyeicon.png')}
                      style={styles.eye_icon}
                    />
                  ) : (
                    <Image
                      source={require('../images/openeye.png')}
                      style={styles.eye_icon}
                    />
                  )}
                </TouchableOpacity>
              </View>
              {password_error == true ? (
                <HelperText type="error">Password Required!</HelperText>
              ) : null}
              {/* Sigin Button */}
              <View style={{paddingVertical: '5%'}}>
                <Button
                  btnheight={50}
                  btnwidth={'100%'}
                  bgcolor={'#F79535'}
                  onPress={() => this.submit()}>
                  SIGN IN
                </Button>
              </View>
              {/* OR view */}
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.normal_text}>OR</Text>
              </View>
              {/* Register with google  Button */}
              <View style={{paddingVertical: '5%'}}>
                <Button
                  btnheight={50}
                  btnwidth={'100%'}
                  btnborder={1}
                  bordercolor={'#fff'}
                  // onPress={() => alert("ok")}
                >
                  REGISTER WITH LINKEDIN
                </Button>
              </View>
              {/* OR view */}
              <View>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('ForgotPassword')
                  }>
                  <View style={{alignSelf: 'center'}}>
                    <Text style={[styles.normal_text, {color: '#F79535'}]}>
                      Forgot password ?
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              {/* Don't have an account  */}
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Signup')}
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  paddingVertical: '5%',
                }}>
                <Text style={styles.normal_text}>Don't have an account?</Text>
                <Text style={[styles.normal_text, {color: '#F79535', left: 5}]}>
                  Sign UP
                </Text>
              </TouchableOpacity>
              <View>
                <Text style={{color: '#fff'}}>Hellp kala</Text>
              </View>
            </KeyboardAwareScrollView>
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
  logo_view: {
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input_view: {
    width: '100%',
    paddingVertical: '5%',
  },
  normal_text: {
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
  },
  password_row: {
    width: '100%',
    paddingVertical: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  eye_icon_area: {
    width: 30,
    height: 40,
    justifyContent: 'center',
    right: 30,
    zIndex: 1,
  },
  eye_icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});
export {Signin};
