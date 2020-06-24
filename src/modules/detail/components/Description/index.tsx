import React, {useState} from 'react';
import {Dimensions, Image, Text, View} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import {Headline, useTheme, Chip} from 'react-native-paper';
import styles from './styles';

const {width} = Dimensions.get('window');
function Description(props: any) {
    const {data} = props;
    const {colors} = useTheme();
    function _renderMoreImages(item: any) {
        return (
            <View style={styles.imageWrapper}>
                <Image
                    borderRadius={10}
                    resizeMode="cover"
                    key={item.index}
                    style={styles.image}
                    source={{uri: item.item}}
                />
            </View>
        );
    }
    return (
        <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Headline>{data.name}</Headline>
            </View>
            <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
                {data.meta?.map((item: any) => (
                    <Chip
                        textStyle={{fontWeight: '600'}}
                        key={item.content}
                        style={{marginRight: 10, marginVertical: 6}}
                        icon="information">
                        {item.content}
                    </Chip>
                ))}
            </View>
            <Text style={[styles.content, {color: colors.text}]}>
                {data.content}
            </Text>
            <View>
                <Headline>More Images</Headline>
            </View>
            <Carousel
                data={data.images}
                activeSlideAlignment={'start'}
                // inactiveSlideOpacity = {0.5}
                inactiveSlideScale={0.99}
                sliderWidth={width}
                itemWidth={200}
                itemHeight={30}
                firstItem={0}
                renderItem={_renderMoreImages}
                removeClippedSubviews={false}
                sliderHeight={25}
                containerCustomStyle={{
                    paddingLeft: 5,
                    flexGrow: 0,
                    paddingTop: 30,
                }}
            />
        </View>
    );
}

export default Description;
