import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Footer from '../common/Footer';
import Large_header from '../common/Large_header';

class Template_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IsNotification: false,
      notification: [
        {
          template_data: 'insert template wording',
        },
        {
          template_data: 'insert template 2',
        },
        {
          template_data: 'insert template 2',
        },
      ],
    };
  }
  render() {
    const {IsNotification, notification} = this.state;
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
              <View style={{flex: 1}}>
                {/* small header */}
                <View style={styles.small_header_view}>
                  <Text style={styles.small_header_text}>Templates</Text>
                </View>
                <View style={styles.notification_bell_view}>
                  <Image
                    source={require('../images/template.png')}
                    style={{width: 200, height: 200, resizeMode: 'contain'}}
                  />
                  <View style={{position: 'absolute', bottom: 0}}>
                    <Text style={styles.normal_text}>
                      You don't have any template{'\n'} wording yet
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Add_template')}
                  style={styles.add}>
                  <Image
                    source={require('../images/add.png')}
                    style={styles.add_image}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              ///////////// if you have a notification ///////////

              <View style={{flex: 1}}>
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
                      Templates
                    </Text>
                  </View>
                  {notification.map((item) => {
                    return (
                      <View style={{paddingVertical: '1%', flex: 1}}>
                        <View style={styles.notofication_container}>
                          <Text style={styles.topic_name}>
                            {item.template_data}
                          </Text>
                        </View>
                      </View>
                    );
                  })}
                </ScrollView>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Add_template')}
                  style={styles.add}>
                  <Image
                    source={require('../images/add.png')}
                    style={styles.add_image}
                  />
                </TouchableOpacity>
              </View>
            )}
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
    height: '75%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notofication_container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: '#121212',
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
  add: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  add_image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});
export {Template_page};
