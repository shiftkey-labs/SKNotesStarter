import { useEffect, useState } from "react";
import { View } from "react-native";
import tw from "twrnc";
import { useAddNoteMutation, useSearchNotesQuery } from "../db";
import AddNoteButton from "./AddNoteButton";
import Card from "./NoteCard";
import NotesGrid from "./NotesGrid";
import SearchBar from "./SearchBar";

function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: searchData } = useSearchNotesQuery(searchQuery);
  const [addNote, { data: addNoteData }] = useAddNoteMutation();
  useEffect(() => {
    if (addNoteData != undefined) {
      navigation.navigate("NotePage", { data: addNoteData });
    }
  }, [addNoteData]);

  const renderItem = ({ item }) => <Card note={item} navigation={navigation} />;

  return (
    <View style={tw`w-full h-full bg-gray-800`}>
      <SearchBar onChangeText={setSearchQuery} />
      <NotesGrid data={searchData} renderItem={renderItem} />
      <AddNoteButton onPress={addNote} />
    </View>
  );
}

export default HomeScreen;
