import { NavigationContainer } from '@react-navigation/native';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import 'react-native-reanimated';
import { Provider } from 'react-redux';
import tw, { useDeviceContext } from 'twrnc';
import { store } from './store';

//This is the note object. Can be added dynamically
const Note = ({item}) => {
  return (
    <View style = {[tw`w-1/3 aspect-square mb-1 mr-1 rounded-lg bg-purple-400`]}>
      <Text>{item.note}</Text>
    </View>
  )
}

const generateData = (count) => Array.from({length : count}, (_, i) => ({id : (i + 1).toString(), note : "Lorem ipsum dolor sit amet"}));
const data = generateData(20);

const Stack = createNativeStackNavigator();

function HomeScreen({navigation}){
  return(
    <FlatList
            data = {data}
            keyExtractor = {(item) => item.id}
            renderItem = {({item}) => <Note item={item}/>}
            numColumns = {3}
            contentContainerStyle={tw`p-4`}
    />
  )
}

function App() {
  useDeviceContext(tw);
  return (
    <Provider store={store}>
      <SafeAreaView>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Details" component={DetailsScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  )
}

export default App;
