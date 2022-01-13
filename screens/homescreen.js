import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import {LinearGradient} from 'expo-linear-gradient'
import ToggleComp from '../components/ToggleComp'
import LoadedComp from '../components/LoadedComp'
import RightChevronButton from '../components/RightChevronButton'

const Homescreen = () => {
    return (    
     <LinearGradient style={styles.container} colors={["rgba(28,32,44,0)", "#1c202c", "#1c202c"]} locations={[0, 0.40, 1]}>
         <ToggleComp titleOne="Steam Guard" titleTwo="Confirmations" />
         <Text style={styles.floutedText}>logged in as LittleJacob</Text>
         <Text style={styles.codeText}>N5KCV</Text>
         <LoadedComp />
         <View style={{alignSelf: 'center', marginTop: 20}}>
            <Text style={{color: "#d3d3d3", fontWeight: "400"}}>You’ll enter your code each time you enter your</Text>
            <Text style={{color: "#d3d3d3", fontWeight: "400"}}>password to sign in to your Steam account.</Text>  
         </View>
         <View style={{alignSelf: 'center', marginTop: 20}}>
            <Text style={{color: "#2fb4f1", fontWeight: "400"}}>Tip: If you don't share your PC, you can select</Text>
            <Text style={{color: "#2fb4f1", fontWeight: "400"}}>Remember my password" when you sign in to </Text>  
            <Text style={{color: "#2fb4f1", fontWeight: "400"}}>the PC client to enter your password and</Text>  
            <Text style={{color: "#2fb4f1", fontWeight: "400"}}>authenticator code less often.</Text>  
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
        color: "#576574",
        fontSize: 14,
        fontWeight: "400",
    },
    codeText: {
        color: "#fff",
        fontSize: 55,
        fontWeight: "400",
        letterSpacing: 5.6,
        alignSelf: "center",
    }
})

export default Homescreen;
