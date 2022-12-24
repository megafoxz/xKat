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
  FlatList,
} from 'react-native';
import ScalableText from 'react-native-text';
import {icons} from '../../constants';

//Style
import {COLORS} from '../../constants';

export default function listSongCard({navigation, tracksData}) {
  const [songCol, setSongCol] = useState(0);

  useEffect(() => {}, []);

  return (
    <SafeAreaView>
      <ScrollView horizontal style={styles.rowSongCard}>
        <FlatList
          scrollEnabled={false}
          numColumns={Math.ceil(tracksData.length / 4)}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={true}
          data={tracksData}
          renderItem={({item, index}) => (
            <View key={index} style={styles.card}>
              <Image
                source={{
                  uri: item.bannerImage,
                }}
                style={styles.trackImage}
              />
              <View style={styles.rowTitleCard}>
                <ScalableText style={styles.cardTitle}>
                  {item.name}
                </ScalableText>
                <ScalableText style={styles.cardSubtitle}>
                  {item.artist}
                </ScalableText>
              </View>
              {/* <View style={styles.plusButton}>
                <icons.AntDesign
                  style={styles.plusIcon}
                  size={20}
                  name="plus"
                />
              </View> */}
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rowSongCard: {
    marginTop: 10,
  },
  rowTitleCard: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  card: {
    height: 60,
    flexDirection: 'row',
    shadowColor: '#533da6',
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 6,
    shadowOpacity: 0.3,
    shadowRadius: 8,
    alignItems: 'center',
    marginBottom: 2,
    marginRight: 20,
    width: 300,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.lynch,
  },
  cardTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    color: COLORS.gray,
    fontSize: 10,
  },
  trackImage: {
    height: 50,
    width: 60,
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
    right: 0,
    marginTop: 20,
    marginLeft: 10,
    zIndex: 1,
  },
  plusIcon: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
});
