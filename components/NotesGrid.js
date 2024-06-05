import MasonryList from "@react-native-seoul/masonry-list";
import tw from "twrnc";

function NotesGrid({ data, renderItem }) {
  return data ? (
    <MasonryList
      style={tw`w-full h-full bg-gray-800`}
      data={data}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      onEndReachedThreshold={0.1}
    />
  ) : (
    <></>
  );
}

export default NotesGrid;
