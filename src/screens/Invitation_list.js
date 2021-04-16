import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Footer from '../common/Footer';
import Large_header from '../common/Large_header';

class Invitation_list extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  render() {
    const {friend_list} = this.state;
    return (
      <SafeAreaView>
        <View style={{height: '100%', backgroundColor: '#121212'}}>
          <View style={{height: '92%', paddingBottom: 10}}>
            {/* Header Area */}
            <Large_header
              profilepress={() => this.props.navigation.openDrawer()}
              qrpress={() => this.props.navigation.navigate('Scan_QRcode')}
            />
            {/* People you may know */}
            <View style={styles.small_header_view}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image
                  source={require('../images/backicon.png')}
                  style={{height: 20, width: 20, resizeMode: 'contain'}}
                />
              </TouchableOpacity>
              <Text style={styles.small_header_text}>Invitation list</Text>
            </View>

            {/* friends list view */}
            <FlatList
              data={friend_list}
              renderItem={({item}) => (
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
              )}
            />
          </View>
          {/* Footer area reserved */}
          <View style={{height: '8%'}}>
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
    left: 10,
    fontFamily: 'Montserrat-Regular',
  },
  normal_text: {
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
  },
  firend_list_view: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '2%',
    backgroundColor: '#191C1E',
  },
  add_friend_btn: {
    borderRadius: 15,
    flexDirection: 'row',
    width: 100,
    height: 30,
    borderWidth: 1,
    borderColor: '#FFF',
    paddingHorizontal: '2%',
    alignItems: 'center',
  },
  friend_image: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  add_use_icon: {
    height: 15,
    width: 15,
    left: 2,
    resizeMode: 'contain',
  },
  skip_view: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    right: 15,
    alignItems: 'flex-end',
  },
  skip_button: {
    height: 30,
    width: 100,
    borderRadius: 15,
    flexDirection: 'row',
    backgroundColor: '#31313C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  next_icon: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
    left: 10,
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
  large_icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});
export {Invitation_list};
