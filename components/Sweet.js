import React from 'react'

import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

//colors
import colors from "../assets/common/colors"

//images
import userLogo from "../assets/images/png/user_logo.png"
import news from "../assets/images/png/news.png"
import eurogamer_sweet_logo from "../assets/images/png/eurogamer_sweet_logo.png"

//Entypo
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Sweet = () => {
    return (
        <View style={styles.tweet}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}} >
                    <View style={styles.tweetHeader}>
                        <Image source={userLogo} />
                        <View style={{marginLeft: 5}}>
                            <Text style={{color: colors.white}}>Eurogamer</Text>
                            <Text style={{color: colors.transparent}}>yesterday 2:20 pm</Text>
                        </View>
                    </View>
                    <Image source={news} />
                </View>
                <Entypo name="dots-three-horizontal" size={24} color={colors.transparent} />
            </View>
            <View style={{alignSelf: 'center', paddingTop: 10}}>
                <Image source={eurogamer_sweet_logo} style={{width: 300, borderRadius: 10}} />

                    <Text style={{color: 'white', marginTop: 10}}>Florida tourist attraction sues Fortnite, seeks</Text>
                    <Text style={{color: 'white'}}>removal of in-game castle</Text>

                <View style={{marginTop: 20}}>
                    <Text style={{color: colors.transparent}}>Coral Castle Museum, a tourist attraction near Miami,</Text>
                    <Text style={{color: colors.transparent}}>is suing Fortnite maker Epic Games for trademark</Text>
                    <Text style={{color: colors.transparent}}>infringement and unfair competition.</Text>
                </View>

                <View style={{backgroundColor: colors.transparent, height: 1, marginVertical: 15}}></View>

                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TouchableOpacity  onPress={() => console.log("like")}>
                                <AntDesign name="like2" size={24} color={colors.green} />
                            </TouchableOpacity>
                            <Text style={{color: colors.green, marginLeft: 5}}>324</Text>
                        </View>

                        <View style={{ marginLeft: 10, flexDirection: 'row', alignItems: 'center'}}>
                            <TouchableOpacity onPress={() => console.log("some comments")}>
                                <FontAwesome5 name="comment-alt" size={18} color={colors.transparent} />
                            </TouchableOpacity>
                            <Text style={{color: colors.transparent, marginLeft: 5}}>14</Text>
                        </View>
                    </View>
                    <TouchableOpacity  onPress={() => console.log("share on social networks")}>
                        <AntDesign name="sharealt" size={24} color={colors.transparent} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tweet: {
        height: 460,
        backgroundColor: colors.lightBlack,
        marginVertical: 20,
        padding: 10
    },
    tweetHeader: {
        flexDirection: "row",
        alignItems: "center"
    }
})

export default Sweet;