import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Footer from '../common/Footer';
import Large_header from '../common/Large_header';
import Button from '../common/Button';
import {TextInput, HelperText} from 'react-native-paper';

class Add_template extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: '',
      heading_error: false,
      description: '',
      description_error: false,
    };
  }
  //////////////////// FUNCTION FOR SAVE THE TEMPLATE ///////////////////////
  Save = () => {
    const {heading, description, heading_error, description_error} = this.state;
    if (heading == '') {
      // alert("Enter the Heading");
      this.setState({heading_error: true});
    } else if (description == '') {
      // alert("Enter Description");
      this.setState({description_error: true});
    } else {
      // alert("Template saved ");
    }
  };
  render() {
    const {description_error, heading_error} = this.state;
    return (
      <SafeAreaView>
        <View style={{height: '100%'}}>
          <View
            style={{
              height: '93%',
              backgroundColor: '#191C1E',
            }}>
            {/* Header */}
            <Large_header
              profilepress={() => this.props.navigation.openDrawer()}
              qrpress={() => this.props.navigation.navigate('Scan_QRcode')}
            />
            <View style={styles.small_header_view}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image
                  source={require('../images/backicon.png')}
                  style={{height: 20, width: 20, resizeMode: 'contain'}}
                />
              </TouchableOpacity>
              <Text style={[styles.small_header_text, {left: 10}]}>
                Templates
              </Text>
            </View>
            <View style={{flex: 1, padding: 10}}>
              <ScrollView>
                <View style={styles.input_view}>
                  <TextInput
                    mode="outlined"
                    label="Template heading"
                    placeholder="loreum epsum"
                    onChangeText={({text}) => this.setState({heading: text})}
                    theme={{
                      colors: {
                        placeholder: 'white',
                        text: 'white',
                        primary: '#F79535',
                        background: 'rgba(52, 52, 52, 0.8)',
                      },
                    }}
                  />
                  {heading_error == true ? (
                    <HelperText type="error">Enter Template Heading</HelperText>
                  ) : null}
                </View>
                <View style={[styles.input_view]}>
                  <TextInput
                    style={{height: 100}}
                    mode="outlined"
                    label="Description"
                    placeholder="loreum epsum"
                    onChangeText={({text}) =>
                      this.setState({description: text})
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
                  {description_error == true ? (
                    <HelperText type="error">Enter Description</HelperText>
                  ) : null}
                  <View
                    style={{
                      width: '100%',
                      marginTop: 100,
                      alignSelf: 'center',
                    }}>
                    <Button
                      btnheight={50}
                      btnwidth={'100%'}
                      bgcolor={'#F79535'}
                      onPress={() => this.Save()}>
                      Save
                    </Button>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
          {/* Footer area reserved */}
          <View style={{height: '7%'}}>
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
  small_header_view: {
    height: 50,
    backgroundColor: '#31323B',
    paddingHorizontal: '3%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  small_header_text: {
    color: '#F79535',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
  topic_name: {
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
  },
  normal_text: {
    color: '#F79535',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Montserrat-ExtraBold',
  },
  input_view: {
    width: '100%',
    paddingVertical: '5%',
  },
});
export {Add_template};
