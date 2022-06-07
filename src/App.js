import React,{useEffect,useState} from 'react'
import { View,Text,StyleSheet,SafeAreaView,FlatList } from 'react-native'
import tw from 'twrnc';
import music_data from './music-data.json';
import SongCard from './components/SongCard';
import SearchBar from './components/SearchBar';
import { LogBox } from 'react-native';

function App() {

const [filteredSongs,setFilteredSongs] = useState(music_data);
  const renderSong = ({item}) =>  <SongCard  song={item}/>
  const renderSeparator = () => <View style={tw`border-b border-gray-300`}/> 

  const handleSearch = (text) =>{
const filteredList = music_data.filter(song => song.title.toLowerCase()
.includes(text.toLowerCase()));

setFilteredSongs(filteredList);


  };

 


  return (
    <SafeAreaView >
      <View style={tw`flex py-2`}>
        <SearchBar onSearch={handleSearch}/>
        <FlatList
          keyExtractor={(item) => item.id}
          data={filteredSongs}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
   </SafeAreaView>
  )
}

export default App

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,}
   
//   })