import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { useState } from 'react';
import { FlatList, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import 'react-native-reanimated';
import { Provider } from 'react-redux';
import tw, { useDeviceContext } from 'twrnc';
import { useAddNoteMutation, useDeleteNoteMutation, useFetchNotesQuery } from './db';
import { store } from './store';

//Daniel Flemming

//const generateData = (count) => Array.from({length : count}, (_, i) => ({id : (i + 1).toString(), note : "Note number " + (i+1).toString()}));
//const data = generateData(0);

const Stack = createNativeStackNavigator();



//This is the note object. Can be added dynamically
const Note = ({item, nav}) => {
  return (
    <TouchableOpacity onPress={() => {nav.navigate('Details', {note : item});}} style = {[tw`w-1/3 aspect-square mb-1 mr-1 p-2 rounded-lg bg-[#2F0082]`]}>
      <View>
        <Text style={tw`text-white`}>{item.content}</Text>
      </View>
    </TouchableOpacity>
  );
}

function HomeScreen({route, navigation}){
  
  const [addNote] = useAddNoteMutation();
  const [deleteNote] = useDeleteNoteMutation();
  const {data} = useFetchNotesQuery();
  
  const deleteAllNotes = async () => {
    for(const note of data){
      for(const item of note){
        console.log(item);
        await deleteNote({id : item.id});
      }
    }
  }
  

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
      <TouchableOpacity style={tw`items-center justify-center pb-3`} onPress={async () => {await addNote({content: "New note created!!"}); console.log(data)}}>
        <Image
          source = {require('./assets/add.png')}
          style={tw`w-20 h-17`}
        />
      </TouchableOpacity>
      <TouchableOpacity style={tw`items-center justify-center pb-3`} onPress={async () => {await deleteAllNotes(); console.log(data)}}>
        <Image
          source = {require('./assets/add.png')}
          style={tw`w-10 h-10`}
        />
      </TouchableOpacity>
    </View>
  );
}

function DetailsScreen({route, navigation}){
  
  const {note, updateNote} = route.params;
  
  const [text, setText] = useState(note.note);
  saveNote = () => {
    note.note = text;
    console.log(data);
    updateNote();
  }

  return(
    <ScrollView style={tw`flex-1 bg-[#2F0082] p-2 h-screen`} automaticallyAdjustKeyboardInsets={true}>
      <TextInput style={tw`text-white bg-[#3d00a9] w-full`} multiline={true} onChangeText={text => setText(text)} placeholder='Type here'>{note.note}</TextInput>
      <TouchableOpacity style={tw`items-center pt-5`} onPress={saveNote}>
        <Text style={tw`font-bold text-white`}>SAVE NOTE</Text>
      </TouchableOpacity>
    </ScrollView>
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
            <Stack.Screen name="Details" component={DetailsScreen} options={{ headerTintColor: '#ffffff'}}/>
          </Stack.Navigator>
      </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
