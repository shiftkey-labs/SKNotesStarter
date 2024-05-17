import { Provider } from "react-redux";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import tw, { useDeviceContext } from "twrnc";
import { store } from "./store";
import "react-native-reanimated";
import Home from "./components/Home";
import Note from "./components/Note";

const Stack = createNativeStackNavigator();

function App() {
  useDeviceContext(tw);

  return (
    <Provider store={store}>
      <SafeAreaView style={tw`w-full h-screen`}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Notes">
            <Stack.Screen name="Notes" component={Home} />
            <Stack.Screen name="Note" component={Note} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
