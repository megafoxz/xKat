import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import {SIZES, images} from '../../constants';
import {NavigationContainer} from '@react-navigation/native';
import {FlatList} from 'native-base';

// Component
import Header from './components/header';
import Container from './components/container';

//Style
import {styles} from './styles';

export default function Screen({route, navigation}) {
  const {item} = route.params;
  const [value, setValue] = useState({
    activeName: 'Home',
  });

  useEffect(() => {
    return () => {
      setValue('Home');
    };
  }, []);

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.container}>
      <View>
        <Header navigation={navigation} />
        <Container data={item} navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}
