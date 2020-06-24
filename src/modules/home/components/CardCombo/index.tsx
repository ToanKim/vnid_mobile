import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Paragraph, useTheme} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

export default function CardCombo(props: any) {
    const {data} = props;
    const {roundness} = useTheme();
    const navigation = useNavigation();

    return (
        <View style={styles.card__shadow}>
            <Card
                onPress={() => navigation.navigate('PackageDetail')}
                style={{...styles.card__container, borderRadius: roundness}}>
                <Card.Cover
                    style={styles.card__img}
                    source={{uri: 'https://picsum.photos/700'}}
                />

                <Card.Title title={data.title} subtitle={data.title} />
                <Card.Content>
                    <Paragraph style={styles.card__content}>
                        {data.description}
                    </Paragraph>
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
        minHeight: 300,
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
