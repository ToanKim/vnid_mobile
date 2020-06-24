import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {Button} from 'react-native-paper';
import Page from 'src/components/Page';
import MaintainDisplay from 'src/components/MaintainDisplay';

function MaintainScreen() {
    const navigation = useNavigation();
    return (
        <Page loading={false} contentContainerStyle={styles.container}>
            <View style={{height: 500}}>
                <MaintainDisplay />
            </View>
            <Button
                mode="contained"
                labelStyle={{
                    fontSize: 18,
                }}
                contentStyle={{
                    width: '100%',
                    height: 50,
                    justifyContent: 'center',
                }}
                onPress={() => {
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [{name: 'Home'}],
                        }),
                    );
                }}>
                Back to Home
            </Button>
        </Page>
    );
}

export default MaintainScreen;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
