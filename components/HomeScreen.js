import { useEffect, useState } from "react";
import tw from "twrnc";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import MasonryList from "@react-native-seoul/masonry-list";
import { useAddNoteMutation, useSearchNotesQuery } from "../db";
import Card from "./NoteCard";

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
      {/* Search Bar */}
      <View style={tw`p-1.5 bg-gray-900`}>
        <TextInput
          style={tw`h-10 px-2 bg-gray-700 text-white rounded-lg`}
          placeholderTextColor="white"
          placeholder="Search"
          onChangeText={setSearchQuery}
        />
      </View>
      {/* Notes Grid */}
      {searchData ? (
        <MasonryList
          style={tw`w-full h-full bg-gray-800`}
          data={searchData}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          onEndReachedThreshold={0.1}
        />
      ) : (
        <></>
      )}
      {/* Add Note Button */}
      <TouchableOpacity
        onPress={() => addNote({ title: "", content: "" })}
        style={tw`bg-blue-500 rounded-full absolute bottom-[5%] right-8 mx-auto items-center flex-1 justify-center w-12 h-12`}
      >
        <Text style={tw`text-white text-center text-3xl mt--1`}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
