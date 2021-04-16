import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ColorPropType,
} from 'react-native';
import Large_header from '../common/Large_header';
import Footer from '../common/Footer';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
      notification_back_color: 'grey',
      IsNotification: true,
      notification: [
        {
          id: 1,
          username: 'john',
          time: '10:00',
        },
        {
          id: 2,
          username: 'Alice',
          time: '10:00',
        },
        {
          id: 3,
          username: 'john',
          time: '10:00',
        },
        {
          id: 4,
          username: 'Alice',
          time: '10:00',
        },
      ],
    };
  }

  ///////////////////////////// FUNCTION FOR CHANGE NOTIFICATION VIEW COLOR ////////////////////////////
  show_notification = (values) => {
    // console.log(values, 'change');

    const id = values;
    const blankarray = this.state.colors;
    blankarray.push({UserId: id});
    this.setState({
      colors: blankarray,
    });
    // console.log(blankarray);
  };
  render() {
    const {IsNotification, notification, notification_back_color} = this.state;

    return (
      <SafeAreaView>
        <View style={{height: '100%', backgroundColor: '#191C1E'}}>
          {/*  */}
          <View
            style={{
              height: '92%',
            }}>
            {/* Header */}
            <Large_header
              profilepress={() => this.props.navigation.openDrawer()}
              qrpress={() => this.props.navigation.navigate('Scan_QRcode')}
            />

            {/* if you Don't have any notification */}
            {IsNotification == false ? (
              <View>
                {/* small header */}
                <View style={styles.small_header_view}>
                  <Text style={styles.small_header_text}>Notification</Text>
                </View>
                <View style={styles.notification_bell_view}>
                  <Image
                    source={require('../images/largebell.png')}
                    style={{width: 200, height: 200, resizeMode: 'contain'}}
                  />
                  <View style={{position: 'absolute', bottom: 0}}>
                    <Text style={styles.normal_text}>
                      You don't have any{'\n'} notification yet
                    </Text>
                  </View>
                </View>
              </View>
            ) : (
              ///////////// if you have a notification ///////////

              <ScrollView style={{paddingVertical: '2%'}}>
                {/* small header */}
                <View style={styles.small_header_view}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}>
                    <Image
                      source={require('../images/backicon.png')}
                      style={{height: 20, width: 20, resizeMode: 'contain'}}
                    />
                  </TouchableOpacity>
                  <Text style={[styles.small_header_text, {left: 10}]}>
                    Notification
                  </Text>
                </View>
                {notification.map((item) => {
                  return (
                    <View
                      style={{paddingVertical: '2%', paddingHorizontal: '3%'}}>
                      <TouchableOpacity
                        onPress={
                          () => this.show_notification(item.id)
                          // this.setState({notification_back_color: '#121212'})
                        }
                        style={[
                          styles.notofication_container,
                          {
                            backgroundColor: this.state.colors.some(
                              (value) => value.UserId == item.id,
                            )
                              ? '#121212'
                              : '#292929',
                          },
                        ]}>
                        <View style={styles.left_side_view}>
                          {/* colored view left side  */}
                          <View style={styles.left_colored_vew}></View>
                          {/* username text */}
                          <Text style={[styles.topic_name, {paddingLeft: 10}]}>
                            {item.username} follows you.
                          </Text>
                        </View>
                        {/*  notification time  */}
                        <Text
                          style={[
                            styles.topic_name,
                            {color: 'grey', right: 10, fontSize: 12},
                          ]}>
                          {item.time}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </ScrollView>
            )}
          </View>
          {/* Footer area reserved */}
          <View style={{height: '8%'}}>
            <Footer
              footerselection="notification"
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
  notification_bell_view: {
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notofication_container: {
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'space-between',
    height: 50,
    alignItems: 'center',
  },
  left_side_view: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  left_colored_vew: {
    width: '3%',
    borderRadius: 10,
    height: '100%',
    backgroundColor: '#BBBCBD',
  },
});
export {Notification};
