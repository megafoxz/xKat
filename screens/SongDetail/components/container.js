import React, {useState, useEffect} from 'react';
//Component
import ScalableText from 'react-native-text';
import {View, Image} from 'react-native';
import ListPlaylist from '../../../components/common/listSongCard';

//Style
import {containerStyle} from './styles';
import {icons} from '../../../constants';

//Dump data

export default function SongContainer({data, navigation}) {
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <View style={containerStyle.songBackground}>
      <Image
        style={containerStyle.image}
        source={{
          uri: data.bannerImage,
        }}
        resizeMode="cover"
      />
    </View>
  );
}
