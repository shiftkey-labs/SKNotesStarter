import { SafeAreaView, Text, Image } from "react-native";
import tw, { useDeviceContext } from "twrnc";
import { Provider } from "react-redux";
import { store } from "./store";
import "react-native-reanimated";

function App() {
  useDeviceContext(tw);

  return (
    <Provider store={store}>
      <SafeAreaView
        style={tw`w-full h-screen bg-black flex items-center justify-center`}
      >
        <Image source={require("./assets/tesseract.gif")} style={tw`mb-8`} />
        <Text style={tw`text-center text-white text-2xl`}>4D Hypercube</Text>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
