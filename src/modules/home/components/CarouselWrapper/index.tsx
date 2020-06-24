/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    Dimensions,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';
const {width} = Dimensions.get('window');

interface IProps {
    carousel: any;
    title: string;
    items: any[];
}

function CarouselWrapper(props: IProps) {
    const {items} = props;
    const {colors} = useTheme();
    const navigation = useNavigation();

    return (
        <View style={styles.section}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 30,
                }}>
                <Text
                    style={{
                        ...styles.headerSection,
                        color: colors.text,
                        textTransform: 'uppercase',
                    }}>
                    {props.title}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                    <Text
                        style={{
                            ...styles.headerSection,
                            color: colors.text,
                            textTransform: 'uppercase',
                        }}>
                        more
                    </Text>
                </TouchableOpacity>
            </View>
            <Carousel
                data={items}
                activeSlideAlignment={'start'}
                inactiveSlideScale={0.99}
                inactiveSlideOpacity={0.99}
                sliderWidth={width}
                removeClippedSubviews={false}
                firstItem={0}
                containerCustomStyle={{
                    paddingVertical: 30,
                    paddingLeft: 30,
                }}
                {...props.carousel}
            />
        </View>
    );
}

export default CarouselWrapper;

const styles = StyleSheet.create({
    section: {
        marginVertical: 10,
    },

    headerSection: {
        color: '#2C2E3D',
        fontSize: 14,
        marginTop: 10,
        letterSpacing: 2,
        fontWeight: '600',
    },
});
