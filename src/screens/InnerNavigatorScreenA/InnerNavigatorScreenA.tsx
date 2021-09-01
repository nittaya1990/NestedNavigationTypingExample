import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationProp } from '~/navigators/InnerNavigator/navigation'

export const InnerNavigatorScreenA = () => {
  const navigation = useNavigation<NavigationProp>()

  return (
    <View style={{ backgroundColor: 'green', flex: 1 }}>

      <View style={{ margin: 64 }}>
        <Text style={{ fontSize: 32 }}>{'InnerNavigatorScreenA'}</Text>
      </View>

      <View style={{ margin: 32 }}>
        <Button
          title={'go to InnerNavigatorScreenB'}
          onPress={() => {
            navigation.navigate('InnerNavigatorScreenB')
          }}
        />
      </View>

    </View>
  )
}
