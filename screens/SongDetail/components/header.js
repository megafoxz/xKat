import React, {useState, useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';
import ScalableText from 'react-native-text';

//Style
import {headerStyle} from './styles';
import {icons} from '../../../constants';

export default function header({navigation}) {
  useEffect(() => {}, []);

  return (
    <View style={headerStyle.rowHeader}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <icons.Ionicons
          name="arrow-back"
          size={25}
          style={headerStyle.iconNoti}></icons.Ionicons>
      </TouchableOpacity>

      <View style={headerStyle.rowHeaderRight}>
        <View>
          <ScalableText adjustsFontSizeToFit style={headerStyle.headerTitle}>
            Hello, Yana
          </ScalableText>
          <ScalableText adjustsFontSizeToFit style={headerStyle.headerSubtitle}>
            New York
          </ScalableText>
        </View>
        <View>
          <icons.AntDesign
            name="bells"
            size={25}
            style={headerStyle.iconBell}></icons.AntDesign>
        </View>
      </View>
    </View>
  );
}
