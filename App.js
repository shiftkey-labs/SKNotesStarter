import { SafeAreaView, Text, TextInput } from 'react-native';
import tw, { useDeviceContext } from 'twrnc';
import { Provider } from 'react-redux';
import { store } from './store';
import 'react-native-reanimated'; 

import React, { useState } from 'react';

function App() {

  /* 
  ** Created a starting point that is simply a text input the size of the device, 
  ** that lets the user type on the app. Nothing is being saved/stored yet, 
  ** but the user can type in the app, just to get a feel for how to setup 
  ** the sizing and layout of the app.
  */
  return (
    <Provider store={store}>
      <SafeAreaView style={tw`flex-1 bg-yellow-100`}>
      <TextInput
          style={tw`max-w-full mt-4 text-left text-xl border border-gray-500 p-3`}
          placeholder="Search..."
        />
        <TextInput
          style={tw`max-w-full flex-1 mt-4 text-left text-xl border border-gray-500 p-3`}
          multiline
          placeholder="Type your notes here..."
        />
      </SafeAreaView>
    </Provider>
  )
}

export default App;
