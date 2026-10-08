import { Image, TextInput, View} from 'react-native'
import {icons} from "@/constants/icons";

interface Props {
  placeholder: string;
  value: string;
  handleSearch?: () => void;
  onChangeText?: (value: string) => void;
}

const SearchBar = ({placeholder, handleSearch, onChangeText}: Props) => {
  return (
    <View className = "flex-row items-center py-3 pe-4">
      <Image source={icons.search}
        resizeMode="contain"
        tintColor="#ab8bff"
        className="size-5 me-2" />
      <TextInput
         className = "flex-1 text-white ml-2"
         autoCapitalize="none"
         placeholder= {  placeholder }
         placeholderTextColor = "white"
         onChangeText = { onChangeText }
         onPress = { handleSearch }
      />
    </View>
  )
}

export default SearchBar