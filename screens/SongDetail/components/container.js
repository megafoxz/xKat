import React, {useState, useEffect} from 'react';
//Component
import ScalableText from 'react-native-text';
import {View, Image} from 'react-native';
import MiniPlayer from '../../../components/common/MiniPlayer';
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
    <>
      {/* <Image
        style={containerStyle.image}
        source={{
          uri: data.bannerImage,
        }}
        resizeMode="cover"
      /> */}
      <MiniPlayer></MiniPlayer>
      <View style={containerStyle.songBackground}>
        <View style={containerStyle.functionBlock}>
          <ScalableText style={containerStyle.songTitle}>
            {data.name}
          </ScalableText>
          <ScalableText style={containerStyle.songSubtitle}>
            {data.artist}
          </ScalableText>
        </View>
      </View>
    </>
  );
}
