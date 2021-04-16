import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Large_header from '../common/Large_header';
import Footer from '../common/Footer';

class Group_manager extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView>
        <View style={{height: '100%', backgroundColor: '#191C1E'}}>
          <View style={{height: '92%'}}>
            <Large_header
              profilepress={() => this.props.navigation.openDrawer()}
              qrpress={() => this.props.navigation.navigate('Scan_QRcode')}
            />
            <View style={{paddingVertical: '2%'}}>
              {/* small header */}
              <View style={styles.small_header_view}>
                <Text style={styles.small_header_text}>Group Manager</Text>
              </View>
            </View>
            {/* connection view */}
            <View style={{paddingVertical: '2%'}}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Group_Connections')
                }
                style={styles.connection_container}>
                <Text style={styles.normal_text}>Connection</Text>
                {/* right side view */}
                <View style={styles.right_side}>
                  <View style={styles.counter_view}>
                    <Text style={[styles.normal_text, {fontSize: 20}]}>+5</Text>
                  </View>
                  <View style={[styles.circle_views, {zIndex: 1, left: 25}]}>
                    <Image
                      source={require('../images/user.png')}
                      style={{width: 50, height: 50, resizeMode: 'contain'}}
                    />
                  </View>
                  <View style={styles.circle_views}>
                    <Image
                      source={require('../images/Alice.png')}
                      style={{width: 50, height: 50, resizeMode: 'contain'}}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            {/* Teammates view */}
            <View style={{paddingVertical: '2%'}}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Teammate_list')}
                style={styles.connection_container}>
                <Text style={styles.normal_text}>Teammates</Text>
                {/* right side view */}
                <View style={styles.right_side}>
                  <View style={styles.counter_view}>
                    <Text style={[styles.normal_text, {fontSize: 20}]}>+5</Text>
                  </View>
                  <View style={[styles.circle_views, {zIndex: 1, left: 25}]}>
                    <Image
                      source={require('../images/user.png')}
                      style={{width: 50, height: 50, resizeMode: 'contain'}}
                    />
                  </View>
                  <View style={styles.circle_views}>
                    <Image
                      source={require('../images/Alice.png')}
                      style={{width: 50, height: 50, resizeMode: 'contain'}}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            {/* Groups view */}
            <View style={{paddingVertical: '2%'}}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Group_list')}
                style={styles.connection_container}>
                <Text style={styles.normal_text}>Groups</Text>
                {/* right side view */}
                <View style={styles.right_side}>
                  <View style={styles.counter_view}>
                    <Text style={[styles.normal_text, {fontSize: 20}]}>+5</Text>
                  </View>
                  <View style={[styles.circle_views, {zIndex: 1, left: 25}]}>
                    <Image
                      source={require('../images/user.png')}
                      style={{width: 50, height: 50, resizeMode: 'contain'}}
                    />
                  </View>
                  <View style={styles.circle_views}>
                    <Image
                      source={require('../images/Alice.png')}
                      style={{width: 50, height: 50, resizeMode: 'contain'}}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            {/* Blacklisted view */}
            <View style={{paddingVertical: '2%'}}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Blacklisted_user')
                }
                style={styles.connection_container}>
                <Text style={styles.normal_text}>Blacklisted</Text>
                {/* right side view */}
                <View style={styles.right_side}>
                  <View style={styles.counter_view}>
                    <Text style={[styles.normal_text, {fontSize: 20}]}>+5</Text>
                  </View>
                  <View style={[styles.circle_views, {zIndex: 1, left: 25}]}>
                    <Image
                      source={require('../images/user.png')}
                      style={{width: 50, height: 50, resizeMode: 'contain'}}
                    />
                  </View>
                  <View style={styles.circle_views}>
                    <Image
                      source={require('../images/Alice.png')}
                      style={{width: 50, height: 50, resizeMode: 'contain'}}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            {/* Hashtags view */}
            <View style={{paddingVertical: '2%'}}>
              <View style={styles.connection_container}>
                <Text style={styles.normal_text}>Hashtags</Text>
                {/* right side view */}
                <View style={styles.right_side}>
                  <Text style={[styles.normal_text, {color: '#F79535'}]}>
                    #pizza,#burger..
                  </Text>
                  <TouchableOpacity>
                    <Image
                      source={require('../images/plus.png')}
                      style={{width: 20, height: 20, resizeMode: 'contain'}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

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
    justifyContent: 'center',
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
  circle_views: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    borderRadius: 25,
    // zIndex: 2,
    // left: 60,
  },
  counter_view: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    borderRadius: 25,
    zIndex: 2,
    left: 50,
    backgroundColor: '#F79535',
    alignItems: 'center',
    justifyContent: 'center',
  },
  connection_container: {
    height: 70,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: '3%',
  },
  right_side: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export {Group_manager};
