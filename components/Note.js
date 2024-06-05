import { Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { useDeleteNoteMutation } from "../db";

export default class Note {
  /**
   * Class to hold note data
   *
   * @param {string} title - The title of the note.
   * @param {string} content - The text content of the note.
   */
  constructor(title, content) {
    this.title = title || "";
    this.content = content || "";
  }
}

export function delNoteBtn(navigation, note) {
  const [deleteNote] = useDeleteNoteMutation();

  return (
    <TouchableOpacity
      onPress={() => {
        deleteNote(note);
        navigation.navigate("HomePage");
      }}
    >
      {/* wastebasket emoji */}
      <Text style={tw`text-3xl`}>&#128465;</Text>
    </TouchableOpacity>
  );
}
