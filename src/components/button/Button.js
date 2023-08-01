import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './Button.styles';
import {SafeAreaView} from 'react-native';

const Button = ({title, onPress}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Button;
