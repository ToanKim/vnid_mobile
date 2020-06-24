import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Paragraph, Title, useTheme} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

export default function CardResult(props: any) {
    const {roundness} = useTheme();
    const navigation = useNavigation();

    return (
        <View style={styles.card__shadow}>
            <Card
                onPress={() => navigation.navigate('PackageDetail')}
                style={{...styles.card__container, borderRadius: roundness}}>
                <Card.Content>
                    <Title>Search chatbot</Title>
                    <Paragraph>University of Queensland</Paragraph>
                </Card.Content>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    card__shadow: {
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
        marginRight: 20,
        minHeight: 40,
        overflow: 'hidden',
        backgroundColor: '#fff',
    },
    card__img: {
        height: 30,
        width: 100,
        resizeMode: 'contain',
    },
});
