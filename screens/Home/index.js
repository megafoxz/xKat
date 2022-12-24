import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import {SIZES, images} from '../../constants';
import {NavigationContainer} from '@react-navigation/native';
import {FlatList} from 'native-base';

// Component
import Header from './components/header';
import Popular from './components/popular';
import ListTrack from './components/listTrack';
import ListNewTrack from './components/listNewTrack';

//Style
import {styles} from './styles';

export default function Screen({navigation}) {
  const [value, setValue] = useState({
    activeName: 'Home',
  });

  useEffect(() => {
    return () => {
      setValue('Home');
    };
  }, []);

  const Home = ({navigation}) => {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Header navigation={navigation} />
          <Popular navigation={navigation} />
          <ListTrack navigation={navigation} />
          <ListNewTrack navigation={navigation} />
        </ScrollView>
      </SafeAreaView>
    );
  };

  return (
    <>
      <Home />
    </>
  );
}
