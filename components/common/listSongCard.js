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

export default function listSongCard({navigation}) {
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.rowSongCard}>
      <ScrollView horizontal={true}>
        <View style={styles.card}>
          <View style={styles.rowTitleCard}>
            <Text style={styles.cardTitle}>Anti Hero</Text>
            <Text style={styles.cardSubtitle}>Anti Hero</Text>
          </View>
          <View style={styles.plusButton}>
            <icons.AntDesign style={styles.plusIcon} size={20} name="plus" />
          </View>

          <Image
            source={{
              uri: 'https://m.media-amazon.com/images/M/MV5BNDM0Y2VhZTYtNzMxOC00ZjgxLWI0NWQtNDRlOThmMDFiZTc5XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg',
            }}
            style={styles.cardImage}
          />
        </View>
        <View style={styles.card}>
          <View style={styles.rowTitleCard}>
            <Text style={styles.cardTitle}>Anti Hero</Text>
            <Text style={styles.cardSubtitle}>Anti Hero</Text>
          </View>
          <View style={styles.plusButton}>
            <icons.AntDesign style={styles.plusIcon} size={20} name="plus" />
          </View>
          <Image
            source={{
              uri: 'https://m.media-amazon.com/images/M/MV5BNDM0Y2VhZTYtNzMxOC00ZjgxLWI0NWQtNDRlOThmMDFiZTc5XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg',
            }}
            style={styles.cardImage}
          />
        </View>
        <View style={styles.card}>
          <View style={styles.rowTitleCard}>
            <Text style={styles.cardTitle}>Anti Hero</Text>
            <Text style={styles.cardSubtitle}>Anti Hero</Text>
          </View>
          <View style={styles.plusButton}>
            <icons.AntDesign style={styles.plusIcon} size={20} name="plus" />
          </View>
          <Image
            source={{
              uri: 'https://m.media-amazon.com/images/M/MV5BNDM0Y2VhZTYtNzMxOC00ZjgxLWI0NWQtNDRlOThmMDFiZTc5XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg',
            }}
            style={styles.cardImage}
          />
        </View>
        <View style={styles.card}>
          <View style={styles.rowTitleCard}>
            <Text style={styles.cardTitle}>Anti Hero</Text>
            <Text style={styles.cardSubtitle}>Anti Hero</Text>
          </View>
          <View style={styles.plusButton}>
            <icons.AntDesign style={styles.plusIcon} size={20} name="plus" />
          </View>
          <Image
            source={{
              uri: 'https://m.media-amazon.com/images/M/MV5BNDM0Y2VhZTYtNzMxOC00ZjgxLWI0NWQtNDRlOThmMDFiZTc5XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg',
            }}
            style={styles.cardImage}
          />
        </View>
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
    overflowX: 'hidden',
  },
  rowTitleCard: {
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1,
    bottom: 0,
    width: '100%',
    height: 50,
    position: 'absolute',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'rgba(38, 24, 31, 0.56)',
    paddingLeft: 10,
    paddingRight: 10,
    blurRadius: 10,
  },
  card: {
    marginRight: 20,
    height: 220,
    width: 170,
    flexDirection: 'column',
  },
  cardTitle: {
    color: COLORS.white,
  },
  cardSubtitle: {
    color: COLORS.lightGray,
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
