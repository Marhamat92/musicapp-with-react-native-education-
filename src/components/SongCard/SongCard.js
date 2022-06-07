import React from 'react'
import { View,Text,StyleSheet,SafeAreaView,FlatList,Image } from 'react-native'
import tw from 'twrnc';




function SongCard(props) {

 


  return (
    <View style={tw`ml-2 flex-row items-center`}>
        <Image style={tw`h-20 w-20 border-transparant rounded-full my-4`} source={{uri:props?.song?.imageUrl }} />
         <View style={tw`ml-2`}>
         
          <Text style={tw`font-bold text-black text-lg `}>{props?.song?.title}</Text>
         
          
          <View style={tw`flex-row w-64 items-center justify-between `}>
            <View style={tw`flex-cols`}>
                <Text style={tw`font-medium text-black`}>{props?.song?.artist}</Text>
                <Text style={tw``}>{props?.song?.year}</Text>
            </View>
            <View style={tw`w-20 justify-center`}>
            <Text style={tw`text-xs  p-1 text-center font-bold  border-transparent rounded-sm ${props?.song?.isSoldOut===true && "text-white  bg-red-500"}`}>{props?.song?.isSoldOut===true && "TÜKENDİ" }</Text>
            </View>
            </View>
        </View>
         
    </View>
  )
}

export default SongCard