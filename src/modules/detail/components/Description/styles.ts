import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fbfbfc',
        flex: 1,
    },
    imageContainer: {
        height: 300,
        width: '100%',
    },
    content: {
        marginVertical: 10,
        fontSize: 18,
        lineHeight: 25,
    },
    infoContainer: {
        backgroundColor: '#fbfbfc',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: '100%',
        marginTop: -30,
        padding: 30,
    },
    subMenuText: {
        color: '#00879C',
        fontSize: 25,
    },

    imageWrapper: {
        backgroundColor: '#fbfbfc',
        borderRadius: 10,
        borderWidth: 0,
        marginRight: 10,

        shadowColor: '#2b2e4a',
        shadowOffset: {
            height: 2,
            width: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },

    image: {
        height: 170,
        width: '100%',
    },

    moreImagesTitle: {
        marginTop: 10,

        color: '#00879C',
        fontSize: 20,
    },
});
