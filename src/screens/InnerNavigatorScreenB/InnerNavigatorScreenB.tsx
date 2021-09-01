import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationProp } from '~/navigators/InnerNavigator/navigation'

export const InnerNavigatorScreenB = () => {
  const navigation = useNavigation<NavigationProp>()

  return (
    <View style={{ backgroundColor: 'blue', flex: 1 }}>

      <View style={{ margin: 64 }}>
        <Text style={{ fontSize: 32 }}>{'InnerNavigatorScreenB'}</Text>
      </View>

      <View style={{ margin: 32 }}>
        <Button
          title={'go to InnerNavigatorScreenA'}
          onPress={() => {
            navigation.navigate('InnerNavigatorScreenA')
          }}
        />
      </View>

    </View>
  )
}
