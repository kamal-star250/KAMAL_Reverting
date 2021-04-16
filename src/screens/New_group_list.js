import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Modal from 'react-native-modal';
import Large_header from '../common/Large_header';
import Footer from '../common/Footer';

class New_group_list extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        {
          resent_message: '1',
          active_time: '20 min',
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
        {
          resent_message: '1',
          active_time: '20 min',
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
        {
          resent_message: '1',
          active_time: '20 min',
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
    alert('Pressed');
    // this.props.navigation.navigate("Topic_chat");
  };
  render() {
    const {Topic_lists} = this.state;
    return (
      <SafeAreaView>
        <View style={{height: '100%', backgroundColor: '#191C1E'}}>
          <View
            style={{
              height: '92%',
            }}>
            <View style={{height: '100%'}}>
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
              <FlatList
                data={Topic_lists}
                renderItem={({item}) => (
                  <View style={{paddingVertical: '2%'}}>
                    <View style={styles.topic_container_view}>
                      {/* left side room image view */}
                      <View style={{width: '20%'}}>
                        <TouchableOpacity>
                          <Image
                            source={item.topic_image}
                            style={styles.group_image}
                          />
                        </TouchableOpacity>
                        {/* dot view for chat is active or not at this topic */}
                        {item.user_active == true ? (
                          <View style={styles.chat_active_view}></View>
                        ) : null}
                      </View>
                      {/* right side room detail view */}
                      <TouchableOpacity
                        // onLongPress={() => this.Long_pressed_modal()}
                        onLongPress={() => this.setState({select_users: true})}
                        onPress={() => this.Go_chat()}
                        style={{width: '80%', paddingHorizontal: '2%'}}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}>
                          <View style={{width: '80%'}}>
                            <View style={{paddingVertical: 5}}>
                              <Text style={styles.topic_name}>
                                {item.topic_name}
                              </Text>
                            </View>
                            <View style={{paddingVertical: 5}}>
                              <Text style={styles.topic_name}>
                                {item.topic_chats}
                              </Text>
                            </View>
                          </View>
                          <View>
                            <Text style={[styles.topic_name]}>
                              {item.active_time}
                            </Text>
                            <View style={{paddingVertical: 10}}>
                              {item.message == true ? (
                                <View style={styles.unseen_messages}>
                                  <Text style={styles.topic_name}>
                                    {item.resent_message}
                                  </Text>
                                </View>
                              ) : null}
                            </View>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
          <View style={{height: '8%'}}>
            <Footer
              //   footerselection="dashboard"
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
  topic_name: {
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
  },

  group_image: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
  },
  chat_active_view: {
    width: 20,
    height: 20,
    borderRadius: 12.5,
    marginTop: -20,
    right: 10,
    alignSelf: 'flex-end',
    backgroundColor: '#80EA4E',
    borderWidth: 2,
    borderColor: '#fff',
  },
  topic_container_view: {
    height: 80,
    backgroundColor: '#121212',
    paddingVertical: '2%',
    paddingHorizontal: '2%',
    flexDirection: 'row',
  },
  topics_name_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topic_last_chat: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '5%',
  },
  unseen_messages: {
    height: 20,
    width: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F79535',
  },
  small_header_view: {
    height: 50,
    backgroundColor: '#31323B',
    paddingHorizontal: '3%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  edit_icon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    left: 15,
  },
  small_header_text: {
    color: '#F79535',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
});
export {New_group_list};
