import React from 'react'
import { Platform, Image } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import Homescreen from '../screens/homescreen';
import ProfileScreen from '../screens/profilescreen';
import MessageScreen from '../screens/messagescreen';
import StoreScreen from '../screens/storescreen';
import ParameterScreen from '../screens/parameterscreen';

//icons
import {Ionicons} from "@expo/vector-icons"

//images
import steam from "../assets/images/png/steam.png"

import CustomHeaderButton from "../components/ui/HeaderButton"

//custom header buttons
import {HeaderButtons,Item} from "react-navigation-header-buttons";

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  const platform = Platform.OS === 'ios' ? 'ios' : 'md';
  //const [icon, setIcon] = useState('');
    return (
      <Tab.Navigator screenOptions={
        ({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if(route.name==="Home"){
              iconName = focused ? `${platform}-home`:`${platform}-home-outline`
            }
            else if(route.name==="Profile"){
              iconName = focused ? `${platform}-person`:`${platform}-person-outline`
            }
            else if(route.name==="Messages"){
              iconName = focused ? `${platform}-notifications`:`${platform}-notifications-outline`
            }
            else if(route.name==="Store"){
              iconName = focused ? `${platform}-chevron-back-circle`:`${platform}-chevron-back-circle-outline`
            }
            else if(route.name==="Settings"){
              iconName = focused ? `${platform}-settings`:`${platform}-settings-outline`
            }
            return <Ionicons name={iconName} size={21} color="#4b5664"/>
          },
          tabBarShowLabel: false,
          tabBarStyle: {backgroundColor: "#12141c"},
          headerStyle: {backgroundColor: "#1c202c"},
          headerTintColor: "#fff",
          headerLeft: () => {return <Image style={{marginLeft: 10}} source={steam} />}
        })
      }>
        <Tab.Screen name="Home" component={Homescreen} options={{headerTitle: "Steam Safety"}} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{headerTitle: "Steam Community"}} />
        <Tab.Screen name="Messages" component={MessageScreen} options={{tabBarBadge: "", headerTitle: "Steam Chat", headerRight:() => (<HeaderButtons HeaderButtonComponent={CustomHeaderButton}><Item title="search" iconName="ios-search" /></HeaderButtons>), tabBarBadgeStyle: {marginLeft: -2, backgroundColor: "#31bcfc"}}} />
        <Tab.Screen name="Store" component={StoreScreen} options={{headerTitle: "Steam Store"}}/>
        <Tab.Screen name="Settings" component={ParameterScreen} />
      </Tab.Navigator>
    );
}

/* linear-gradient(-0deg, rgba(28,32,44,0) 0%, #1c202c 33,42%, #1c202c 100% */