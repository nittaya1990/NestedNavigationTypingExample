import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Button } from 'react-native'

export const OuterNavigatorScreenA = () => {
  const navigation = useNavigation()

  return (
    <View style={{ backgroundColor: 'red', flex: 1 }}>

      <View style={{ margin: 64 }}>
        <Text style={{ fontSize: 32 }}>{'OuterNavigatorScreenA'}</Text>
      </View>

      <View style={{ margin: 32 }}>
        <Button
          title={'go to OuterNavigatorScreenB with state=undefined'}
          onPress={() => {
            navigation.navigate('OuterNavigatorScreenB', {
              state: undefined,
            })
          }}
        />
      </View>

      <View style={{ margin: 32 }}>
        <Button
          title={'go to OuterNavigatorScreenB with screen=InnerNavigatorScreenB'}
          onPress={() => {
            navigation.navigate('OuterNavigatorScreenB', {
              screen: 'InnerNavigatorScreenB',
            })
          }}
        />
      </View>

    </View>
  )
}
