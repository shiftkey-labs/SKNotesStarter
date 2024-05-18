import { useEffect } from "react";
import { View, TextInput } from "react-native";
import tw from "twrnc";

function Note({ navigation, route }) {
  const { data } = route.params;

  useEffect(() => navigation.setOptions({ title: "" }));

  return (
    <View style={tw`w-full h-full bg-gray-900 p-2`}>
      <TextInput
        style={tw`text-white text-lg font-bold mb-4`}
        defaultValue={data.title}
        placeholder="Title"
      />
      <TextInput
        style={tw`text-white text-lg h-full`}
        defaultValue={data.content}
        placeholder="Type something..."
        multiline={true}
      />
    </View>
  );
}

export default Note;
