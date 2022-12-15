import React from 'react'
import { Box } from 'native-base'
import { SIZES } from  '../../constants'
import { StyleSheet } from 'react-native'

export default function blank({p ,m, width, children , bg, height, flex}) {
  return (
    <Box 
      p={p ?? 2} 
      m={m ?? 0} 
      width={width ?? "100%"} 
      bg={{...bg}} 
      height= { height ?? "100%" }
      style={styles.container}
      flex={flex ?? 1}
      safeArea
      >
      {children}
    </Box>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})