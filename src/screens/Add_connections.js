import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Footer from '../common/Footer';
import Large_header from '../common/Large_header';

class Add_connections extends Component {
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
      ],
    };
  }
  render() {
    const {friend_list} = this.state;
    return (
      <SafeAreaView>
        <View style={{height: '100%', backgroundColor: '#191C1E'}}>
          <View style={{height: '92%'}}>
            <Large_header
              profilepress={() => this.props.navigation.openDrawer()}
              qrpress={() => this.props.navigation.navigate('Scan_QRcode')}
            />

            {/* small header */}
            <View style={styles.small_header_view}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image
                  source={require('../images/backicon.png')}
                  style={{height: 20, width: 20, resizeMode: 'contain'}}
                />
              </TouchableOpacity>
              <Text style={[styles.small_header_text, {left: 10}]}>
                Add to connections
              </Text>
            </View>
            <ScrollView style={{bottom: 10}}>
              {friend_list.map((item) => {
                return (
                  <View style={{paddingVertical: '2%'}}>
                    <TouchableOpacity style={styles.firend_list_view}>
                      {/* left side view */}
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                          source={item.user_image}
                          style={styles.friend_image}
                        />
                        <View style={{left: 10}}>
                          <Text style={[styles.normal_text, {fontSize: 16}]}>
                            {item.username}
                          </Text>
                          <Text
                            style={[styles.normal_text, {color: '#BBBCBD'}]}>
                            {item.company}
                          </Text>
                        </View>
                      </View>
                      {/* add friend touch button */}
                      <TouchableOpacity style={styles.add_friend_btn}>
                        <Image
                          source={require('../images/addnew.png')}
                          style={styles.add_use_icon}
                        />
                        <Text
                          style={[styles.normal_text, {fontSize: 8, left: 5}]}>
                          Add to connections
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
    width: 120,
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
});
export {Add_connections};
