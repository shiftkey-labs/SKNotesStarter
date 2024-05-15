import { Provider } from "react-redux";
import { SafeAreaView } from "react-native";
import tw, { useDeviceContext } from "twrnc";
import { store } from "./store";
import "react-native-reanimated";
import Home from "./components/Home";

function App() {
  useDeviceContext(tw);

  return (
    <Provider store={store}>
      <SafeAreaView style={tw`w-full h-screen`}>
        <Home />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
