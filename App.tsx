import React from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer, LinkingOptions } from '@react-navigation/native'
import { OuterNavigator } from '~/navigators/OuterNavigator'
import { ParamList as ParamListOuterNavigator } from '~/navigators/OuterNavigator/navigation'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParamListOuterNavigator { }
  }
}

const linking: LinkingOptions<ParamListOuterNavigator> = {
  prefixes: [],
  config: {
    screens: {
      OuterNavigatorScreenA: 'outer-a',
      OuterNavigatorScreenB: {
        path: 'outer-b',
        screens: {
          InnerNavigatorScreenA: 'inner-a',
          InnerNavigatorScreenB: 'inner-b',
        },
      },
    },
  },
}

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer
        linking={linking}
      >
        <OuterNavigator />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
});
