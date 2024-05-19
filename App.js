import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-reanimated';
import { Provider } from 'react-redux';
import tw, { useDeviceContext } from 'twrnc';
import { store } from './store';



const generateData = (count) => Array.from({length : count}, (_, i) => ({id : (i + 1).toString(), note : "Note number " + (i+1).toString()}));
const data = generateData(20);

const Stack = createNativeStackNavigator();

//This is the note object. Can be added dynamically
const Note = ({item, nav}) => {
  return (
    <View style = {[tw`w-1/3 aspect-square mb-1 mr-1 p-2 rounded-lg bg-[#2F0082]`]}>
      <Text style={tw`text-white font-semibold`}>{item.note}</Text>
      <TouchableOpacity onPress={() => {nav.navigate('Details', {noteText : item.note});}}>
        <Text>see more...</Text>
      </TouchableOpacity>
    </View>
  );
}

function HomeScreen({navigation}){
  return(
    <View style={tw`w-full h-screen flex-1 bg-[#1c004f]`}>
      <FlatList
        style={tw`w-full`}
        data = {data}
        keyExtractor = {(item) => item.id}
        renderItem = {({item}) => <Note item={item} nav={navigation}/>}
        numColumns = {3}
        contentContainerStyle={tw`p-4`}
      />
    </View>
  );
}

function DetailsScreen({route, navigation}){
  console.log(route.noteText);
  const {noteText} = route.params;
  return(
    <View style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`text-lg`}>{noteText}</Text>
    </View>
  );
}

function App() {
  useDeviceContext(tw);
  return (
    <Provider store={store}>
      <SafeAreaView style={tw`w-full h-screen`}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerStyle: {backgroundColor : '#120033'}, headerTitleStyle: {color: 'white'} }} initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Details" component={DetailsScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
