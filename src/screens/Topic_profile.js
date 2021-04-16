import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Footer from '../common/Footer';
import Large_header from '../common/Large_header';

class Topic_profile extends Component {
  constructor(props) {
    super(props);
    // this.state = {};
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
            {/* about topic */}
            <View style={{paddingHorizontal: '3%', paddingTop: 50}}>
              <View style={styles.topic_container}>
                <Text style={styles.topic_name}>#Politics</Text>
                <Text style={[styles.normal_text, {textAlign: 'center'}]}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore #pizza
                  magna aliquyam erat, sed diam voluptua. At vero eos et #Buger
                  accusam et justo duo dolores et ea rebum. Stet clita kasd
                  gubergren, no sea takimata sanctus est Lorem sit.
                </Text>
              </View>
            </View>
            {/* bottom view */}
            <View style={styles.bottom_view}>
              {/* setting view */}
              <View style={{paddingVertical: '1%'}}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Topic_screens')
                  }
                  style={styles.seting_view}>
                  <Image
                    source={require('../images/setting1.png')}
                    style={styles.modal_icons}
                  />
                  <Text style={[styles.normal_text, {left: 10}]}>Setting</Text>
                </TouchableOpacity>
              </View>
              {/* Bookmark view */}
              <View style={{paddingVertical: '1%'}}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Topic_screens')
                  }
                  style={styles.seting_view}>
                  <Image
                    source={require('../images/group.png')}
                    style={styles.modal_icons}
                  />
                  <Text style={[styles.normal_text, {left: 10}]}>Members</Text>
                </TouchableOpacity>
              </View>
              {/* forward view */}
              <View style={{paddingVertical: '1%'}}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Topic_screens')
                  }
                  style={styles.seting_view}>
                  <Image
                    source={require('../images/uploadgrey.png')}
                    style={styles.modal_icons}
                  />
                  <Text style={[styles.normal_text, {left: 10}]}>Uploads</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* footer  */}
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
  normal_text: {
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
  },
  topic_name: {
    paddingVertical: '3%',
    color: '#F79535',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
  topic_container: {
    padding: 10,
    width: '100%',
    borderRadius: 20,
    backgroundColor: '#121212',
    alignItems: 'center',
  },
  bottom_view: {
    width: '100%',
    backgroundColor: '#121212',
    position: 'absolute',
    bottom: 20,
    // bottom: 0,
    paddingVertical: '2%',
    paddingHorizontal: '7%',
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    borderRadius: 20,
  },
  seting_view: {
    flexDirection: 'row',
    alignItems: 'center',
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
});
export {Topic_profile};
