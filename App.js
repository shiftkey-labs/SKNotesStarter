import { Provider } from "react-redux";
import { View } from "react-native";
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

  const navStyle = {
    headerStyle: tw`bg-gray-900 border-none border-0`,
    headerTintColor: "#fff",
    headerTitleStyle: tw`font-bold`,
    headerShadowVisible: false, // gets rid of border on device
  };

  return (
    <Provider store={store}>
      <View style={tw`w-full h-screen bg-gray-900`}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Notes">
            <Stack.Screen options={navStyle} name="Notes" component={Home} />
            <Stack.Screen options={navStyle} name="Note" component={Note} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}

export default App;
