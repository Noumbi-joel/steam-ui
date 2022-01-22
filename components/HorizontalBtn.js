import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

//icons
import { Ionicons } from '@expo/vector-icons'; 

import colors from "../assets/common/colors";

const HorizontalBtn = ({title, hasIcon, size}) => {
    return (
        <TouchableOpacity style={[styles.buttonContainer, {width: size}]}>
            {
            hasIcon ? 
                <Ionicons name="search" size={24} color={colors.transparent} />
                    :
                <Text style={styles.buttonText}>{title}</Text>
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: colors.horizontalBtnColor,
        marginTop: 20,
        height: 40,
        marginLeft: 10,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: colors.white,
        fontSize: 14,
        textTransform: 'capitalize'
    }
})

export default HorizontalBtn
