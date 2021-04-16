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

class Help_center extends Component {
  constructor(props) {
    super(props);
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
            {/* small header */}
            <View style={styles.small_header_view}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image
                  source={require('../images/backicon.png')}
                  style={{height: 20, width: 20, resizeMode: 'contain'}}
                />
              </TouchableOpacity>
              <Text style={[styles.small_header_text, {left: 10}]}>
                Help center
              </Text>
            </View>
            <View style={{paddingVertical: '3%'}}>
              <View style={styles.text_container}>
                <View style={{paddingHorizontal: '5%'}}>
                  <Text style={styles.heading_text}>Help</Text>
                  <Text style={styles.normal_text}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et,
                  </Text>
                </View>
              </View>
            </View>
            <View style={{paddingVertical: '2%'}}>
              <View style={styles.text_container}>
                <View style={{paddingHorizontal: '5%'}}>
                  <Text style={styles.heading_text}>Help 1</Text>
                  <Text style={styles.normal_text}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et,
                  </Text>
                </View>
              </View>
            </View>
            <View style={{paddingVertical: '2%'}}>
              <View style={styles.text_container}>
                <View style={{paddingHorizontal: '5%'}}>
                  <Text style={styles.heading_text}>Help 2</Text>
                  <Text style={styles.normal_text}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et,
                  </Text>
                </View>
              </View>
            </View>
            {/* Help icon */}
            <TouchableOpacity style={styles.help_icon_view}>
              <Image
                source={require('../images/helpicon.png')}
                style={{width: 40, height: 40, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
          </View>
          {/* footer area */}
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
  normal_text: {
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
  },
  heading_text: {
    color: '#F79535',
    fontSize: 16,
    paddingVertical: '1%',
    fontFamily: 'Montserrat-Regular',
  },
  text_container: {
    paddingVertical: '1%',
    backgroundColor: '#121212',
  },
  help_icon_view: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#F79535',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    right: 10,
    position: 'absolute',
    bottom: 20,
  },
});
export {Help_center};
