import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme, Title, Card, Paragraph, Caption} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

interface ICardResult {
    data: Result;
    top: boolean;
}

const CardRecommend = (props: ICardResult) => {
    const navigation = useNavigation();

    const {data, top} = props;
    const cardStyle =
        top === true ? {width: '90%', marginBottom: 20} : {width: '80%'};
    return (
        <View key={data.name} style={styles.card__shadow}>
            <Card
                key={data.id}
                style={{...styles.card__container, ...cardStyle}}
                onPress={() => navigation.navigate('PackageDetail')}>
                <Card.Cover
                    style={{height: 120}}
                    source={{
                        uri: 'https://picsum.photos/700',
                    }}
                />
                <Card.Content style={{marginTop: 5}}>
                    <Title style={{fontSize: 15}}>{data.name}</Title>
                    <Paragraph style={{fontSize: 10}}>
                        {data.description}
                    </Paragraph>
                    <Caption>{data.provider}</Caption>
                </Card.Content>
            </Card>
        </View>
    );
};

export interface Result {
    id: string;
    type: string;
    name: string;
    description: string;
    image_URL: string;
    provider: string;
}
interface IProps {
    data: Result[];
}

const ListResult = (props: IProps) => {
    const {data} = props;
    const {colors} = useTheme();

    if (!Array.isArray(data)) {
        return <View />;
    }
    return (
        <View>
            <View>
                {data &&
                    data.map((item, index) => {
                        return (
                            <CardRecommend
                                key={item.id}
                                data={item}
                                top={!index}
                            />
                        );
                    })}
                {data && data.length > 4 && '...'}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    titleWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
    },

    title: {
        color: '#00879C',
    },

    infoName: {
        color: '#2b2e4a',
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 4,
    },
    imageWrapper: {
        height: 100,
        width: '30%',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        overflow: 'hidden',
    },
    metaData: {
        color: '#00879C',
        marginVertical: 2,
    },
    card__shadow: {
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.46,
        shadowRadius: 8.68,

        elevation: 7,
        marginVertical: 10,
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

export default React.memo(ListResult);
