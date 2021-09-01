import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { OuterNavigatorScreenA } from '~/screens/OuterNavigatorScreenA'
import { OuterNavigatorScreenB } from '~/screens/OuterNavigatorScreenB'
import { ParamList } from './navigation'

const Stack = createStackNavigator<ParamList>()

export const OuterNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="OuterNavigatorScreenA">
        {() => <OuterNavigatorScreenA />}
      </Stack.Screen>
      <Stack.Screen name="OuterNavigatorScreenB">
        {() => <OuterNavigatorScreenB />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}
