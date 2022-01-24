import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'

//images
import gamePreviewOne from "../assets/images/png/game_preview.png";
import gamePreviewTwo from "../assets/images/png/next_game_preview.png";

import gtaFive from "../assets/images/png/gta_five.png";
import battlefield from "../assets/images/png/battlefield.png";
import factorio from "../assets/images/png/factorio.png";
import horizon from "../assets/images/png/horizon.png";
import iphone from "../assets/images/png/iphone.png";
import windows from "../assets/images/png/windows.png";

//components
import HorizontalBtn from "../components/HorizontalBtn";
import ChatComp from "../components/ChatComp";

const StoreScreen = () => {
    const listNames = ["top sellers", "free to play", "early access", "action"];
    return (
        <View style={styles.container}>
            <View style={{flex: 12}}>
                <ScrollView horizontal style={styles.scrollView}>
                    <Image source={gamePreviewOne} style={styles.image} />
                    <Image source={gamePreviewTwo} style={styles.image} />
                </ScrollView>
            </View>
            <View style={{flex: 2}}>
                <ScrollView horizontal contentContainerStyle={styles.scrollView}>
                    {
                        listNames.map(
                            (item, index) => {
                                return <HorizontalBtn size={100} key={index} title={item} />
                            }
                        )
                    }
                </ScrollView>
            </View>
            <View style={{flex:8}}>
                <ScrollView>
                    <ChatComp pic={gtaFive} name="Grand Theft Auto V" os="Windows" osImg={windows}  hasPrice bestSeller truePrice="20" price="10" reduction="50" crossed />
                    <ChatComp pic={battlefield} name="Battlefield 4" os="Windows"  osImg={windows} hasPrice price="35" />
                    <ChatComp pic={factorio} name="Factorio" os="Windows" hasPrice osImg={windows}  price="7" />
                    <ChatComp pic={horizon} name="Horizon Zero Dawn" os="Windows"  osImg={windows} hasPrice price="38" />
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
    },
    image: {
        marginHorizontal: 10,
        marginVertical: 10
    }
})

export default StoreScreen;
