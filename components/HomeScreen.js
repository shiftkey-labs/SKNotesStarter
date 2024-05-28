import { useEffect, useState } from "react";
import tw from "twrnc";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import MasonryList from "@react-native-seoul/masonry-list";
import Card from "./NoteCard";
import Note from "./Note";

const generateData = (count) =>
  Array.from(
    { length: count },
    (_, i) =>
      new Note(
        `Note ${i + 1}`,
        `These are the contents of Note ${
          i + 1
        }. There isn't much here for now, but we'll get there eventually.`
      )
  );

function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(generateData(16));
  }, []);

  const renderItem = ({ item, idx }) => (
    <Card note={item} navigation={navigation} />
  );

  return (
    <View style={tw`w-full h-full bg-gray-800`}>
      {/* Search Bar */}
      <View style={tw`p-1.5 bg-gray-900`}>
        <TextInput
          style={tw`h-10 px-2 bg-gray-700 text-white rounded-lg`}
          placeholderTextColor="white"
          placeholder="Search"
        />
      </View>
      {/* Notes Grid */}
      <MasonryList
        style={tw`w-full h-full bg-gray-800`}
        data={data}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        onEndReachedThreshold={0.1}
      />
      {/* Add Note Button */}
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("NotePage", {
            data: new Note(),
          })
        }
        style={tw`bg-blue-500 rounded-full absolute bottom-[5%] right-8 mx-auto items-center flex-1 justify-center w-12 h-12`}
      >
        <Text style={tw`text-white text-center text-3xl mt--1`}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
