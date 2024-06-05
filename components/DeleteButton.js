import { Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { useDeleteNoteMutation } from "../db";

function DeleteButton({ navigation, note }) {
  const [deleteNote] = useDeleteNoteMutation();

  return (
    <TouchableOpacity
      onPress={() => {
        deleteNote(note);
        navigation.popToTop();
      }}
    >
      {/* wastebasket emoji */}
      <Text style={tw`text-3xl`}>&#128465;</Text>
    </TouchableOpacity>
  );
}

export default DeleteButton;
