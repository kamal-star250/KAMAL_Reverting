import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {TextInput, HelperText} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button from '../common/Button';
import Modal from 'react-native-modal';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      email_error: false,
      Modal_email_error: false,
    };
  }
  ////////////////// FUNCTOIN FOR CHECK THE EMPTY FIELD'S ///////
  send_otp = () => {
    const {email} = this.state;
    if (email == '') {
      this.setState({email_error: true});
    } else {
      this.props.navigation.navigate('Otp_page');
    }
  };
  /////////////////////// FUNCTION FOR OPEN OR CLOSE MODAL ////////////////////////
  Email_error_modal = () => {
    this.setState({Modal_email_error: !this.state.Modal_email_error});
  };
  render() {
    const {email, Modal_email_error, email_error} = this.state;
    return (
      <SafeAreaView>
        <View style={{height: '100%'}}>
          <ImageBackground
            style={styles.bg_image}
            source={require('../images/splashscreen.png')}>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
              {/* logo area   */}
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
                {/* containt view */}
                <View
                  style={{
                    paddingVertical: '5%',
                    alignSelf: 'center',
                    width: '85%',
                  }}>
                  <Text
                    style={[
                      styles.normal_text,
                      {fontSize: 16, textAlign: 'center'},
                    ]}>
                    Enter the Email address or Phone no. you used to create your
                    account and we will email you a link to reset your password
                  </Text>
                </View>
              </View>

              <View
                style={{
                  width: '100%',
                  paddingHorizontal: '5%',
                }}>
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
                </View>
                {email_error == true ? (
                  <HelperText type="error">Email Required!</HelperText>
                ) : null}
                {/* Sigin Button */}
                <View style={{paddingVertical: '10%'}}>
                  <Button
                    btnheight={50}
                    btnwidth={'100%'}
                    bgcolor={'#F79535'}
                    onPress={() => this.send_otp()}>
                    SEND OTP
                  </Button>
                </View>
              </View>
            </ScrollView>
          </ImageBackground>
          <Modal
            style={{margin: 0}}
            isVisible={Modal_email_error}
            onBackButtonPress={() => this.setState({Modal_email_error: false})}>
            <SafeAreaView style={{height: '100%'}}>
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    Modal_email_error: false,
                  })
                }
                style={{height: '100%', backgroundColor: 'transparent'}}>
                {/* modal bottom view  */}
                <View style={styles.modal_bottom_view}>
                  <Text style={styles.modal_text}>
                    This doesn't look like your {'\n'}work email
                  </Text>
                  <View style={{paddingHorizontal: 10}}>
                    <Text style={[styles.modal_text, {color: 'grey'}]}>
                      Please enter your work email to experienced the best of
                      reverting. xyz@xyz.com looks like a personal email
                      address.
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.work_email}>
                    <Text style={styles.modal_text}>Enter work email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.Email_error_modal()}
                    style={{paddingVertical: 10}}>
                    <Text style={styles.modal_text}>ignore</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </SafeAreaView>
          </Modal>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  bg_image: {
    width: '100%',
    height: '100%',
  },
  logo_view: {
    height: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingVertical: 20,
    paddingTop: 20,
  },
  normal_text: {
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
  },
  input_view: {
    paddingVertical: '10%',
  },
  // modal styles start
  modal_bottom_view: {
    width: '100%',
    height: '50%',
    backgroundColor: '#191C1E',
    position: 'absolute',
    bottom: 0,
    paddingVertical: '5%',
    // paddingHorizontal: "10%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },

  modal_text: {
    color: '#F79535',
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 10,
    fontFamily: 'Montserrat-Regular',
  },
  work_email: {
    width: '100%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#F79535',
    paddingVertical: 5,
  },
});
export {ForgotPassword};
