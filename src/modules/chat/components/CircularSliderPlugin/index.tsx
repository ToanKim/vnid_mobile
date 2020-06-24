import _ from 'lodash';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CircleSlider from './CircularSlider/CircleSlider';
import SubmitBtn from '../SubmitBtn';

export default function CircularSliderPlugin(props: any) {
    const [value, setValue] = useState<number>(0);

    function onUpdate(newValue: number) {
        setValue(newValue);
    }
    function deg2point(angle: number) {
        return Math.round((40000 * angle) / 360);
    }
    function _onPress() {
        const text = `less than ${deg2point(value)}`;
        props.onSend(text);
        markedUse(true);
    }

    const [isUsed, markedUse] = useState(false);

    if (isUsed) {
        return <View />;
    }
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.text}>{'$' + deg2point(value)}</Text>
            </View>
            <CircleSlider
                value={90}
                onValueChange={onUpdate}
                strokeWidth={10}
                strokeColor="#EFF0F9"
                btnRadius={15}
                dialWidth={10}
                textColor="#7DBAC8"
                meterColor="#7DBAC8"
            />
            <SubmitBtn onPress={_onPress} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 20,
        position: 'relative',
    },
    innerContainer: {
        alignItems: 'center',
        height: 300,
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
    },
    text: {
        color: 'rgb(80,80,80)',
        fontSize: 30,
        fontWeight: 'bold',
    },
});
