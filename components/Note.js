import { useEffect } from "react";
import { View, Text } from "react-native";
import tw from "twrnc";

function Note({ navigation, route }) {
  const { data } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: "Notes" });
  });

  return (
    <View style={tw``}>
      <Text style={tw`text-lg font-bold`}>{data.title}</Text>
      <Text style={tw`text-lg`}>{data.content}</Text>
    </View>
  );
}

export default Note;
