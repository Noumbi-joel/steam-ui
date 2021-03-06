import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from "@react-navigation/native"

//colors 
import colors from "./assets/common/colors"

//navigator
import {MyTabs} from "./navigation/SteamNavigator"

export default function App() {

  const navTheme = {
    colors: {
      background: colors.tabBg
    },
  };

  return (
    <NavigationContainer theme={navTheme}>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
