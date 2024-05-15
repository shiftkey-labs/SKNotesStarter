import tw, { useDeviceContext } from "twrnc";
import { Image, Text, View } from "react-native";

const Card = ({ item }) => {
  useDeviceContext(tw);

  return (
    <View
      style={tw`w-1/2 aspect-square mb-1 mr-1 bg-white rounded-lg p-4 bg-black flex items-center justify-center`}
    >
      <Image
        source={require("../assets/tesseract.gif")}
        style={tw`h-20 w-20`}
      />
      <Text style={tw`text-center text-white text-2xl`}>
        Tesseract {item.id}
      </Text>
    </View>
  );
};

export default Card;
