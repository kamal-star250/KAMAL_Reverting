import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = ({
  btnwidth,
  btnheight,
  bgcolor,
  btnborder,
  bordercolor,
  onPress,
  children,
}) => {
  return (
    <View style={{width: '100%'}}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.btn_container,
          {
            width: btnwidth,
            height: btnheight,
            backgroundColor: bgcolor,
            borderWidth: btnborder,
            borderColor: bordercolor,
          },
        ]}>
        <Text style={styles.normal_text}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn_container: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  normal_text: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
});
export default Button;
