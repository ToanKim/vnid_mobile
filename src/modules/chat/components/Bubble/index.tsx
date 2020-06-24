import React from 'react';
import {StyleSheet} from 'react-native';
import {Image, Text, View} from 'react-native';
export const MyBubble = (text: string, index: number, primary: string) => {
    return (
        <View
            key={index}
            style={{
                ...styles.chatBubble,
                ...styles.user,
                backgroundColor: primary,
            }}>
            <Text
                style={{
                    color: '#fff',
                }}>
                {text.toString()}
            </Text>
        </View>
    );
};

export const OtherBubble = (text: string, index: number, primary: string) => {
    return (
        <View
            key={index}
            style={{
                ...styles.chatBubble,
                ...styles.bot,
                shadowColor: primary,
            }}>
            <Image
                style={styles.botIcon}
                source={require('src/assets/images/icons/chatbot.png')}
            />
            <Text
                style={{
                    ...styles.botText,
                }}>
                {text.toString()}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    chatBubble: {
        borderRadius: 5,
        flex: 1,
        fontSize: 16,

        marginHorizontal: 10,
        marginVertical: 25,
        maxWidth: '75%',
        minWidth: '10%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        position: 'relative',

        shadowOffset: {
            height: 0,
            width: 0,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6.27,

        elevation: 5,
    },
    user: {
        alignSelf: 'flex-end',
        // backgroundColor: '#7DBEC8',
    },

    bot: {
        alignSelf: 'flex-start',
        backgroundColor: '#fbfbfc',
    },

    botText: {
        color: '#2b2e4a',
    },

    botIcon: {
        height: 40,
        width: 40,

        top: -35,
        left: -25,

        position: 'absolute',
        zIndex: 999,
    },
});
