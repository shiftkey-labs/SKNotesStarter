import { View, Text } from "react-native";
import tw from "twrnc";

function Note({ navigation, route }) {
  const { note } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: note.title });
  });

  return (
    <View style={tw``}>
      <Text style={tw`text-lg`}>{note.content}</Text>
    </View>
  );
}

export default Note;
