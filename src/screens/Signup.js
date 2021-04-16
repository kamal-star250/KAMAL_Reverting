import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInput, HelperText} from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import Button from '../common/Button';
import Modal from 'react-native-modal';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company_name: '',
      full_name: '',
      company_mobile: '',
      email: '',
      password: '',
      checkbox: false,
      company_name_error: false,
      full_name_error: false,
      company_mobile_error: false,
      email_error: false,
      password_error: false,
      terms_condition_modal: false,
      password_secure: true,
    };
  }
  //////////////// FUNCTION FOR OPEN / CLOSE MODAL ///////////////////
  toggleModal = () => {
    this.setState({terms_condition_modal: !this.state.terms_condition_modal});
  };
  ///////////////// FUNCTOIN FOR CHECK THE EMPTY FIELD'S ////////////
  register = () => {
    const {
      company_name,
      full_name,
      company_mobile,
      email,
      password,
      job_title,
      job_title_error,
      company_name_error,
      full_name_error,
      company_mobile_error,
      email_error,
      password_error,
    } = this.state;
    if (company_name == '') {
      this.setState({company_name_error: true});
    } else if (job_title == '') {
      this.setState({job_title_error: true});
    } else if (full_name == '') {
      this.setState({full_name_error: true});
    } else if (company_mobile == '') {
      this.setState({company_mobile_error: true});
    } else if (email == '') {
      this.setState({email_error: true});
    } else if (password == '') {
      this.setState({password_error: true});
      // alert("blank");
    } else {
      // alert("Signin")
      this.props.navigation.navigate('Signin');
    }
  };
  render() {
    const {
      company_name,
      full_name,
      company_mobile,
      email,
      password,
      job_title,
      job_title_error,
      company_name_error,
      full_name_error,
      company_mobile_error,
      email_error,
      password_error,
      terms_condition_modal,
      password_secure,
    } = this.state;
    return (
      <SafeAreaView>
        <View style={{height: '100%'}}>
          <ImageBackground
            style={styles.bg_image}
            source={require('../images/splashscreen.png')}>
            {/* logo area   */}
            <View style={{paddingVertical: '10%'}}>
              <Text style={[styles.normal_text, {fontSize: 16}]}>Welcome</Text>
            </View>

            <KeyboardAwareScrollView
              style={{width: '100%', paddingHorizontal: '5%'}}>
              <View style={{alignItems: 'center'}}>
                {/* Company name view*/}
                <View style={styles.input_view}>
                  <TextInput
                    mode="outlined"
                    label="Company Name *"
                    placeholder="XYZ"
                    onChangeText={({text}) =>
                      this.setState({company_name: text})
                    }
                    theme={{
                      colors: {
                        placeholder: 'white',
                        text: 'white',
                        primary: '#F79535',
                        background: 'rgba(52, 52, 52, 0.8)',
                      },
                    }}
                  />
                  {/* Error message */}
                  {company_name_error == true ? (
                    <HelperText type="error">
                      Company name is required!
                    </HelperText>
                  ) : null}
                </View>
                <View style={styles.input_view}>
                  <TextInput
                    mode="outlined"
                    label="Job Title "
                    placeholder="XYZ"
                    onChangeText={({text}) => this.setState({job_title: text})}
                    theme={{
                      colors: {
                        placeholder: 'white',
                        text: 'white',
                        primary: '#F79535',
                        background: 'rgba(52, 52, 52, 0.8)',
                      },
                    }}
                  />
                  {/* Error message */}
                  {job_title_error == true ? (
                    <HelperText type="error">
                      Company name is required!
                    </HelperText>
                  ) : null}
                </View>
                {/* Company name view*/}
                <View style={styles.input_view}>
                  <TextInput
                    mode="outlined"
                    label="Full Name / Family Name *"
                    placeholder="John"
                    onChangeText={({text}) => this.setState({full_name: text})}
                    theme={{
                      colors: {
                        placeholder: 'white',
                        text: 'white',
                        primary: '#F79535',
                        background: 'rgba(52, 52, 52, 0.8)',
                      },
                    }}
                  />
                  {/* Error message */}
                  {full_name_error == true ? (
                    <HelperText type="error">Enter your full name</HelperText>
                  ) : null}
                </View>
                {/* company number view */}
                <View style={styles.input_view}>
                  <TextInput
                    mode="outlined"
                    label="Company Mobile *"
                    placeholder="John"
                    keyboardType={'numeric'}
                    maxLength={10}
                    onChangeText={({text}) =>
                      this.setState({company_mobile: text})
                    }
                    theme={{
                      colors: {
                        placeholder: 'white',
                        text: 'white',
                        primary: '#F79535',
                        background: 'rgba(52, 52, 52, 0.8)',
                      },
                    }}
                  />
                  {/* Error message */}
                  {company_mobile_error == true ? (
                    <HelperText type="error">
                      Enter company mobile number
                    </HelperText>
                  ) : null}
                </View>
                {/* Email id*/}
                <View style={styles.input_view}>
                  <TextInput
                    mode="outlined"
                    label="Email ID"
                    placeholder="John@gmail.com"
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
                  {/* Error message */}
                  {email_error == true ? (
                    <HelperText type="error">Enter your Email</HelperText>
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
                {/* Error message */}
                <View style={{width: '100%'}}>
                  {password_error == true ? (
                    <HelperText type="error">Enter password </HelperText>
                  ) : null}
                </View>

                {/* accept turm's and condition's view */}
                <View style={styles.term_condition_view}>
                  <CheckBox
                    style={{height: 20, width: 20}}
                    tintColors={true ? '#F79535' : 'green'}
                    // onCheckColor={"#F79535"}
                    // onTintColor={"#F79535"}
                    // boxType="square"
                    value={this.state.checkbox}
                    onValueChange={() =>
                      this.setState({checkbox: !this.state.checkbox})
                    }
                  />
                  <TouchableOpacity
                    onPress={() => this.toggleModal()}
                    style={{flexDirection: 'row', left: 10}}>
                    <Text style={styles.normal_text}>i accept </Text>
                    <Text style={[styles.normal_text, {color: '#F79535'}]}>
                      terms and conditions
                    </Text>
                  </TouchableOpacity>
                </View>
                {/* Register Button view */}
                <View style={{paddingVertical: '5%', width: '100%'}}>
                  <Button
                    btnheight={50}
                    btnwidth={'100%'}
                    bgcolor={'#F79535'}
                    onPress={() => this.register()}>
                    REGISTER
                  </Button>
                </View>
                {/* Already have an account view */}
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Signin')}
                  style={styles.already_account}>
                  <Text style={styles.normal_text}>
                    Already have an account?
                  </Text>
                  <Text
                    style={[styles.normal_text, {color: '#F79535', left: 5}]}>
                    Sign In
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAwareScrollView>
          </ImageBackground>
          {/* Term's and condition's modal */}
          <Modal
            style={{margin: 0, paddingHorizontal: '5%'}}
            isVisible={terms_condition_modal}
            onBackButtonPress={() =>
              this.setState({terms_condition_modal: false})
            }>
            {/* modal container */}
            <View style={styles.modal_container}>
              {/* header view */}
              <View style={styles.modal_header}>
                <Text style={[styles.normal_text, {color: '#F79535'}]}>
                  Terms and conditions
                </Text>
              </View>
              {/* containt view */}
              <View style={styles.modal_containt}>
                <ScrollView>
                  <Text style={styles.normal_text}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </Text>
                </ScrollView>
              </View>
              {/* Accept and cancel button */}
              <View style={styles.modal_btns}>
                <TouchableOpacity onPress={() => this.toggleModal()}>
                  <Text style={[styles.normal_text, {color: '#F79535'}]}>
                    Accept
                  </Text>
                </TouchableOpacity>
                {/* white line between button's */}
                <View style={styles.line}></View>
                <TouchableOpacity onPress={() => this.toggleModal()}>
                  <Text style={styles.normal_text}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
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
  term_condition_view: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    paddingVertical: '2%',
  },
  already_account: {
    flexDirection: 'row',
    paddingVertical: '2%',
  },
  modal_container: {
    height: 280,
    borderRadius: 20,
    paddingHorizontal: '10%',
    paddingVertical: '5%',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  modal_header: {
    borderBottomWidth: 1,
    borderColor: '#fff',
    paddingVertical: '5%',
  },
  modal_containt: {
    paddingVertical: '5%',
    height: 150,
    borderBottomWidth: 1,
    borderColor: '#fff',
  },
  modal_btns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '5%',
    paddingHorizontal: '5%',
  },
  line: {
    height: 30,
    borderWidth: 1,
    borderColor: '#fff',
    width: 1,
    opacity: 0.6,
  },
  eye_icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
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
});

export {Signup};
