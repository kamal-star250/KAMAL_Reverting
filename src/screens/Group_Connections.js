import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Large_header from '../common/Large_header';
import Footer from '../common/Footer';

class Group_Connections extends Component {
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
                Connections
              </Text>
            </View>
            <ScrollView style={{bottom: 10}}>
              {friend_list.map((item) => {
                return (
                  <View style={{paddingVertical: '1%'}}>
                    <TouchableOpacity style={styles.list_container}>
                      <Image
                        source={require('../images/user.png')}
                        style={{width: 50, height: 50, resizeMode: 'contain'}}
                      />
                      <View style={{left: 10}}>
                        <Text style={[styles.normal_text, {fontSize: 16}]}>
                          John
                        </Text>
                        <Text style={[styles.normal_text, {color: '#BBBCBD'}]}>
                          Alice
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </ScrollView>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Add_connections')}
              style={styles.add_icon_view}>
              <Image
                source={require('../images/add.png')}
                style={{height: 50, width: 50, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
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
  list_container: {
    paddingHorizontal: '3%',
    backgroundColor: '#121212',
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },
  add_icon_view: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 15,
    right: 10,
  },
});
export {Group_Connections};
