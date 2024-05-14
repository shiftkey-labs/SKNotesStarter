import { SafeAreaView, Text, TextInput, Button, View } from 'react-native';
import tw, { useDeviceContext } from 'twrnc';
import { Provider } from 'react-redux';
import { store } from './store';
import 'react-native-reanimated'; 
import MasonryList from '@react-native-seoul/masonry-list';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAddNoteMutation, useFetchNotesQuery, useClearNotesMutation } from './db';
import React, { useState, useEffect } from 'react';


// function HomeScreen({ navigation }) {
//   return (
//     <View style={tw`flex-1 items-center justify-center`}>
//       <Text style={tw`text-lg mb-4`}>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function DetailsScreen() {
//   return (
//     <View style={tw`flex-1 items-center justify-center`}>
//       <Text style={tw`text-lg`}>Details Screen</Text>
//     </View>
//   );
// }


// const Stack = createNativeStackNavigator();

function App() {

  /* 
  ** Created a starting point that is simply a text input the size of the device, 
  ** that lets the user type on the app. Nothing is being saved/stored yet, 
  ** but the user can type in the app, just to get a feel for how to setup 
  ** the sizing and layout of the app.
  */

  useDeviceContext(tw);
  const [data, setData] = useState([]);
  const generateData = (count) => Array.from({ length: count }, (_, i) => ({ id: (i + 1).toString() }));

  useEffect(() => {
    setData(generateData(500));
  }, []);

  const renderItem=({item, i}) => (
    <Text style={[tw`bg-blue-300 text-gray-500 m-1`, { height: Math.floor(Math.random() * 100) + 50 }]}>
      {item.id}
    </Text>
  )

  return (
    <Provider store={store}>
      <SafeAreaView style={tw`flex-1 bg-yellow-100`}>
      {/* <TextInput
          style={tw`max-w-full mt-4 text-left text-xl border border-gray-500 p-3`}
          placeholder="Search..."
        /> */}
        <TextInput
          style={tw`max-w-full flex-1 mt-4 text-left text-xl border border-gray-500 p-3`}
          multiline
          placeholder="Type your notes here..."
          
        />
        {/* <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer> */}
         <MasonryList 
      style={tw`w-full h-screen`}
      data={data}
      keyExtractor={(item) => item.id}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      onEndReachedThreshold={0.1}
    />
      </SafeAreaView>
    </Provider>
  )
}

export default App;
