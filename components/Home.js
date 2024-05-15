import { useEffect, useState } from "react";
import tw, { useDeviceContext } from "twrnc";
import { Text, View } from "react-native";
import MasonryList from "@react-native-seoul/masonry-list";
import Card from "./NoteCard";

const generateData = (count) =>
  Array.from({ length: count }, (_, i) => ({ id: (i + 1).toString() }));

function Home() {
  useDeviceContext(tw);

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(generateData(16));
  }, []);

  const renderItem = ({ item, i }) => <Card item={item} />;

  return (
    <View style={tw`flex items-center justify-center`}>
      <Text style={tw`text-center text-3xl`}>4D Hypercubes</Text>
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
