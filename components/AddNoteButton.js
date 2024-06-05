import tw from "twrnc";
import { TouchableOpacity, Text } from "react-native";

function AddNoteButton({ onPress }) {
  return (
    <TouchableOpacity
      onPress={() => onPress({ title: "", content: "" })}
      style={tw`bg-blue-500 rounded-full absolute bottom-[5%] right-8 mx-auto items-center flex-1 justify-center w-12 h-12`}
    >
      <Text style={tw`text-white text-center text-3xl mt--1`}>+</Text>
    </TouchableOpacity>
  );
}

export default AddNoteButton;
