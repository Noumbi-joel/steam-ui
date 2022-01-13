import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import {Entypo} from "@expo/vector-icons"

const RightChevronButton = ({title}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.textStyle}>{title}</Text>
                <Entypo name="chevron-thin-right" color="#fff" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
    },
    buttonContainer: {
        width: 250,
        height: 38,
        backgroundColor: '#202532',
        marginVertical: 0.7,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    textStyle: {
        color: 'white',
    }
})

export default RightChevronButton
