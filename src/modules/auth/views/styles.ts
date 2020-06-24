import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    title: {
        fontSize: 35,
        fontWeight: '700',
        marginBottom: 20,
        alignSelf: 'flex-start',
        color: '#383b41',
    },

    input: {
        width: '100%',
        marginVertical: 20,
    },

    normalText: {
        color: '#696464',
        fontSize: 18,
        fontWeight: 'normal',
        marginVertical: 15,
    },
    linkText: {
        fontSize: 15,
        marginLeft: 3,
    },

    // For button
    buttonStyle: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
    },
    buttonContainer: {
        marginTop: 35,
        width: '100%',
    },
    socialButton: {
        width: '100%',
    },
    socialIcon: {
        color: '#74B6C1',
    },
    socialFont: {
        color: '#74B6C1',
    },
    errorText: {
        color: 'red',
    },
});
