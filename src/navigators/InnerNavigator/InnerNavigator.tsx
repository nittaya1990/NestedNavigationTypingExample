import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { InnerNavigatorScreenA } from '~/screens/InnerNavigatorScreenA'
import { InnerNavigatorScreenB } from '~/screens/InnerNavigatorScreenB'
import { ParamList } from './navigation'

const Stack = createStackNavigator<ParamList>()

export const InnerNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="InnerNavigatorScreenA">
        {() => <InnerNavigatorScreenA />}
      </Stack.Screen>
      <Stack.Screen name="InnerNavigatorScreenB">
        {() => <InnerNavigatorScreenB />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}
