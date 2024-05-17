import { useEffect, useState } from "react";
import tw from "twrnc";
import { View } from "react-native";
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
    <View style={tw`flex items-center justify-center`}>
      <MasonryList
        style={tw`w-full h-screen`}
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
}

export default Home;
