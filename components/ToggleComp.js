import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

const ToggleComp = ({titleOne, titleTwo}) => {
    return (
        <View style={styles.container}>
            <View style={styles.toggleComp}> 
                <TouchableOpacity style={styles.buttonOne}>
                    <Text style={styles.textColor}>{titleOne}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonTwo}>
                    <Text style={styles.textColor}>{titleTwo}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: '#1c202c',
        height: 70,
        paddingLeft: 7
    },
    toggleComp: {
        backgroundColor: '#303649',
        height: 35,
        width: 250,
        flexDirection: 'row',
    },
    buttonOne: {
        width: 150,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#1c202c',
        margin: 2,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    buttonTwo: {
        backgroundColor: '#303649',
        width: 150,
        justifyContent: "center",
        alignItems: "center",
    },
    textColor: {
        color: "#fff"
    }
})

export default ToggleComp;
