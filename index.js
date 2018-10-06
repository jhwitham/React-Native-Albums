// Import a library to help create a Component
import React from 'react';
import ReactNative from 'react-native';

// Create a Component
const App = () => {
  return (
    <Text>Some Text</Text>
  );
};

// Render it to the device
ReactNative.AppRegistry.registerComponent('albums', () => App);
