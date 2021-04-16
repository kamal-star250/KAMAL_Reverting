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
import Large_header from '../common/Large_header';

class Friends_suggestion extends Component {
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
            <Text style={styles.small_header_text}>People you may know</Text>
          </View>

          {/* friends list view */}
          <FlatList
            data={friend_list}
            renderItem={({item}) => (
              <View style={{paddingVertical: '2%'}}>
                <TouchableOpacity style={styles.firend_list_view}>
                  {/* left side view */}
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      source={item.user_image}
                      style={styles.friend_image}
                    />
                    <View style={{left: 10}}>
                      <Text style={styles.normal_text}>{item.username}</Text>
                      <Text
                        style={[
                          styles.normal_text,
                          {fontSize: 12, color: 'grey'},
                        ]}>
                        {item.company}
                      </Text>
                    </View>
                  </View>
                  {/* add friend touch button */}
                  <TouchableOpacity style={styles.add_friend_btn}>
                    <Image
                      source={require('../images/userplus.png')}
                      style={styles.add_use_icon}
                    />
                    <Text style={[styles.normal_text, {fontSize: 8, left: 5}]}>
                      Add to contact
                    </Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              </View>
            )}
          />
          {/* Skip button */}
          <View style={styles.skip_view}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Dashboard')}
              style={styles.skip_button}>
              <Text
                style={[styles.normal_text, {fontSize: 16, color: '#F79535'}]}>
                Skip
              </Text>
              <Image
                source={require('../images/nexticon.png')}
                style={styles.next_icon}
              />
            </TouchableOpacity>
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
});
export {Friends_suggestion};
