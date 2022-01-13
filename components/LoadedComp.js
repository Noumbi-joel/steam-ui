import React from 'react'
import { View, StyleSheet, Text } from 'react-native'


const LoadedComp = () => {
    return (
        <View style={styles.container}>
            <View style={styles.decoloredView}>
                <View style={styles.blueView}>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
    },
    blueView: {
        backgroundColor: "#31bcfc",  
        width: 115
    },
    decoloredView: {
        backgroundColor: "#1c202c",
        width: 160,
        height: 7,
        flexDirection: "row",
    }
})

export default LoadedComp;
