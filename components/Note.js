import { useEffect } from "react";
import { View, TextInput } from "react-native";
import tw from "twrnc";

function Note({ navigation, route }) {
  const { data } = route.params;

  useEffect(() => navigation.setOptions({ title: "" }));

  return (
    <View style={tw`w-screen h-screen bg-gray-900 p-2`}>
      <TextInput
        style={tw`text-white text-lg font-bold mb-4`}
        defaultValue={data.title}
        placeholder="Title"
      />
      <TextInput
        style={tw`text-white text-lg`}
        defaultValue={data.content}
        placeholder="Type something..."
      />
    </View>
  );
}

export default Note;
