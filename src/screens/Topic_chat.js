import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Large_header from '../common/Large_header';
import Modal from 'react-native-modal';

class Topic_chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      long_press_modal: false,
      chat: [
        {
          sender_message: 'Hello sir.',
          sender_time: '05:30',
          reciever_message: 'Hello ',
          reciever_time: '05:31',
        },
        {
          sender_message: 'Good morning kk, are you fine.',
          sender_time: '05:30',
          reciever_message: 'Good morning pawan charitra.',
          reciever_time: '05:31',
        },
        {
          sender_message: 'Good morning kk.',
          sender_time: '05:30',
          reciever_message: 'Good morning pawan sir.',
          reciever_time: '05:31',
        },
        {
          sender_message: 'Good morning kk.',
          sender_time: '05:30',
          reciever_message: 'Good morning pawan sir.',
          reciever_time: '05:31',
        },
        {
          sender_message: 'Good morning kk.',
          sender_time: '05:30',
          reciever_message: 'Good morning pawan sir.',
          reciever_time: '05:31',
        },
      ],
    };
  }
  Long_pressed_modal = () => {
    this.setState({long_press_modal: !this.state.long_press_modal});
  };
  //////////// WHEN USER PRESS FORWARD /////////////////////
  Forward_press = () => {
    this.props.navigation.navigate('Forward_message');
    this.setState({long_press_modal: false});
  };
  render() {
    const {chat, long_press_modal} = this.state;
    return (
      <SafeAreaView>
        <View
          style={{
            height: '100%',
            backgroundColor: '#191C1E',
            paddingBottom: '2%',
          }}>
          {/* Header */}
          <Large_header
            profilepress={() => this.props.navigation.openDrawer()}
            qrpress={() => this.props.navigation.navigate('Scan_QRcode')}
          />
          {/* small header */}
          <View style={styles.small_header_view}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                source={require('../images/backicon.png')}
                style={styles.modal_icons}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Topic_profile')}>
              <Text style={[styles.small_header_text, {paddingLeft: 10}]}>
                # Politics
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={[styles.modal_icons, {left: 10}]}
                source={require('../images/edit.png')}
              />
            </TouchableOpacity>
          </View>

          <ScrollView>
            {chat.map((item) => {
              return (
                <View style={{paddingVertical: 5, paddingHorizontal: 10}}>
                  {/* i recieved a message */}
                  <TouchableOpacity
                    // onPress={() => console.log('pressed')}
                    onLongPress={() => this.Long_pressed_modal()}
                    style={styles.message_recieve_view}>
                    <Text style={[styles.normal_text, {color: '#F79535'}]}>
                      User 2
                    </Text>
                    <Text style={styles.normal_text}>
                      {item.reciever_message}
                    </Text>
                    <Text style={styles.chat_time}>{item.reciever_time}</Text>
                  </TouchableOpacity>
                  <View style={{paddingVertical: 5}}>
                    {/* i send a message */}
                    <TouchableOpacity
                      onPress={() => console.log('pressed')}
                      onLongPress={() => this.Long_pressed_modal()}
                      style={styles.send_message}>
                      <Text style={[styles.normal_text, {color: '#F79535'}]}>
                        User 2
                      </Text>
                      <Text style={styles.normal_text}>
                        {item.sender_message}
                      </Text>
                      <Text style={styles.chat_time}>{item.reciever_time}</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity
                      onLongPress={() => this.Long_pressed_modal()}
                      style={styles.send_message}>
                      <View style={{paddingHorizontal: 10, paddingVertical: 5}}>
                        <Text style={[styles.normal_text, {color: '#F79535'}]}>
                          Me replying to : User 2
                        </Text>
                      </View>

                      <View style={styles.my_message_view}>
                        <Text
                          style={[styles.normal_text, {paddingVertical: 5}]}>
                          User 2
                        </Text>
                        <Text style={{color: '#fff'}}>
                          {item.reciever_message}
                        </Text>
                        <Text style={styles.chat_time}>
                          {item.reciever_time}
                        </Text>
                      </View>
                    </TouchableOpacity> */}
                  </View>
                </View>
              );
            })}
          </ScrollView>
          <View style={{paddingVertical: '2%', paddingHorizontal: '3%'}}>
            <View style={styles.send_message_view}>
              <TouchableOpacity>
                <Image
                  source={require('../images/file.png')}
                  style={styles.modal_icons}
                />
              </TouchableOpacity>
              <TextInput
                style={{
                  width: '65%',
                  height: 50,
                  left: 10,
                }}
                placeholder="Type a message"
                placeholderTextColor="#fff"
                color="#fff"
                multiline={true}
              />
              <View style={styles.mice_view}>
                {/* line view */}
                <View style={styles.line}></View>
                <TouchableOpacity>
                  <Image
                    source={require('../images/mice.png')}
                    style={styles.modal_icons}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={require('../images/send.png')}
                    style={styles.modal_icons}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* share and forword modal */}
          <Modal
            style={{margin: 0}}
            isVisible={long_press_modal}
            onBackButtonPress={() => this.setState({long_press_modal: false})}>
            <SafeAreaView style={{height: '100%'}}>
              <TouchableOpacity
                onPress={() => this.setState({long_press_modal: false})}>
                <View style={{height: '100%', backgroundColor: 'transparent'}}>
                  {/* modal bottom view  */}
                  <View style={styles.modal_bottom_view}>
                    {/* Reply view*/}
                    <View style={{paddingVertical: '2%'}}>
                      <TouchableOpacity style={styles.modal_reply_view}>
                        <Text style={styles.normal_text}>Reply</Text>
                        <Image
                          source={require('../images/reply.png')}
                          style={styles.modal_icons}
                        />
                      </TouchableOpacity>
                    </View>
                    {/* Bookmark view */}
                    <View style={{paddingVertical: '2%'}}>
                      <TouchableOpacity style={styles.modal_reply_view}>
                        <Text style={styles.normal_text}>Bookmark</Text>
                        <Image
                          source={require('../images/star.png')}
                          style={styles.modal_icons}
                        />
                      </TouchableOpacity>
                    </View>
                    {/* forward view */}
                    <View style={{paddingVertical: '2%'}}>
                      <TouchableOpacity
                        onPress={() => this.Forward_press()}
                        style={styles.modal_reply_view}>
                        <Text style={styles.normal_text}>Forward</Text>
                        <Image
                          source={require('../images/forward.png')}
                          style={styles.modal_icons}
                        />
                      </TouchableOpacity>
                    </View>
                    {/* copy view */}
                    <View style={{paddingVertical: '2%'}}>
                      <TouchableOpacity style={styles.modal_reply_view}>
                        <Text style={styles.normal_text}>Copy</Text>
                        <Image
                          source={require('../images/copy1.png')}
                          style={styles.modal_icons}
                        />
                      </TouchableOpacity>
                    </View>
                    {/* message user 2 view */}
                    <View style={{paddingVertical: '2%'}}>
                      <TouchableOpacity style={styles.modal_reply_view}>
                        <Text style={styles.normal_text}>Message user 2</Text>
                        <Image
                          source={require('../images/message.png')}
                          style={styles.modal_icons}
                        />
                      </TouchableOpacity>
                    </View>
                    {/* Delete view */}
                    <View style={{paddingVertical: '2%'}}>
                      <TouchableOpacity style={styles.modal_reply_view}>
                        <Text style={[styles.normal_text, {color: '#F44336'}]}>
                          Delete
                        </Text>
                        <Image
                          source={require('../images/delete.png')}
                          style={styles.modal_icons}
                        />
                      </TouchableOpacity>
                    </View>
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
  message_recieve_view: {
    maxWidth: '60%',
    backgroundColor: '#121212',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    height: 'auto',
  },
  chat_time: {
    color: 'grey',
    alignSelf: 'flex-end',
    fontSize: 10,
  },
  send_message: {
    alignSelf: 'flex-end',
    maxWidth: '60%',
    minWidth: '40%',
    backgroundColor: '#121212',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    padding: 10,
  },
  my_message_view: {
    backgroundColor: '#31323B',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    paddingHorizontal: 10,
  },
  modal_bottom_view: {
    width: '100%',
    height: '50%',
    backgroundColor: '#191C1E',
    position: 'absolute',
    bottom: 0,
    paddingVertical: '5%',
    paddingHorizontal: '10%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modal_reply_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingVertical: '3%',
    paddingHorizontal: '3%',
    borderColor: '#444444',
  },
  modal_icons: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  send_message_view: {
    paddingHorizontal: '5%',
    borderRadius: 20,
    height: 40,
    backgroundColor: '#121212',
    alignItems: 'center',
    flexDirection: 'row',
  },
  mice_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '25%',
    alignItems: 'center',
  },
  line: {
    height: 20,
    borderWidth: 0.5,
    borderColor: 'grey',
    left: 10,
  },
});
export {Topic_chat};
