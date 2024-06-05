import { useEffect, useState } from "react";
import { View, TextInput } from "react-native";
import tw from "twrnc";
import { useDeleteNoteMutation, useUpdateNoteMutation } from "../db";
import DeleteButton from "./DeleteButton";

function NoteScreen({ navigation, route }) {
  const [data, setData] = useState(route.params.data);
  const [deleteNote] = useDeleteNoteMutation();
  const [updateNote] = useUpdateNoteMutation();

  // update note in DB as it is modified
  useEffect(() => {
    updateNote(data);
    navigation.setOptions({
      headerRight: () => <DeleteButton navigation={navigation} note={data} />,
    });
  }, [data]);

  // remove the note if it is empty when leaving edit screen
  useEffect(() => {
    navigation.addListener("beforeRemove", (_event) => {
      updateNote(data);
      if (data.title === "" && data.content === "") {
        deleteNote(data);
      }
    });
  }, [navigation]);

  return (
    <View
      style={tw`w-full h-full bg-gray-900 p-2`}
      onLayout={() => this.input.focus()}
    >
      <TextInput
        style={tw`text-white text-lg font-bold mb-4`}
        placeholderTextColor="gray"
        placeholder="Title"
        defaultValue={data.title}
        onChangeText={(text) => setData({ ...data, title: text })}
      />
      <TextInput
        style={tw`text-white text-lg h-full`}
        placeholderTextColor="gray"
        placeholder="Type something..."
        defaultValue={data.content}
        multiline={true}
        onChangeText={(text) => setData({ ...data, content: text })}
        ref={(input) => {
          this.input = input;
        }}
      />
    </View>
  );
}

export default NoteScreen;
