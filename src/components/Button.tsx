import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { CustomText as Text } from '../components/CustomText';
import { commonStyles } from '../styles/common';

type Props = {
  text: string;
  onPress: () => void;
  isDisabled?: boolean;
};

function Button({ text, onPress, isDisabled }: Readonly<Props>) {
  return (
    <Pressable
      style={[
        styles.nextButton,
        { backgroundColor: isDisabled ? '#C6C6C6' : '#FF9432' },
      ]}
      disabled={isDisabled}
      onPress={onPress}>
      <Text style={[styles.nextText, commonStyles.fontBold]}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  nextButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16.5,
    borderRadius: 11,
  },
  nextText: {
    color: '#FFFFFF',
  },
});

export default Button;
