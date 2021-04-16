import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Keyboard,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Large_header from '../common/Large_header';
import CheckBox from '@react-native-community/checkbox';
import Footer from '../common/Footer';

class Forward_message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: 'uk',
      send_to: 'AnyOne',
      copy_to: 'Teammates',
      selected_template: '',
      input_data: '',
      template_data: [
        {
          id: 0,
          data: 'insert template one',
        },
        {
          id: 1,
          data: 'insert template two',
        },
        {
          id: 2,
          data: 'insert template three',
        },
      ],
    };
  }
  // componentDidMount() {
  //   console.log(this.state.input_data);
  // }

  select_template = (values) => {
    // console.log(values, 'template data');
    this.setState({
      input_data: values,
    });
  };
  render() {
    const {
      country,
      send_to,
      items,
      copy_to,
      template_data,
      selected_template,
      input_data,
    } = this.state;
    return (
      <SafeAreaView>
        <View style={{height: '100%', backgroundColor: '#191C1E'}}>
          <View style={{height: '92%', paddingBottom: 5}}>
            {/* Header */}
            <Large_header
              profilepress={() => this.props.navigation.openDrawer()}
              qrpress={() => this.props.navigation.navigate('Scan_QRcode')}
            />
            <ScrollView>
              {/* small header */}
              <View style={styles.small_header_view}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}>
                  <Image
                    source={require('../images/backicon.png')}
                    style={{height: 20, width: 20, resizeMode: 'contain'}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Topic_chat')}>
                  <Text style={styles.small_header_text}>Forward</Text>
                </TouchableOpacity>
              </View>
              {/* user profile view */}
              <View style={{alignItems: 'center', paddingBottom: 10}}>
                <Image
                  source={require('../images/Alice.png')}
                  style={{
                    width: 80,
                    height: 80,
                    resizeMode: 'contain',
                    marginTop: -40,
                  }}
                />
              </View>

              <View style={{paddingHorizontal: 5}}>
                <View
                  style={{
                    paddingVertical: '2%',
                    paddingHorizontal: '3%',
                    borderRadius: 10,
                    backgroundColor: '#121212',
                  }}>
                  {/* send to  row container */}
                  <View style={styles.send_to_container}>
                    {/* left side view */}
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.normal_text}>Send to :</Text>
                      <Image
                        source={require('../images/info.png')}
                        style={[styles.info_icon, {left: 10}]}
                      />
                    </View>
                    {/* right side view */}

                    <View style={styles.anyone_view}>
                      <Image
                        source={require('../images/globe.png')}
                        style={styles.info_icon}
                      />

                      <Picker
                        mode={'dropdown'}
                        selectedValue={send_to}
                        style={{height: 20, width: 110, color: '#fff'}}
                        // dropdownIconColor='#ffffff'
                        dropdownIconColor="white"
                        onValueChange={(itemValue, itemIndex) =>
                          this.setState({send_to: itemValue})
                        }>
                        <Picker.Item label="Anyone" value="Anyone" />
                        <Picker.Item label="Public" value="Public" />
                        <Picker.Item label="Private" value="Private" />
                      </Picker>
                    </View>
                  </View>

                  {/* copy chat to  row container */}
                  <View style={styles.send_to_container}>
                    {/* left side view */}
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.normal_text}>Copy chat to :</Text>
                      <Image
                        source={require('../images/info.png')}
                        style={[styles.info_icon, {left: 10}]}
                      />
                    </View>
                    {/* right side view */}
                    <View style={styles.anyone_view}>
                      <Picker
                        mode={'dropdown'}
                        selectedValue={copy_to}
                        style={{height: 20, width: 100, color: '#fff'}}
                        // dropdownIconColor='#ffffff'
                        dropdownIconColor="white"
                        onValueChange={(itemValue, itemIndex) =>
                          this.setState({copy_to: itemValue})
                        }>
                        <Picker.Item label="Teammates" value="Teammates" />
                        <Picker.Item label="Group" value="Group" />
                        <Picker.Item label="Social" value="Social" />
                      </Picker>
                    </View>
                  </View>

                  {/* Blacklisted only  row container */}
                  <View style={styles.send_to_container}>
                    {/* left side view */}
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.normal_text}>
                        Blacklisted only for this post :
                      </Text>
                      <Image
                        source={require('../images/info.png')}
                        style={[styles.info_icon, {left: 10}]}
                      />
                    </View>
                    {/* right side view */}
                    <View style={[styles.anyone_view, {width: 95}]}>
                      <Picker
                        textStyle={{fontSize: 10, color: 'yellow'}}
                        mode={'dropdown'}
                        selectedValue={this.state.status}
                        style={{
                          height: 20,
                          width: 85,
                          color: '#fff',
                          // fontSize: 10,
                        }}
                        // dropdownIconColor='#ffffff'
                        dropdownIconColor="white"
                        onValueChange={(itemValue, itemIndex) =>
                          this.setState({status: itemValue})
                        }>
                        <Picker.Item label="Group" value="Group" />
                        <Picker.Item label="Social" value="Social" />
                      </Picker>
                    </View>
                  </View>

                  {/* subject row container */}
                  <View style={styles.send_to_container}>
                    {/* left side view */}
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.normal_text}> Subject :</Text>
                      <Image
                        source={require('../images/info.png')}
                        style={[styles.info_icon, {left: 10}]}
                      />
                    </View>
                    {/* right side view */}
                    <View
                      style={[
                        styles.anyone_view,
                        {width: 200, justifyContent: 'center'},
                      ]}>
                      <Text style={styles.normal_text1}>#pizza, </Text>
                      <Text style={styles.normal_text1}>#burger, </Text>
                      <Text style={styles.normal_text1}>#test </Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* talk view */}
              <View style={{paddingVertical: '3%', paddingHorizontal: '2%'}}>
                <View style={styles.text_input_container}>
                  <TextInput
                    color="#fff"
                    style={{fontSize: 14}}
                    multiline={true}
                    placeholder="What do you want to talk about?"
                    placeholderTextColor="grey"
                    // data={template_data}

                    value={this.state.input_data}
                    onChangeText={(text) =>
                      this.setState({
                        input_data: text,
                      })
                    }
                  />
                </View>
              </View>

              <View style={styles.camera_container}>
                <TouchableOpacity style={styles.circle_view}>
                  <Image
                    source={require('../images/camera.png')}
                    style={styles.camera_icon}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.circle_view}>
                  <Image
                    source={require('../images/video.png')}
                    style={styles.camera_icon}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.circle_view}>
                  <Image
                    source={require('../images/image.png')}
                    style={styles.camera_icon}
                  />
                </TouchableOpacity>
              </View>
              <View style={{paddingVertical: '2%', paddingHorizontal: '2%'}}>
                <View style={styles.template_container}>
                  {template_data.map((item) => {
                    return (
                      <TouchableOpacity
                        onPress={() => this.select_template(item.data)}
                        style={styles.template}>
                        <Text style={styles.normal_text}>{item.data}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={{height: '8%'}}>
            <Footer
              footerselection="createpost"
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
    justifyContent: 'space-between',
  },
  small_header_text: {
    color: '#F79535',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
  normal_text: {
    color: '#fff',
    // fontSize: 13,
    fontFamily: 'Montserrat-Regular',
  },
  send_to_container: {
    paddingVertical: '2%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  normal_text1: {
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
  },
  anyone_view: {
    width: 130,
    backgroundColor: '#31323B',
    borderRadius: 20,
    flexDirection: 'row',
    paddingVertical: '2%',
    paddingHorizontal: '3%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info_icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  text_input_container: {
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    height: 200,
    borderRadius: 10,
    backgroundColor: '#121212',
  },
  camera_container: {
    width: '70%',
    paddingVertical: '2%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  circle_view: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
  },
  camera_icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  template_container: {
    paddingHorizontal: '3%',
    paddingVertical: '3%',
    borderRadius: 10,
    backgroundColor: '#121212',
  },
  template: {
    paddingVertical: '3%',
    paddingHorizontal: '3%',
    borderBottomWidth: 1,
    borderColor: '#ffff',
  },
});
export {Forward_message};
