import React, {useState, useEffect} from 'react';

//Components
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import ScalableText from 'react-native-text';
import {icons} from '../../constants';

//Style
import {COLORS} from '../../constants';

export default function listSongCard({navigation, popular}) {
  const [popularData, setPopularData] = useState(null);

  useEffect(() => {
    setPopularData(popular);
  });

  return (
    <SafeAreaView style={styles.rowSongCard}>
      <ScrollView contentContainerStyle={{paddingBottom: 20}} horizontal={true}>
        {popular.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.rowTitleCard}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardSubtitle}>{item.artist}</Text>
            </View>
            <View style={styles.plusButton}>
              <icons.AntDesign style={styles.plusIcon} size={20} name="plus" />
            </View>

            <Image
              source={{
                uri: item.bannerImage,
              }}
              style={styles.cardImage}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rowSongCard: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 30,
    paddingLeft: 20,
    overflow: 'hidden',
  },
  rowTitleCard: {
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1,
    bottom: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(46, 46, 56, 0.59)',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 15,
    blurRadius: 10,
    borderRadius: 16,
  },
  card: {
    marginRight: 20,
    height: 220,
    width: 170,
    flexDirection: 'column',
    shadowColor: '#533da6',
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 6,
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  cardTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    color: COLORS.gray,
    fontSize: 10,
  },
  cardImage: {
    borderRadius: 16,
    height: '100%',
    width: '100%',
    zIndex: 0,
  },
  plusButton: {
    height: 35,
    width: 35,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.red,
    position: 'absolute',
    right: -12,
    marginTop: 20,
    marginLeft: 10,
    zIndex: 1,
  },
  plusIcon: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
});
