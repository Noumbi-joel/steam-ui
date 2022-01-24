import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

//colors
import colors from "../assets/common/colors"

const ToggleComp = ({titleOne, titleTwo, withBg}) => {
    return (
        <View style={[styles.container, withBg ? styles.container:styles.containerWithoutBg]}>
            <View style={styles.toggleComp}> 
                <TouchableOpacity style={styles.buttonOne}>
                    <Text style={styles.textColor}>{titleOne}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonTwo}>
                    <Text style={[styles.textColor, {color: colors.transparent}]}>{titleTwo}</Text>
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
        paddingLeft: 7,
    },
    containerWithoutBg: {
        justifyContent: 'center',
        backgroundColor: colors.tabBg,
        height: 70,
        paddingLeft: 7,
    },  
    toggleComp: {
        backgroundColor: '#303649',
        height: 35,
        width: 250,
        flexDirection: 'row',
        borderRadius: 10
    },
    buttonOne: {
        width: 150,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#1c202c',
        margin: 2,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderRadius: 10
    },
    buttonTwo: {
        backgroundColor: '#303649',
        width: 150,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    textColor: {
        color: "#fff"
    }
})

export default ToggleComp;
