import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

export default function SubmitBtn(props: any) {
    const {colors} = useTheme();
    return (
        <TouchableOpacity
            style={{...styles.container, backgroundColor: colors.primary}}
            onPress={props.onPress}>
            <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        paddingVertical: 10,
        marginVertical: 10,
        width: 100,
        backgroundColor: '#00879C',
        alignItems: 'center',
        borderRadius: 4,
    },
    text: {
        color: '#fbfbfc',
        fontSize: 15,
    },
});
