import { View, Text, FlatList } from "react-native";
import tw, { useDeviceContext } from "twrnc";
import Card from "./NoteCard";

const generateData = (count) =>
  Array.from({ length: count }, (_, i) => ({ id: (i + 1).toString() }));

const data = generateData(10);

function Home() {
  useDeviceContext(tw);

  return (
    <View style={tw`flex items-center justify-center`}>
      <Text style={tw`text-center text-3xl`}>4D Hypercubes</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card item={item} />}
        numColumns={2}
        contentContainerStyle={tw`p-4`}
      />
    </View>
  );
}

export default Home;
