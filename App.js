import { FlatList, SafeAreaView, Text, View } from 'react-native';
import 'react-native-reanimated';
import { Provider } from 'react-redux';
import tw, { useDeviceContext } from 'twrnc';
import { store } from './store';

//This is the note object. Can be added dynamically
const Note = ({item}) => {
  <View style = {[tw`w-full h-12 mb-1 mr-1 rounded-lg p-4 bg-purple-400`]}>
    <Text>{item.id}</Text>
  </View>
}

const generateData = (count) => Array.from({length : count}, (_, i) => ({id : " Lorem ipsum dolor sit amet " + i.toString()}));
const data = generateData(20);

function App() {
  useDeviceContext(tw);

  

  return (
    <Provider store={store}>
      <SafeAreaView>
        <FlatList
          data = {data}
          keyExtractor = {(item) => item.id}
          renderItem = {({item}) => <Note item={item}/>}
          numColumns = {1}
          contentContainerStyle={tw`p-4`}
        />
      </SafeAreaView>
    </Provider>
  )
}

export default App;
