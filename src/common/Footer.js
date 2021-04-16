import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackgound,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
class Footer extends Component {
  render() {
    return (
      <View style={styles.footer_view}>
        {/* Home icon */}
        <TouchableOpacity onPress={this.props.homepress}>
          {this.props.footerselection == 'dashboard' ? (
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../images/home.png')}
                style={styles.footer_iocns}
              />
              <Text style={styles.normal_text}>Home</Text>
            </View>
          ) : (
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../images/home1.png')}
                style={styles.footer_iocns}
              />
              <Text style={[styles.normal_text, {color: '#fff'}]}>Home</Text>
            </View>
          )}
        </TouchableOpacity>
        {/* notificationicon */}
        <TouchableOpacity onPress={this.props.notificationpress}>
          {this.props.footerselection == 'notification' ? (
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../images/bell.png')}
                style={styles.footer_iocns}
              />
              <Text style={styles.normal_text}>Notification</Text>
            </View>
          ) : (
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../images/bell1.png')}
                style={styles.footer_iocns}
              />
              <Text style={[styles.normal_text, {color: '#fff'}]}>
                Notification
              </Text>
            </View>
          )}
        </TouchableOpacity>
        {/* Create post */}
        <TouchableOpacity onPress={this.props.ceate_postpess}>
          {this.props.footerselection == 'createpost' ? (
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../images/add_post.png')}
                style={styles.footer_iocns}
              />
              <Text style={styles.normal_text}>Create post</Text>
            </View>
          ) : (
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../images/add_post1.png')}
                style={styles.footer_iocns}
              />
              <Text style={[styles.normal_text, {color: '#fff'}]}>
                Create post
              </Text>
            </View>
          )}
        </TouchableOpacity>
        {/* My network */}
        <TouchableOpacity onPress={this.props.my_networkpress}>
          {this.props.footerselection == 'mynetwork' ? (
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../images/group1.png')}
                style={styles.footer_iocns}
              />
              <Text style={styles.normal_text}>My Network</Text>
            </View>
          ) : (
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../images/group2.png')}
                style={styles.footer_iocns}
              />
              <Text style={[styles.normal_text, {color: '#fff'}]}>
                My Network
              </Text>
            </View>
          )}
        </TouchableOpacity>
        {/* My network */}
        <TouchableOpacity onPress={this.props.hashpress}>
          {this.props.footerselection == 'hashtag' ? (
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../images/hash.png')}
                style={styles.footer_iocns}
              />
              <Text style={styles.normal_text}>Hashtag</Text>
            </View>
          ) : (
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../images/hash1.png')}
                style={styles.footer_iocns}
              />
              <Text style={[styles.normal_text, {color: '#fff'}]}>Hashtag</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  normal_text: {
    color: '#F79535',
    // color: "#fff",
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
  },
  footer_view: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#121212',
    paddingHorizontal: '3%',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  footer_iocns: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});
export default Footer;

Footer.PropTypes = {
  homepress: PropTypes.func,
  notificationpress: PropTypes.func,
  ceate_postpess: PropTypes.func,
  my_networkpress: PropTypes.func,
  hashpress: PropTypes.func,
};
