import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

//components
import ToggleButtons from "../components/ToggleComp";
import ChatComp from '../components/ChatComp';

//images
import gamerOne from "../assets/images/png/gamer_one.png"
import gamerTwo from "../assets/images/png/gamer_two.png"
import gamerThree from "../assets/images/png/gamer_three.png"
import gamerFour from "../assets/images/png/gamer_four.png"
import gamerFive from "../assets/images/png/gamer_five.png"
import gamerSix from "../assets/images/png/gamer_six.png"
import gamerSeven from "../assets/images/png/gamer_seven.png"
import gamerEight from "../assets/images/png/gamer_eight.png"

const MessageScreen = (props) => {
    return (
        <View style={styles.container}>
            <ToggleButtons titleOne="Open Chats" titleTwo="My friends" />
            <ScrollView>
                <ChatComp pic={gamerOne} name="Mark Dyson" sms="i'm already starting to play" date="14 Jun" nbMsg={1}  />
                <ChatComp pic={gamerTwo} name="Little Jacob" sms="Cyka blyat" date="14 Jun" isMe nbMsg={0} />
                <ChatComp pic={gamerThree} name="Ruster Xoomer" sms="Ok" date="14 Jun" isMe nbMsg={0} />
                <ChatComp pic={gamerFour} name="森派" sms="Погнали в контру!" date="" nbMsg={0}  />
                <ChatComp pic={gamerFive} name="Player" sms="Hello Man!" date="12 Jun" nbMsg={0}  />
                <ChatComp pic={gamerSix} name="DENTIK" sms="Come on, start streamin.." date="11 Jun" isMe nbMsg={0} />
                <ChatComp pic={gamerSeven} name="Jägermeister" sms="No" date=""  />
                <ChatComp pic={gamerEight} name="💎ϟ∑χρŗêssσϟ#=_-#" sms="Ok" date="" nbMsg={0}  />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default MessageScreen;
