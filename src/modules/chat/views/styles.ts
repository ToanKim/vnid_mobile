import {StyleSheet} from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
    },

    innerContainer: {
        // alignItems: 'center',
        // flex: 1,
        // backgroundColor: '#fbfbfc',
        // justifyContent: 'flex-end',
    },

    chatContainer: {
        paddingHorizontal: 15,
        width: '100%',
        flex: 1,
        // paddingTop: 30,
        // paddingBottom: 20,
    },

    inputContainer: {
        backgroundColor: '#fbfbfc',
        borderRadius: 40,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 12,
        marginBottom: 10,
        // padding: 10,
        shadowColor: '#2b2e4a',
        shadowOffset: {
            height: 2,
            width: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 6.27,

        elevation: 5,
        width: '80%',
    },

    input: {
        marginLeft: 10,
        width: '70%',
    },

    chatBubble: {
        borderRadius: 5,
        flex: 1,
        fontSize: 16,

        marginHorizontal: 10,
        marginVertical: 20,
        maxWidth: '75%',
        minWidth: '10%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        position: 'relative',

        shadowColor: '#7DBEC8',
        shadowOffset: {
            height: 0,
            width: 0,
        },
        shadowOpacity: 0.6,
        shadowRadius: 6.27,

        elevation: 5,
        zIndex: 888,
    },
    user: {
        alignSelf: 'flex-end',
        backgroundColor: '#7DBEC8',
    },

    bot: {
        alignSelf: 'flex-start',
        backgroundColor: '#fbfbfc',
    },

    userText: {
        color: '#fbfbfc',
    },

    botText: {
        color: '#2b2e4a',
    },

    botIcon: {
        height: 60,
        width: 60,

        top: -35,
        left: -25,

        position: 'absolute',
        zIndex: 999,
    },
});
