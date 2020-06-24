import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        paddingTop: 50,
        alignItems: 'center',
    },
    header: {
        marginBottom: 20,
        fontSize: 25,
        fontWeight: '700',
        color: '#2c2e3d',
        marginVertical: 20,
        letterSpacing: 1,
        marginLeft: 30,
    },
    content: {
        paddingBottom: 20,
        width,
        alignItems: 'center',
    },

    name: {
        color: '#00879C',
        fontSize: 20,
        fontWeight: 'bold',
    },
    result__meta: {
        alignSelf: 'flex-start',
        marginLeft: 30,
        marginBottom: 10,
        fontSize: 16,
        letterSpacing: 1,
    },
    card__shadow: {
        marginVertical: 12,
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.46,
        shadowRadius: 8.68,

        elevation: 7,
    },
    card__container: {
        borderRadius: 14,
        minHeight: 300,
        width: width - 60,
        overflow: 'hidden',
        backgroundColor: '#fff',
    },
    card__content: {
        minHeight: 100,
    },
    card__img: {
        height: 120,
        width: '100%',
        resizeMode: 'cover',
    },
});
