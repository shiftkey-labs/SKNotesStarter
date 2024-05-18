import { useEffect, useState } from "react";
import tw from "twrnc";
import { Button, View, TextInput } from "react-native";
import MasonryList from "@react-native-seoul/masonry-list";
import Card from "./NoteCard";

const generateData = (count) =>
  Array.from({ length: count }, (_, i) => ({
    id: `${i + 1}`,
    title: `Note ${i + 1}`,
    content: `These are the contents of Note ${
      i + 1
    }. There isn't much here for now, but we'll get there eventually.`,
  }));

function Home({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(generateData(16));
  }, []);

  const renderItem = ({ item, i }) => (
    <Card note={item} navigation={navigation} />
  );

  return (
    <View style={tw`w-full h-screen bg-gray-800`}>
      <View style={tw`p-1.5 bg-gray-900`}>
        <TextInput
          style={tw`text-white h-10 px-2 bg-gray-700 rounded-lg`}
          placeholder="Search"
        />
      </View>
      <MasonryList
        style={tw`w-full h-screen bg-gray-800`}
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        onEndReachedThreshold={0.1}
      />
      <Button
        title="+"
        onPress={() => navigation.navigate("Note")}
        style={tw`absolute bottom-1 right-1 bg-blue-900`}
      />
    </View>
  );
}

export default Home;
