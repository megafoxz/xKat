import React, {useState, useEffect} from 'react';
//Component
import ScalableText from 'react-native-text';
import {View} from 'react-native';
import ListTrack from '../../../components/common/listTrack4vertical';

//Style
import {topTrack} from './styles';

//Dump data
import trackData from '../../../dump/topTrack';

export default function popular({navigation}) {
  const [popular, setPopular] = useState(null);
  useEffect(() => {
    setPopular(trackData);
  }, []);

  return (
    // Title
    <>
      <View style={topTrack.rowHeader}>
        <View style={topTrack.rowHeaderLeft}>
          <ScalableText adjustsFontSizeToFit style={topTrack.headerTitle}>
            Top tracks
          </ScalableText>
        </View>
      </View>
      {/* Start Horizontal card */}
      <View style={topTrack.rowPopular}>
        <ListTrack tracksData={trackData} />
      </View>
      {/* End Horizontal card */}
    </>
  );
}
