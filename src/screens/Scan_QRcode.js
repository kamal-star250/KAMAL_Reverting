import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Footer from '../common/Footer';
import Button from '../common/Button';
import Large_header from '../common/Large_header';

class Scan_QRcode extends Component {
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

            <View style={{paddingVertical: '2%', height: 50}}>
              <View style={styles.scan_text_view}>
                <Text style={styles.small_header_text}>Scan Qr Code</Text>
              </View>
            </View>

            <View style={styles.qr_image_view}>
              <Image
                source={require('../images/qrcode.png')}
                style={{width: '80%', height: '70%', resizeMode: 'contain'}}
              />
            </View>
            <View style={styles.button_container}>
              <Button
                btnheight={50}
                btnwidth={'80%'}
                // onPress={() => alert('ok')}
                bgcolor={'#F79535'}>
                SCAN
              </Button>
            </View>
          </View>
          {/* footer area reserved */}
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
  small_header_text: {
    color: '#F79535',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
  scan_text_view: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#31323B',
  },
  qr_image_view: {
    height: '60%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_container: {
    height: '15%',
    justifyContent: 'center',
    width: '100%',
  },
});
export {Scan_QRcode};
