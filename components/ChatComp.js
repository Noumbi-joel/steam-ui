import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import colors from '../assets/common/colors';

//icons
import { Entypo } from '@expo/vector-icons';

const ChatComp = ({pic, name, sms, date, nbMsg, isMe, hasPrice, price, bestSeller, truePrice, reduction, os, osImg}) => {
  return (
      <TouchableOpacity style={styles.container}>
          <View style={styles.subContainer}>
              <View style={styles.imageContainer}>
                <Image source={pic ? pic:null} />
              <View style={{marginLeft: 10}}>
                <Text style={{color: "white"}}>{name}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={osImg} />
                    {os ?
                        <Text style={{color: colors.transparent, marginLeft: 5}}>{os}</Text>
                            :
                        <Text style={{color: colors.transparent}}>{isMe ?`You: ${sms} ${date}`:`${sms }${date}`} </Text>
                    }
                </View>
              </View>
              </View>
                {!hasPrice ? 
                    <View style={nbMsg > 0 ? styles.msgContainer:styles.msgContainerWithoutBg}>
                          {nbMsg > 0 ? <Text style={{color: colors.white}}>{nbMsg}</Text>:<Entypo name="dot-single" size={24} color={colors.white} /> }
                    </View>
                    :
                    <View style={{flexDirection: 'row'}}>
                        {bestSeller ?
                                <View>
                                    <Text style={{color: colors.transparent, textDecorationLine: "line-through"}}>${truePrice}</Text>
                                </View> 
                                : null
                        }                            
                        <View style={{flexDirection: 'column', marginLeft: 5}}>
                        <Text style={{color: colors.white, marginLeft: 5}}>${price}</Text>
                            {reduction ? 
                                <View style={{backgroundColor: colors.green, marginTop: 2, width: 40, height: 22, borderRadius: 5,  alignItems: 'center', justifyContent: 'center'}}>
                                    <Text style={{color: colors.white}}>-{reduction}%</Text>
                                </View>
                                : null
                            }
                        </View>
                    </View>
                }
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
