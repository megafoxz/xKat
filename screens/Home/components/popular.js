import React, {useState, useEffect} from 'react';
//Component
import ScalableText from 'react-native-text';
import {View} from 'react-native';
import ListPlaylist from '../../../components/common/listSongCard';

//Style
import {popularStyle} from './styles';
import {icons} from '../../../constants';

//Dump data
import popularData from '../../../dump/popular';

export default function popular({navigation}) {
  const [popular, setPopular] = useState(null);
  useEffect(() => {
    setPopular(popularData);
  }, []);

  return (
    // Title
    <>
      <View style={popularStyle.rowHeader}>
        <View style={popularStyle.rowHeaderLeft}>
          <ScalableText adjustsFontSizeToFit style={popularStyle.headerTitle}>
            your
          </ScalableText>
          <ScalableText adjustsFontSizeToFit style={popularStyle.headerTitle}>
            playlist
          </ScalableText>
        </View>
        <ScalableText adjustsFontSizeToFit style={popularStyle.headerSubtitle}>
          960 playlists
        </ScalableText>
      </View>
      {/* Start Horizontal card */}
      <View style={popularStyle.rowPopular}>
        <ListPlaylist popular={popularData} />
      </View>

      {/* End Horizontal card */}
    </>
  );
}
