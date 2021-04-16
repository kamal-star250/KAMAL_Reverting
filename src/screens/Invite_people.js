import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Footer from '../common/Footer';
import Large_header from '../common/Large_header';
import Modal from 'react-native-modal';

class Invite_people extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Invite_modal: false,
      friend_list: [
        {
          username: 'John',
          company: 'Company Name',
          user_image: require('../images/user.png'),
        },
        {
          username: 'Alice',
          company: 'Company Name',
          user_image: require('../images/user.png'),
        },
        {
          username: 'John',
          company: 'Company Name',
          user_image: require('../images/user.png'),
        },
        {
          username: 'Alice',
          company: 'Company Name',
          user_image: require('../images/user.png'),
        },
        {
          username: 'John',
          company: 'Company Name',
          user_image: require('../images/user.png'),
        },
        {
          username: 'Alice',
          company: 'Company Name',
          user_image: require('../images/user.png'),
        },
        {
          username: 'John',
          company: 'Company Name',
          user_image: require('../images/user.png'),
        },
        {
          username: 'Alice',
          company: 'Company Name',
          user_image: require('../images/user.png'),
        },
      ],
    };
  }
  send_invitaion = () => {
    this.setState({Invite_modal: !this.state.Invite_modal});
  };
  render() {
    const {friend_list, Invite_modal} = this.state;
    return (
      <View style={{height: '100%', backgroundColor: '#191C1E'}}>
        <View style={{height: '92%'}}>
          <Large_header
            profilepress={() => this.props.navigation.openDrawer()}
            qrpress={() => this.props.navigation.navigate('Scan_QRcode')}
          />
          <View style={styles.small_header_view}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image
                  source={require('../images/backicon.png')}
                  style={{height: 20, width: 20, resizeMode: 'contain'}}
                />
              </TouchableOpacity>
              <Text style={[styles.small_header_text, {left: 10}]}>
                Invite People
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity>
                <Image
                  source={require('../images/share.png')}
                  style={{height: 20, width: 20, resizeMode: 'contain'}}
                />
              </TouchableOpacity>
              <Text style={[styles.small_header_text, {left: 5}]}>
                Share Link
              </Text>
            </View>
          </View>

          <ScrollView style={{bottom: 10}}>
            {friend_list.map((item) => {
              return (
                <View style={{paddingVertical: '2%'}}>
                  <TouchableOpacity style={styles.firend_list_view}>
                    {/* left side view */}
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Image
                        source={item.user_image}
                        style={styles.friend_image}
                      />
                      <View style={{left: 10}}>
                        <Text style={[styles.normal_text, {fontSize: 16}]}>
                          {item.username}
                        </Text>
                        <Text style={[styles.normal_text, {color: '#BBBCBD'}]}>
                          {item.company}
                        </Text>
                      </View>
                    </View>
                    {/* add friend touch button */}
                    <TouchableOpacity
                      onPress={() => this.send_invitaion()}
                      style={styles.add_friend_btn}>
                      <Image
                        source={require('../images/invite.png')}
                        style={styles.add_use_icon}
                      />
                      <Text
                        style={[styles.normal_text, {fontSize: 10, left: 5}]}>
                        Invite
                      </Text>
                    </TouchableOpacity>
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View style={{height: '8%'}}>
          <Footer
            //   footerselection="mynetwork"
            homepress={() => this.props.navigation.navigate('Dashboard')}
            notificationpress={() =>
              this.props.navigation.navigate('Notification')
            }
            ceate_postpess={() => this.props.navigation.navigate('Create_post')}
            my_networkpress={() => this.props.navigation.navigate('My_network')}
            hashpress={() => this.props.navigation.navigate('Hashtag')}
          />
        </View>
        {/* share and forword modal */}
        <Modal
          style={{margin: 0}}
          isVisible={Invite_modal}
          onBackButtonPress={() => this.setState({Invite_modal: false})}>
          <SafeAreaView style={{height: '100%'}}>
            <TouchableOpacity
              onPress={() => this.setState({Invite_modal: false})}
              style={{height: '100%', backgroundColor: 'transparent'}}>
              {/* modal bottom view  */}
              <View style={styles.modal_bottom_view}>
                {/* send invite view */}
                <View style={styles.send_invite_view}>
                  <Text
                    style={[
                      styles.normal_text,
                      {fontSize: 18, color: '#F79535'},
                    ]}>
                    Send invitation link to invite
                  </Text>
                  <Text style={styles.user_text}>User 1</Text>
                </View>
                {/*  */}
                <View style={styles.whatsapp_container}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <TouchableOpacity>
                      <Image
                        source={require('../images/whatsapp.png')}
                        style={styles.whatsapp_icon}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image
                        source={require('../images/email.png')}
                        style={styles.whatsapp_icon}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image
                        source={require('../images/linkedin.png')}
                        style={styles.whatsapp_icon}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image
                        source={require('../images/message1.png')}
                        style={styles.whatsapp_icon}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image
                        source={require('../images/copy.png')}
                        style={styles.whatsapp_icon}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </SafeAreaView>
        </Modal>
      </View>
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
    justifyContent: 'space-between',
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
  user_text: {
    fontSize: 18,
    color: '#F79535',
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
  },
  firend_list_view: {
    height: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '2%',
    backgroundColor: '#121212',
  },
  add_friend_btn: {
    borderRadius: 15,
    flexDirection: 'row',
    width: 80,
    height: 30,
    borderWidth: 1,
    borderColor: '#FFF',
    paddingHorizontal: '2%',
    alignItems: 'center',
  },
  friend_image: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
  },
  add_use_icon: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
  // modal styles start

  modal_bottom_view: {
    width: '100%',
    height: '40%',
    backgroundColor: '#191C1E',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  send_invite_view: {
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#F79535',
  },
  whatsapp_container: {
    width: '80%',
    alignSelf: 'center',
    height: '50%',
    justifyContent: 'center',
  },
  whatsapp_icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});
export {Invite_people};
