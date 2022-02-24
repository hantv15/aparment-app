import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import tw from 'twrnc';
import TopBarNavigator from '../../navigators/Topbar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import UserDetail from './UserDetail';
import Welcome from '../Welcome';
import MyDrawer from '../../navigators/Drawer'

const User = () => {

  return (
    <SafeAreaProvider>
      <MyDrawer/>
    </SafeAreaProvider>
  )
}

export default User

const styles = StyleSheet.create({})