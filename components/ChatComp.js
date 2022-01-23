import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import colors from '../assets/common/colors';

//icons
import { Entypo } from '@expo/vector-icons';

const ChatComp = ({pic, name, sms, date, nbMsg}) => {
  return (
      <TouchableOpacity style={styles.container}>
          <View style={styles.subContainer}>
              <View style={styles.imageContainer}>
                <Image source={pic ? pic:null} />
              <View style={{marginLeft: 10}}>
                <Text style={{color: "white"}}>{name}</Text>
                <Text style={{color: colors.transparent}}>{sms} {date}</Text>
              </View>
              </View>
              <View style={nbMsg > 0 ? styles.msgContainer:styles.msgContainerWithoutBg}>
                  {nbMsg > 0 ? <Text style={{color: colors.white}}>{nbMsg}</Text>:<Entypo name="dot-single" size={24} color={colors.white} /> }
              </View>
          </View>
      </TouchableOpacity>
    )
}; 

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10, 
        marginVertical: 10
    },
    subContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },  
    imageContainer: {
        flexDirection: "row"
    },
    msgContainer: {
        backgroundColor: colors.blue,
        width:20, 
        height:20, 
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 10
    },
    msgContainerWithoutBg: {
        backgroundColor: null,
        width:20, 
        height:20, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})

export default ChatComp;
