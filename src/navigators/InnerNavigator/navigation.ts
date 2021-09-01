import { RouteProp as RoutePropBase } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export type ParamList = {
  InnerNavigatorScreenA: undefined | { myparam?: string }
  InnerNavigatorScreenB: undefined
}

export type RouteProp<T extends keyof ParamList = keyof ParamList> = RoutePropBase<ParamList, T>
export type NavigationProp<T extends keyof ParamList = keyof ParamList> = StackNavigationProp<ParamList, T>
