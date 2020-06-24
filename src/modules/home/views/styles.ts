import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    content: {
        width,

        paddingVertical: 50,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,

        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOffset: {
            height: -10,
            width: 0,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 3,
    },
    section: {
        marginVertical: 10,
    },

    headerSection: {
        color: '#00879C',
        fontSize: 14,
        marginTop: 10,
    },

    searchContainer: {
        marginBottom: 20,
        borderRadius: 14,
        alignSelf: 'center',
        width: 320,
        height: 60,
        shadowColor: 'rgba(0,0,0,0.4)',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 7.68,

        elevation: 11,
    },
    searchInput: {
        color: '#00879C',
        flex: 1,
    },
    searchIcon: {
        borderRadius: 0,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
