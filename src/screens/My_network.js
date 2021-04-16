import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Large_header from '../common/Large_header';
import Footer from '../common/Footer';

class My_network extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView>
        <View style={{height: '100%', backgroundColor: '#191C1E'}}>
          {/*  */}
          <View style={{height: '92%'}}>
            {/* Header */}
            <Large_header
              profilepress={() => this.props.navigation.openDrawer()}
              qrpress={() => this.props.navigation.navigate('Scan_QRcode')}
            />
            <ScrollView>
              {/* small header */}
              <View style={styles.small_header_view}>
                <Text style={styles.small_header_text}>My Network</Text>
              </View>
              {/* My contact */}
              <View style={{paddingVertical: '1%'}}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('My_contact_list')
                  }
                  style={styles.my_contact_view}>
                  <Text style={styles.normal_text}>My contact</Text>
                  <Image
                    source={require('../images/networknext.png')}
                    style={styles.right_icon}
                  />
                </TouchableOpacity>
              </View>
              {/* My contact */}
              <View style={{paddingVertical: '1%'}}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Invite_people')
                  }
                  style={styles.my_contact_view}>
                  <Text style={styles.normal_text}>Invite people</Text>
                  <Image
                    source={require('../images/networknext.png')}
                    style={styles.right_icon}
                  />
                </TouchableOpacity>
              </View>
              {/* Invitations view */}
              <View style={{paddingVertical: '1%'}}>
                <View
                  style={[
                    styles.my_contact_view,
                    {backgroundColor: '#191C1E'},
                  ]}>
                  <Text style={styles.normal_text}>Invitations</Text>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('Invitation_list')
                    }>
                    <Text style={[styles.normal_text, {color: '#F79535'}]}>
                      See all 25
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/* See all list  */}
              <View style={styles.user_list_view}>
                {/* left side view  */}
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={require('../images/group.png')}
                    style={{width: 50, height: 50, resizeMode: 'contain'}}
                  />
                  <View style={{left: 10}}>
                    <Text style={[styles.normal_text, {color: '#F79535'}]}>
                      Dennies methouse
                    </Text>
                    <Text
                      style={[
                        styles.normal_text,
                        {color: 'grey', fontSize: 12},
                      ]}>
                      Company name
                    </Text>
                  </View>
                </View>
                {/* right side view */}
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity>
                    <Image
                      source={require('../images/addok.png')}
                      style={[styles.large_icon, {right: 10}]}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require('../images/addclose.png')}
                      style={styles.large_icon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              {/* See all list  */}
              <View style={styles.user_list_view}>
                {/* left side view  */}
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={require('../images/group.png')}
                    style={{width: 50, height: 50, resizeMode: 'contain'}}
                  />
                  <View style={{left: 10}}>
                    <Text style={[styles.normal_text, {color: '#F79535'}]}>
                      Dennies methouse
                    </Text>
                    <Text
                      style={[
                        styles.normal_text,
                        {color: 'grey', fontSize: 12},
                      ]}>
                      Company name
                    </Text>
                  </View>
                </View>
                {/* right side view */}
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity>
                    <Image
                      source={require('../images/addok.png')}
                      style={[styles.large_icon, {right: 10}]}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require('../images/addclose.png')}
                      style={styles.large_icon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              {/* People You May Know view */}
              <View style={{paddingVertical: '2%'}}>
                <View
                  style={[
                    styles.my_contact_view,
                    {backgroundColor: '#191C1E'},
                  ]}>
                  <Text style={styles.normal_text}>People You May Know </Text>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('People_you_know')
                    }>
                    <Text style={[styles.normal_text, {color: '#F79535'}]}>
                      See all
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/* People list */}
              <View style={{paddingVertical: '2%'}}>
                <View style={styles.people_list_container}>
                  <View style={styles.user_main_view}>
                    {/* close icon */}
                    <TouchableOpacity
                      style={{alignSelf: 'flex-end', padding: 5}}>
                      <Image
                        source={require('../images/profileclose.png')}
                        style={styles.right_icon}
                      />
                    </TouchableOpacity>
                    <Image
                      source={require('../images/aliceprofile.png')}
                      style={styles.people_image}
                    />
                    <View style={{paddingVertical: '5%'}}>
                      <Text style={[styles.normal_text, {textAlign: 'center'}]}>
                        Dennies methouse
                      </Text>
                      <Text
                        style={[
                          styles.normal_text,
                          {
                            fontSize: 12,
                            color: 'grey',
                            textAlign: 'center',
                          },
                        ]}>
                        Company name
                      </Text>
                    </View>
                    {/* add friend touch button */}
                    <View style={{paddingVertical: '5%'}}>
                      <TouchableOpacity style={styles.add_friend_btn}>
                        <Image
                          source={require('../images/userplus.png')}
                          style={{
                            width: 15,
                            height: 15,
                            resizeMode: 'contain',
                          }}
                        />
                        <Text
                          style={[styles.normal_text, {fontSize: 8, left: 5}]}>
                          Add to contact
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  {/* right side people */}
                  <View style={styles.user_main_view}>
                    {/* close icon */}
                    <TouchableOpacity
                      style={{alignSelf: 'flex-end', padding: 5}}>
                      <Image
                        source={require('../images/profileclose.png')}
                        style={styles.right_icon}
                      />
                    </TouchableOpacity>
                    <Image
                      source={require('../images/aliceprofile.png')}
                      style={styles.people_image}
                    />
                    <View style={{paddingVertical: '5%'}}>
                      <Text style={[styles.normal_text, {textAlign: 'center'}]}>
                        Dennies methouse
                      </Text>
                      <Text
                        style={[
                          styles.normal_text,
                          {
                            fontSize: 12,
                            color: 'grey',
                            textAlign: 'center',
                          },
                        ]}>
                        Company name
                      </Text>
                    </View>
                    {/* add friend touch button */}
                    <View style={{paddingVertical: '5%'}}>
                      <TouchableOpacity style={styles.add_friend_btn}>
                        <Image
                          source={require('../images/userplus.png')}
                          style={{
                            width: 15,
                            height: 15,
                            resizeMode: 'contain',
                          }}
                        />
                        <Text
                          style={[styles.normal_text, {fontSize: 8, left: 5}]}>
                          Add to contact
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  {/*  */}
                </View>
              </View>
            </ScrollView>
          </View>
          {/* Footer area reserved */}
          <View style={{height: '8%'}}>
            <Footer
              footerselection="mynetwork"
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
  normal_text: {
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
  },
  my_contact_view: {
    paddingHorizontal: '3%',
    height: 40,
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
  large_icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  user_list_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '3%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'grey',
    alignItems: 'center',
    paddingVertical: '2%',
  },
  add_friend_btn: {
    borderRadius: 10,
    flexDirection: 'row',
    width: 100,
    height: 20,
    borderWidth: 1,
    borderColor: '#FFF',
    paddingHorizontal: '2%',
    alignItems: 'center',
  },
  people_list_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '3%',
    paddingVertical: '1%',
  },
  people_image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  user_main_view: {
    width: '48%',
    backgroundColor: '#31323B',
    alignItems: 'center',
    borderRadius: 10,
  },
});
export {My_network};
