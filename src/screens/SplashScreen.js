import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, SafeAreaView } from 'react-native';

class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Register_now');
    }, 3000);
  }
  render() {
    return (
      <SafeAreaView>
        <View
          style={{
            height: '100%',
            width: '100%',
          }}>
          <ImageBackground
            style={{
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            source={require('../images/splashscreen.png')}>
            <Image
              style={{ width: 200, height: 200, resizeMode: 'contain' }}
              source={require('../images/logo.png')}
            />
          </ImageBackground>
        </View>
      </SafeAreaView>
    );
  }
}

export { SplashScreen };
