import { View, TextInput } from "react-native";
import tw from "twrnc";

function NoteScreen({ navigation, route }) {
  const { data } = route.params;

  return (
    <View style={tw`w-full h-full bg-gray-900 p-2`}>
      <TextInput
        style={tw`text-white text-lg font-bold mb-4`}
        placeholderTextColor="gray"
        placeholder="Title"
        defaultValue={data.title}
      />
      <TextInput
        style={tw`text-white text-lg h-full`}
        placeholderTextColor="gray"
        placeholder="Type something..."
        defaultValue={data.content}
        multiline={true}
      />
    </View>
  );
}

export default NoteScreen;
