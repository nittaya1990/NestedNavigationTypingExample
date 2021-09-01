import { NavigatorScreenParams } from "@react-navigation/native";
import { ParamList as ParamListInnerNavigator } from '~/navigators/InnerNavigator/navigation'

export type ParamList = {
  OuterNavigatorScreenA: undefined
  OuterNavigatorScreenB: NavigatorScreenParams<ParamListInnerNavigator>
}
