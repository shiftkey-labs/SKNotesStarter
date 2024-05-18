import { useEffect } from "react";
import { View, Text } from "react-native";
import tw from "twrnc";

function Note({ navigation, route }) {
  const { data } = route.params;

  useEffect(() => navigation.setOptions({ title: "" }));

  return (
    <View style={tw`w-screen h-screen bg-gray-900 p-2`}>
      <Text style={tw`text-white text-lg font-bold mb-4`}>{data.title}</Text>
      <Text style={tw`text-white text-lg`}>{data.content}</Text>
    </View>
  );
}

export default Note;
