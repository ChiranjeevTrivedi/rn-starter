import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { color } from 'react-native-reanimated';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

const ComponentsScreen = function()
{
    const nameVar = "Chiranjeev";
    return (
        <View>
            <Text style = {styles.textStyle}>Getting started with React Native!</Text>
            <Text>My name is {nameVar}</Text>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        textStyle: {
            fontSize: 45
        },
        textStyle1: {
            fontSize: 20
        },
    }
);

export default ComponentsScreen;