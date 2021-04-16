import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class DrawerPage extends Component {
  constructor(props) {
    super(props);
    // this.state = {  };
  }
  render() {
    return (
      <SafeAreaView>
        <View style={{height: '100%', backgroundColor: '#191B1D'}}>
          {/* dawer header area */}
          <View style={styles.header_view}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('User_all_post')}>
                <Image
                  source={require('../images/group.png')}
                  style={styles.profile_image}
                />
              </TouchableOpacity>
              {/* user name */}
              <Text style={[styles.normal_text, {fontSize: 16, left: 10}]}>
                User Name
              </Text>
            </View>
            {/* more icon view */}
            <View>
              <TouchableOpacity style={{alignSelf: 'flex-end'}}>
                <Image
                  source={require('../images/dots.png')}
                  style={styles.more_icon}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* My Network  */}
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('My_network')}
            style={styles.my_network_view}>
            <Image
              source={require('../images/users.png')}
              style={styles.more_icon}
            />
            <Text style={styles.my_network_Text}>My network</Text>
          </TouchableOpacity>
          {/* Group Manager */}
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Group_manager')}
            style={styles.my_network_view}>
            <Image
              source={require('../images/users.png')}
              style={styles.more_icon}
            />
            <Text style={styles.my_network_Text}>Group manager</Text>
          </TouchableOpacity>
          {/* Team Mates */}
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Teammate_list')}
            style={styles.my_network_view}>
            <Image
              source={require('../images/team_mates.png')}
              style={styles.more_icon}
            />
            <Text style={styles.my_network_Text}>Teammates</Text>
          </TouchableOpacity>
          {/* Set preferred mess.. */}
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Template_page')}
            style={styles.my_network_view}>
            <Image
              source={require('../images/comment.png')}
              style={styles.more_icon}
            />
            <Text style={styles.my_network_Text}>Set template messege</Text>
          </TouchableOpacity>
          {/* Set a mission and invi..*/}
          <TouchableOpacity style={styles.my_network_view}>
            <Image
              source={require('../images/useradd.png')}
              style={styles.more_icon}
            />
            <Text style={styles.my_network_Text}>Set a mission and invi..</Text>
          </TouchableOpacity>
          {/* Bookmarks */}
          <TouchableOpacity style={styles.my_network_view}>
            <Image
              source={require('../images/bookmark.png')}
              style={styles.more_icon}
            />
            <Text style={styles.my_network_Text}>Bookmarks </Text>
          </TouchableOpacity>
          {/* Setting */}
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Setting_screen')}
            style={styles.my_network_view}>
            <Image
              source={require('../images/setting.png')}
              style={styles.more_icon}
            />
            <Text style={styles.my_network_Text}>Setting and privacy</Text>
          </TouchableOpacity>
          {/* Help center */}
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Help_center')}
            style={styles.my_network_view}>
            <Image
              source={require('../images/help.png')}
              style={styles.more_icon}
            />
            <Text style={styles.my_network_Text}>Help center </Text>
          </TouchableOpacity>
          {/* QR code view */}
          <View style={styles.qr_code_view}>
            <Image
              source={require('../images/qrcode.png')}
              style={styles.qr_code}
            />
          </View>

          {/* Help center */}
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Signin')}
            style={styles.my_network_view}>
            <Image
              source={require('../images/logout.png')}
              style={styles.more_icon}
            />
            <Text style={styles.my_network_Text}>Logout</Text>
          </TouchableOpacity>
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
  header_view: {
    height: '20%',
    alignItems: 'center',
    paddingHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profile_image: {height: 50, width: 50, resizeMode: 'contain'},
  more_icon: {height: 20, width: 20, resizeMode: 'contain'},
  my_network_view: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '3%',
    paddingHorizontal: '7%',
  },
  my_network_Text: {
    color: '#fff',
    left: 20,
    fontFamily: 'Montserrat-Regular',
  },
  qr_code_view: {
    width: '100%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qr_code: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
export {DrawerPage};
