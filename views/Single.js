import React from 'react';
import {StyleSheet, SafeAreaView, Text, Image} from 'react-native';
import route from 'color-convert/route';
import {uploadsUrl} from '../utile/variables';
import PropTypes from 'prop-types';

const Single = () => {
  const {file} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{uri: uploadsUrl.file.filename}}
        style={{width: '90%', hight: '70%'}}
        resizeMode="contain"
      />
      <Text>{file.title}</Text>
      <Text>{file.description}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});

Single.propTypes = {
  route: PropTypes.object,
};

export default Single;
