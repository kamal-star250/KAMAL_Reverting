import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Large_header from '../common/Large_header';
import Footer from '../common/Footer';

class Hashtag extends Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }

  render() {
    return (
      <SafeAreaView>
        <View style={{height: '100%', backgroundColor: '#191C1E'}}>
          {/*  */}
          <View style={{height: '92%'}}>
            {/* Header */}
            <Large_header
              profilepress={() => this.props.navigation.openDrawer()}
              qrpress={() => this.props.navigation.navigate('Scan_QRcode')}
            />
          </View>

          {/* Footer area reserved */}
          <View style={{height: '8%'}}>
            <Footer
              footerselection="hashtag"
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
  input_view: {
    // alignSelf: "center",
    justifyContent: 'space-between',
    width: '100%',
    // paddingVertical: "5%",
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
    height: 60,
  },
  normal_text: {
    color: '#fff',
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
});
export {Hashtag};
