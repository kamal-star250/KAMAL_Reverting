import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';
import Footer from '../common/Footer';
class User_edit_profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView>
        <View style={{height: '100%', backgroundColor: '#191C1E'}}>
          <ScrollView>
            <View style={{height: '93%', backgroundColor: '#191C1E'}}>
              {/* small header */}
              <View style={styles.small_header_view}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}>
                  <Image
                    style={styles.edit_icon}
                    source={require('../images/backicon.png')}
                  />
                </TouchableOpacity>
                {/* <TouchableOpacity>
                  <Image
                    style={styles.edit_icon}
                    source={require("../images/edit.png")}
                  />
                </TouchableOpacity> */}
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
                  <Text style={[styles.normal_text, {fontSize: 18}]}>
                    User 1
                  </Text>
                  <Text style={[styles.normal_text, {color: '#BBBCBD'}]}>
                    Lorem ipsum dolor sit amet, consetetur.
                  </Text>
                </View>
              </View>

              <Collapse style={{paddingVertical: '1%'}}>
                <CollapseHeader>
                  <View style={styles.email_container}>
                    <Text style={styles.normal_text1}>Name</Text>
                    <Image
                      source={require('../images/networknext.png')}
                      style={styles.right_side_icon}
                    />
                  </View>
                </CollapseHeader>
                <CollapseBody>
                  <View style={{padding: 10}}>
                    <View style={{height: 100}}></View>
                  </View>
                </CollapseBody>
              </Collapse>
              <Collapse style={{paddingVertical: '1%'}}>
                <CollapseHeader>
                  <View style={styles.email_container}>
                    <Text style={styles.normal_text1}>About</Text>
                    <Image
                      source={require('../images/networknext.png')}
                      style={styles.right_side_icon}
                    />
                  </View>
                </CollapseHeader>
                <CollapseBody>
                  <View style={{backgroundColor: '#121212', marginTop: -4}}>
                    <View style={styles.summary_view}>
                      <Text style={styles.summary_text}>Summary</Text>
                      <Image
                        source={require('../images/add1.png')}
                        style={styles.right_icon}
                      />
                    </View>
                    <TextInput
                      style={{
                        height: 47,
                        paddingHorizontal: '4%',
                        borderColor: '#fff',
                        borderWidth: 1,
                        borderRadius: 10,
                        width: '95%',
                        alignSelf: 'center',
                      }}
                      placeholder="type here "
                      placeholderTextColor="grey"
                    />
                    <View style={styles.summary_view}>
                      <Text style={styles.summary_text}>Description</Text>
                    </View>
                    <TextInput
                      style={{
                        height: 47,
                        paddingHorizontal: '4%',
                        borderColor: '#fff',
                        borderWidth: 1,
                        borderRadius: 10,
                        width: '95%',
                        alignSelf: 'center',
                      }}
                      placeholder="type here "
                      placeholderTextColor="grey"
                    />
                    <TouchableOpacity>
                      <View style={styles.save_view}>
                        <Text style={styles.save_text}>Save</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </CollapseBody>
              </Collapse>

              <Collapse style={{paddingVertical: '1%'}}>
                <CollapseHeader>
                  <View style={styles.email_container}>
                    <Text style={styles.normal_text1}>Featured</Text>
                    <Image
                      source={require('../images/networknext.png')}
                      style={styles.right_side_icon}
                    />
                  </View>
                </CollapseHeader>
                <CollapseBody>
                  <View style={{padding: 10}}>
                    <View style={{height: 100}}></View>
                  </View>
                </CollapseBody>
              </Collapse>
              <Collapse style={{paddingVertical: '1%'}}>
                <CollapseHeader>
                  <View style={styles.email_container}>
                    <Text style={styles.normal_text1}>
                      Say something about your background
                    </Text>
                    <Image
                      source={require('../images/networknext.png')}
                      style={styles.right_side_icon}
                    />
                  </View>
                </CollapseHeader>
                <CollapseBody>
                  <View style={{padding: 10}}>
                    <View style={{height: 100}}></View>
                  </View>
                </CollapseBody>
              </Collapse>
            </View>
          </ScrollView>

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
  summary_text: {
    color: '#F79535',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
  summary_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '3%',
    paddingVertical: 10,
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
  email_container: {
    paddingVertical: '3%',
    backgroundColor: '#121212',
    alignItems: 'center',
    paddingHorizontal: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  save_view: {
    width: 60,
    height: 25,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#F79535',
    alignSelf: 'flex-end',
    marginBottom: 12,
    marginTop: '5%',
    marginRight: '3%',
  },
  save_text: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
  },
  right_side_icon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
});

export {User_edit_profile};
