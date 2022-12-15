import React, {useState, useEffect} from 'react';
//Component
import ScalableText from 'react-native-text';
import {View} from 'react-native';
import ListSong from '../../../components/common/listSongCard';

//Style
import {popularStyle} from './styles';
import {icons} from '../../../constants';

//Dump data
import {popularData} from '../../../dump/popular';

export default function popular({navigation}) {
  useEffect(() => {}, []);

  return (
    // Title
    <>
      <View style={popularStyle.rowHeader}>
        <View style={popularStyle.rowHeaderLeft}>
          <ScalableText adjustsFontSizeToFit style={popularStyle.headerTitle}>
            most
          </ScalableText>
          <ScalableText adjustsFontSizeToFit style={popularStyle.headerTitle}>
            popular
          </ScalableText>
        </View>
        <ScalableText adjustsFontSizeToFit style={popularStyle.headerSubtitle}>
          960 playlists
        </ScalableText>
      </View>
      {/* Start Horizontal card */}
      <View style={popularStyle.rowPopular}>
        <ListSong />
      </View>

      {/* End Horizontal card */}
    </>
  );
}
