import React, {Component} from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import Footer from '../common/Footer';
import Large_header from '../common/Large_header';
import Setting_Tabs from './Tabs/Setting_Tabs';

class Setting_screen extends Component {
  constructor(props) {
    super(props);
    // this.state = {  };
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
            <Setting_Tabs />
          </View>
          <View style={{height: '8%'}}>
            <Footer
              // footerselection="mynetwork"
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

export {Setting_screen};
