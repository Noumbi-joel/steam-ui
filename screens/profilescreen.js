import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';

//colors
import colors from "../assets/common/colors"

//components
import HorizontalBtn from "../components/HorizontalBtn"
import Sweet from '../components/Sweet';

const ProfileScreen = () => {
    const listNames = ["all", "screenshots", "artwork", "workshop"];
    return (
        <View style={styles.container}>
            <View style={styles.headerText}>
                <Text style={{color: colors.transparent}}>Community and official content for all games</Text> 
                <Text style={{color: colors.transparent}}>and software on Steam</Text> 
            </View>
            <View style={{flexDirection: 'row'}}>
                <HorizontalBtn hasIcon size={50} />
                <ScrollView horizontal>
                    {
                        listNames.map(
                            (item, index) => {
                                if(item == "all"){
                                    return <HorizontalBtn size={50} key={index} title={item} />
                                }
                                return <HorizontalBtn size={100} key={index} title={item} />
                            }
                        )
                    }
                </ScrollView>
            </View>
            <ScrollView>
                <Sweet />
                <Sweet />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headerText: {
        marginLeft: 10
    },
    container: {
        flex: 1,
        backgroundColor: colors.lightBlack,
        height: 110,
        paddingTop: 2,
    }
});

export default ProfileScreen;
