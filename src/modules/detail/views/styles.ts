import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        paddingBottom: 20,
    },
    imageContainer: {
        width: '100%',
        height: 300,
    },
    infoContainer: {
        zIndex: 2,
        padding: 30,
        marginTop: -30,
        minHeight: height - 300,
        backgroundColor: '#fbfbfc',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingBottom: 120,
    },
    subMenuText: {
        color: '#00879C',
        fontSize: 25,
    },
    contentText: {},
    imageWrapper: {
        borderRadius: 10,
        borderWidth: 0,
        marginRight: 10,
        backgroundColor: '#fbfbfc',
        shadowColor: '#2b2e4a',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
});
