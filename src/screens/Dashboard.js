import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Footer from '../common/Footer';
import Large_header from '../common/Large_header';
import Dashboard_Tabs from '../screens/Tabs/Dashboard_Tabs';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: true,
      Topic_lists: [
        {
          resent_message: '1',
          message: true,
          user_active: true,
          active_time: '15 min',
          topic_name: 'User1 # Politics',
          topic_image: require('../images/group.png'),
          topic_chats: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        },
        {
          resent_message: '1',
          active_time: '20 min',
          topic_name: 'User1 # Politics',
          topic_image: require('../images/group.png'),
          topic_chats: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        },
      ],
    };
  }

  Go_chat = () => {
    this.props.navigation.navigate('Topic_chat');
  };
  render() {
    const {token, Topic_lists} = this.state;
    return (
      <SafeAreaView>
        <View style={{height: '100%', backgroundColor: '#191C1E'}}>
          <View
            style={{
              height: '92%',
            }}>
            {token == false ? (
              <ImageBackground
                source={require('../images/first_time_dashboard.png')}
                style={{height: '100%', width: '100%'}}>
                <Large_header />
                {/* space at top 35% */}
                <View style={{height: '35%'}}></View>
                {/*  You haven't chatted yet */}
                <View style={styles.text_view}>
                  <Text style={styles.normal_text}>
                    You haven't chatted yet
                  </Text>
                </View>
                {/* Message view */}
                <View style={styles.text_view}>
                  <Text style={styles.colored_text}>
                    Messages are always private{'\n'}one to one conversation
                    between you and other{'\n'}people sned messages and docs !
                  </Text>
                </View>
                {/* When view */}
                <View style={styles.text_view}>
                  <Text style={styles.colored_text}>
                    When you send messages,{'\n'}all answer will show up here
                  </Text>
                </View>
              </ImageBackground>
            ) : (
              <View style={{height: '100%', backgroundColor: '#191C1E'}}>
                <Large_header
                  profilepress={() => this.props.navigation.openDrawer()}
                  qrpress={() => this.props.navigation.navigate('Scan_QRcode')}
                />
                {/* small header */}
                <View style={styles.small_header_view}>
                  <TouchableOpacity>
                    <Text style={styles.small_header_text}>Topics</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={styles.edit_icon}
                      source={require('../images/edit.png')}
                    />
                  </TouchableOpacity>
                </View>
                <Dashboard_Tabs />
              </View>
            )}
          </View>
          <View style={{height: '8%'}}>
            <Footer
              footerselection="dashboard"
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
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
  },
  colored_text: {
    color: '#fff',
    color: '#F79535',
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
  },
  text_view: {
    paddingVertical: '8%',
  },
  edit_icon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    left: 15,
  },
});
export {Dashboard};
