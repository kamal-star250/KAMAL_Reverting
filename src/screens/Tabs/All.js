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

class All extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkbox: false,
      long_press_modal: false,
      // user_select_modal: false,
      select_users: false,
      select_checkbox: [],

      Topic_lists: [
        {
          id: 1,
          resent_message: '1',
          message: true,
          user_active: true,
          active_time: '15 min',
          topic_name: 'User1 # Politics',
          topic_image: require('../../images/group.png'),
          topic_chats: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        },
        {
          id: 2,
          resent_message: '1',
          active_time: '20 min',
          user_active: true,
          topic_name: 'User1 # Politics',
          topic_image: require('../../images/group.png'),
          topic_chats: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        },
        {
          id: 3,
          resent_message: '1',
          active_time: '20 min',
          message: true,
          topic_name: 'User1 # Politics',
          topic_image: require('../../images/group.png'),
          topic_chats: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        },
        {
          id: 4,
          resent_message: '1',
          message: true,

          active_time: '15 min',
          topic_name: 'User1 # Politics',
          topic_image: require('../../images/group.png'),
          topic_chats: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        },
        {
          id: 5,
          resent_message: '1',
          active_time: '20 min',
          topic_name: 'User1 # Politics',
          topic_image: require('../../images/group.png'),
          topic_chats: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        },
      ],
      Group_list: [
        {
          name: 'Group 1',
        },
        {
          name: 'Group 2',
        },
        {
          name: 'Group 3',
        },
        {
          name: 'Group 4',
        },
      ],
    };
  }

  ////////////////////// function for create a new group by modal ////////////////////////////////////////////
  Long_pressed_modal = () => {
    this.setState({long_press_modal: !this.state.long_press_modal});
  };

  Show_list = () => {
    this.setState({long_press_modal: false});
    this.props.navigation.navigate('New_group_list');
  };

  on_tap_user = (values) => {
    // console.log(values);

    const id = values;
    const blankarray = this.state.select_checkbox;
    blankarray.push({UserId: id});
    this.setState({
      select_checkbox: blankarray,
    });
    // console.log(this.state.select_checkbox);
    this.props;
  };

  render() {
    const {
      Topic_lists,
      long_press_modal,
      Group_list,
      user_select_modal,
      checkbox,
      select_users,
    } = this.state;
    return (
      <SafeAreaView>
        <View style={{height: '100%', backgroundColor: '#191C1E'}}>
          <View style={{paddingBottom: 5, flex: 1}}>
            {/* Flat list for topic list */}
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
                      // onPress={() => this.on_tap_user(item.id)}
                      onPress={() =>
                        this.props.navigation.navigate('Topic_chat')
                      }
                      onLongPress={() => this.setState({select_users: true})}
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
                        {select_users == true ? (
                          <View>
                            <CheckBox
                              tintColors={({true: '#F79535'}, {false: '#FFF'})}
                              value={this.state.select_checkbox.some(
                                (value) => (value.UserId = item.id),
                              )}
                              onValueChange={() =>
                                this.setState({checkbox: !checkbox})
                              }
                            />
                          </View>
                        ) : (
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
                        )}
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
            <View
              style={{
                position: 'absolute',
                bottom: 20,
                alignItems: 'flex-end',
                right: 10,
              }}>
              {select_users == false ? (
                <TouchableOpacity style={styles.share_icon_view}>
                  <Image
                    source={require('../../images/shareicon.png')}
                    style={styles.share_icon}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => this.Long_pressed_modal()}
                  style={styles.share_icon_view}>
                  <Image
                    source={require('../../images/add.png')}
                    style={styles.share_icon}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>

          {/* share and forword modal */}
          <Modal
            style={{margin: 0}}
            onBackButtonPress={() => this.setState({long_press_modal: false})}
            isVisible={long_press_modal}>
            <SafeAreaView style={{height: '100%'}}>
              <TouchableOpacity
                onPress={() => this.setState({long_press_modal: false})}>
                <View style={{height: '100%', backgroundColor: 'transparent'}}>
                  {/* modal bottom view  */}
                  <View style={styles.modal_bottom_view}>
                    <View style={{paddingVertical: 10, alignItems: 'center'}}>
                      <Text style={styles.modal_heading}>Group Manager</Text>
                    </View>
                    {/* Reply view*/}
                    <View style={{paddingVertical: '2%'}}>
                      <View
                        style={[
                          styles.modal_reply_view,
                          {alignItems: 'center'},
                        ]}>
                        <TextInput
                          placeholder="Group name search here"
                          placeholderTextColor="grey"
                          color="#fff"
                        />
                        <TouchableOpacity>
                          <Image
                            source={require('../../images/addnew.png')}
                            style={styles.modal_icons}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                    {/* Group list */}
                    <ScrollView>
                      {Group_list.map((item) => {
                        return (
                          <View style={{paddingVertical: '2%'}}>
                            <TouchableOpacity
                              onPress={() => this.Show_list()}
                              style={styles.modal_reply_view}>
                              <Text style={styles.topic_name}>{item.name}</Text>
                            </TouchableOpacity>
                          </View>
                        );
                      })}
                    </ScrollView>
                  </View>
                </View>
              </TouchableOpacity>
            </SafeAreaView>
          </Modal>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  topic_name: {
    color: '#fff',
    fontSize: 13,
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
  share_icon_view: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#F79535',
    // position: 'absolute',
    // bottom: 20,
    // right: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // alignSelf: 'flex-end',
  },
  share_icon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },

  modal_bottom_view: {
    width: '100%',
    height: '60%',
    backgroundColor: '#191C1E',
    position: 'absolute',
    bottom: 0,
    paddingVertical: '5%',
    paddingHorizontal: '5%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modal_heading: {
    color: '#F79535',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
  modal_reply_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingVertical: '3%',
    paddingHorizontal: '3%',
    borderColor: '#444444',
    alignItems: 'center',
  },
  modal_icons: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  Selected_message_view: {
    width: '90%',
    paddingHorizontal: '5%',
    paddingVertical: '2%',
    borderRadius: 10,
    backgroundColor: '#121212',
  },
  contact_list_view: {
    height: 60,
    width: '100%',
    backgroundColor: '#121212',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },
  user_detail_view: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
  },
  user_image: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});
export default All;
