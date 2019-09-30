import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {THEME} from '../theme';
export const ReciepeView = props => {
  const {data} = props;
  return (
    <View style={styles.body}>
      <Image style={styles.imgStyle} source={{uri: data.url}} />
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.subtitle}>{data.subtitle}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  imgStyle: {
    // width: '90%',
    height: 350,
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  title: {
    position: 'absolute',
    top: 20,
    left: 30,
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 18,
    fontWeight: '600',
  },
  subtitle: {
    position: 'absolute',
    top: 50,
    left: 30,
    fontSize: 30,
    fontWeight: '600',
    color: THEME.colors.white,
  },
});
