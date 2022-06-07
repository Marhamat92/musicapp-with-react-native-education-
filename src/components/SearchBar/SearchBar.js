import React from 'react'
import {View,TextInput} from 'react-native'
import tw from 'twrnc';

function SearchBar(props) {



  return (
   <View>
       <TextInput
        onChangeText={props.onSearch}
       placeholder='Ara...'
       style={tw `bg-[#eceff1] m-3 rounded-md`}/>
      
   </View>
  )
}

export default SearchBar