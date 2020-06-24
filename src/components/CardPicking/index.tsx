import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';

interface IProps {
    index: number;
    toggleCard: (index: number) => any;
    topic: {
        title: string;
        img: string;
        choose: boolean;
    };
}

export default function CardPicking(props: IProps) {
    const {index, toggleCard, topic} = props;
    const {colors} = useTheme();
    let containerStyle = {...styles.container};
    let textStyle = {...styles.text};

    if (topic.choose) {
        textStyle = {...textStyle, color: colors.primary};
        containerStyle = {
            ...containerStyle,
            borderColor: colors.primary,
            borderWidth: 3,
        };
    }
    const onHandlePress = () => {
        toggleCard(index);
    };
    return (
        <TouchableOpacity onPress={onHandlePress}>
            <View style={containerStyle}>
                <Image
                    style={styles.image}
                    source={
                        typeof topic.img === 'string'
                            ? {uri: topic.img}
                            : topic.img
                    }
                />
                <Text style={textStyle}>{topic.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 120,
        width: 120,

        backgroundColor: '#fbfbfc',
        borderRadius: 10,
        shadowColor: '#2b2e4a',
        shadowOffset: {
            height: 2,
            width: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    image: {
        height: 50,
        width: 50,
    },

    text: {
        fontWeight: 'bold',
        marginTop: 10,
    },
});
