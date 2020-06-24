import React from 'react';
import {Image, Text, View} from 'react-native';
import {StyleSheet} from 'react-native';

export default () => {
    return (
        <View style={styles.metaContainer}>
            <Image
                source={{
                    uri:
                        'https://cdn1.iconfinder.com/data/icons/weather-429/64/weather_icons_color-14-512.png',
                }}
                style={styles.icon}
            />
            <View style={styles.weatherWrapper}>
                <Text style={styles.weatherText}>32 C in Ho Chi Minh city</Text>
                <Text style={styles.weatherText}>Partly Cloudy</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    metaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 30,
    },

    weatherWrapper: {
        marginLeft: 8,
    },
    weatherText: {
        color: '#2b2e4a',
    },
    icon: {width: 50, height: 50},
});
