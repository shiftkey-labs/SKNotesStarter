import tw from "twrnc";
import { Text, TouchableOpacity } from "react-native";

function Card({ navigation, note }) {
  return (
    <TouchableOpacity
      style={tw`m-0.5 rounded-lg p-2 bg-gray-700`}
      onPress={() => navigation.navigate("NotePage", { data: note })}
    >
      <Text style={tw`text-white text-2xl mb-0.5`}>{note.title}</Text>
      <Text style={tw`text-white`}>{note.content}</Text>
    </TouchableOpacity>
  );
}

export default Card;
