import _ from 'lodash';
import React, {useState, useEffect, useCallback} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';
import Carousel from 'react-native-snap-carousel';
import CardPicking from 'src/components/CardPicking';
import SubmitBtn from '../SubmitBtn';
import {CERTIFICATIONs} from 'app/public/mock';
const {width} = Dimensions.get('window');

const FLAG_URL =
    'https://img.favpng.com/18/15/6/country-icon-flag-icon-liberia-icon-png-favpng-EAHpju2WGSs5AnWVH9cFFWBUm.jpg';

export default function CarouselPlugin(props: any) {
    const {data, onSend, prefix = 'I prefer '} = props;
    const parseList =
        data &&
        data.map((item: string) => ({
            title: item,
            choose: false,
            img: FLAG_URL,
        }));
    const [listItem, setListItem] = useState(parseList);
    const [isUsed, markedUse] = useState(false);

    const onPress = useCallback(
        (listItem, onSend) => {
            let text = prefix;
            listItem.forEach(
                (item: any) => (text += item.choose ? item.title + ' ' : ''),
            );
            onSend(text);
            // markedUse(true);
        },
        [prefix],
    );

    useEffect(() => {
        if (isUsed) {
            onPress(listItem, onSend);
        }
    }, [listItem, onPress, isUsed, onSend]);

    if (isUsed) {
        return <View />;
    }

    const toggleCard = (index: number) => {
        const newList = listItem.map((item: any, i: number) => {
            return index === i ? {...item, choose: !item.choose} : {...item};
        });
        setListItem(newList);
        markedUse(true);
    };

    const getCard = item => {
        return (
            <CardPicking
                index={item.index}
                topic={item.item}
                toggleCard={toggleCard}
            />
        );
    };

    return (
        <View>
            <Carousel
                data={listItem}
                activeSlideAlignment={'start'}
                inactiveSlideScale={0.99}
                inactiveSlideOpacity={0.99}
                sliderWidth={width}
                itemWidth={140}
                removeClippedSubviews={false}
                itemHeight={120}
                firstItem={0}
                renderItem={getCard}
                containerCustomStyle={{paddingVertical: 10, paddingLeft: 5}}
            />
            {/* <SubmitBtn onPress={onPress}/> */}
        </View>
    );
}

export function CarouselNSliderPlugin(props: any) {
    function getCard(item: any) {
        return (
            <CardPicking
                index={item.index}
                topic={item.item}
                toggleCard={toggleCard}
            />
        );
    }

    function toggleCard(index: number) {
        const newList = listItem.map((item: any, i: number) =>
            index === i ? {...item, choose: !item.choose} : {...item},
        );
        setListItem(newList);
    }

    function getSlider() {
        function onValueChange(index: number) {
            return (value: any) => {
                const newValues = values.map((item, i) =>
                    index === i ? value : item,
                );
                setValues(newValues);
            };
        }
        const listItemFilter = listItem.filter(
            (item: any) => item.choose === true,
        );
        return listItemFilter.map((item: any) => (
            <View key={item.title}>
                <Text style={styles.titleSlider}>
                    Your {item.title} score: {values[item.index]}
                </Text>
                <Slider
                    value={values[item.index]}
                    onValueChange={_.debounce(onValueChange(item.index), 40)}
                    minimumValue={item.range.min}
                    maximumValue={item.range.max}
                    step={item.range.step}
                    minimumTrackTintColor="#7DBEC8"
                    maximumTrackTintColor="#fbfbfc"
                />
            </View>
        ));
    }
    function onPress() {
        let text = 'I have ';
        listItem.forEach((item: any, index: number) => {
            if (item.choose) {
                text += `${item.title} ${values[index]} `;
            }
        });
        markedUse(true);
        onSend(text);
    }

    const parseList = CERTIFICATIONs.map((item: any, index: number) => {
        return {...item, index, choose: false};
    });
    const {onSend} = props;
    const [listItem, setListItem] = useState(parseList);
    const [values, setValues] = useState(Array(listItem.length).fill(0));
    const [isUsed, markedUse] = useState(false);

    if (isUsed) {
        return <View />;
    }
    return (
        <View>
            <Carousel
                data={listItem}
                activeSlideAlignment={'start'}
                inactiveSlideScale={0.99}
                inactiveSlideOpacity={0.99}
                sliderWidth={width}
                itemWidth={140}
                itemHeight={120}
                firstItem={0}
                renderItem={getCard}
                removeClippedSubviews={false}
                containerCustomStyle={{paddingVertical: 10, paddingLeft: 5}}
            />
            {getSlider()}
            <SubmitBtn onPress={onPress} />
        </View>
    );
}

const styles = StyleSheet.create({
    titleSlider: {
        fontSize: 20,
        fontWeight: '400',
        marginVertical: 10,
    },
});
