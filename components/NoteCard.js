import tw from "twrnc";
import { Text, TouchableOpacity } from "react-native";

const Card = ({ note, navigation }) => {
  return (
    <TouchableOpacity
      style={tw`w-1/2 aspect-square mb-1 mr-1 bg-white rounded-lg p-4 bg-black flex items-center justify-center`}
      onPress={() => navigation.navigate("Note", { data: note })}
    >
      <Text style={tw`text-center text-white font-bold`}>{note.title}</Text>
      <Text style={tw`text-center text-white`}>{note.content}</Text>
    </TouchableOpacity>
  );
};

export default Card;
