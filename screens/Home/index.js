import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import {SIZES, images} from '../../constants';
import {NavigationContainer} from '@react-navigation/native';
import {FlatList} from 'native-base';

// Component
import Header from './components/header';
import Popular from './components/popular';

//Style
import {styles} from './styles';

export default function Screen({navigation}) {
  const [value, setValue] = useState({
    activeName: 'Home',
  });

  useEffect(() => {
    async function getDefaultPage() {
      console.log(value.activeName);
    }
    getDefaultPage();
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
