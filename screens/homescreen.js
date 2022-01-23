import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import {LinearGradient} from 'expo-linear-gradient'
import ToggleComp from '../components/ToggleComp'
import LoadedComp from '../components/LoadedComp'
import RightChevronButton from '../components/RightChevronButton'

const Homescreen = () => {
    return (    
     <LinearGradient style={styles.container} colors={["#808080", "#1c202c", "#1c202c"]} locations={[0, 0.40, 1]}>
         <ToggleComp titleOne="Steam Guard" titleTwo="Confirmations" withBg />
         <Text style={styles.floutedText}>logged in as LittleJacob</Text>
         <Text style={styles.codeText}>N5KCV</Text>
         <LoadedComp />
         <View style={{alignSelf: 'center', marginTop: 20}}>
            <Text style={styles.headerText}>You’ll enter your code each time you enter your</Text>
            <Text style={styles.headerText}>password to sign in to your Steam account.</Text>  
         </View>
         <View style={{alignSelf: 'center', marginTop: 20}}>
            <Text style={styles.bodyText}>Tip: If you don't share your PC, you can select</Text>
            <Text style={styles.bodyText}>Remember my password" when you sign in to </Text>  
            <Text style={styles.bodyText}>the PC client to enter your password and</Text>  
            <Text style={styles.bodyText}>authenticator code less often.</Text>  
         </View>
         <View style={{marginTop: 10}}>
            <RightChevronButton title="Remove Authenticator" />
            <RightChevronButton title="My Recovery Code" />
            <RightChevronButton title="Help" />
         </View>
     </LinearGradient>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
    },
    floutedText: {
        alignSelf: 'center',
        color: "#7b8d9d",
        fontSize: 14,
        fontWeight: "400",
    },
    codeText: {
        color: "#fff",
        fontSize: 55,
        fontWeight: "400",
        letterSpacing: 5.6,
        alignSelf: "center",
    },
    headerText: {
        color: "#d3d3d3", 
        fontWeight: "400"
    },
    bodyText: {
        color: "#2fb4f1", 
        fontWeight: "400"
    }
})

export default Homescreen;
