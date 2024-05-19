import { useEffect, useState } from "react";
import tw from "twrnc";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import MasonryList from "@react-native-seoul/masonry-list";
import Card from "./NoteCard";

class Note {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }
}

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
        style={tw`absolute bottom-10 right-5 rounded-full bg-blue-500 py-3 px-4.75`}
        onPress={() =>
          navigation.navigate("Note", {
            data: {},
          })
        }
      >
        <Text style={tw`text-white text-4xl`}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
