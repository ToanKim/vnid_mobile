import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SummaryPlugin = (props: any) => {
    let {data} = props;
    data = data[0];
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Review your demand</Text>
            <View style={styles.innerContainer}>
                {Object.keys(data).map(key => {
                    if (!data[key]) {
                        return null;
                    }
                    return (
                        <View key={key} style={styles.itemContainer}>
                            <Text style={styles.itemKey}>{key}</Text>
                            <Text style={styles.itemValue}>
                                {typeof data[key] === 'object'
                                    ? Object.keys(data[key]).reduce(
                                          (curr, next) =>
                                              curr + ' ' + data[key][next],
                                          '',
                                      )
                                    : data[key]}
                            </Text>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        marginVertical: 20,
        width: '90%',
    },
    innerContainer: {
        backgroundColor: '#fbfbfc',
        borderRadius: 4,
        padding: 15,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        borderBottomWidth: 0.5,
        borderBottomColor: '#d1d2de',
        paddingVertical: 5,
    },
    itemKey: {
        color: '#2b2e4a',
        fontSize: 15,
    },
    itemValue: {
        color: '#2b2e4a',
        fontSize: 15,
    },
    title: {
        color: 'rgb(106,108,116)',
        marginVertical: 10,
        fontSize: 20,
    },
});

export default React.memo(SummaryPlugin);
