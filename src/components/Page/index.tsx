/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ScrollView, StyleProp} from 'react-native';
import {ActivityIndicator, useTheme} from 'react-native-paper';
import useRotate from 'src/hooks/useRotate';
interface IProps {
    loading: boolean;
    children: Element;
    styles?: StyleProp<any>;
    contentContainerStyle?: StyleProp<any>;
    noScrollView?: boolean;
}
function Page(props: IProps) {
    const {
        loading,
        children,
        styles = {},
        contentContainerStyle = {},
        noScrollView = false,
    } = props;
    const {width, height, onLayout} = useRotate();
    const {colors} = useTheme();
    const style = {
        backgroundColor: colors.onBackground,
        width,
        height,
        ...styles,
    };
    if (loading) {
        return (
            <View
                style={{
                    ...style,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <ActivityIndicator />
            </View>
        );
    }
    if (noScrollView) {
        return (
            <View onLayout={onLayout} style={style}>
                {children}
            </View>
        );
    }
    return (
        <View onLayout={onLayout} style={style}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 80,
                    ...contentContainerStyle,
                }}>
                {children}
            </ScrollView>
        </View>
    );
}

export default React.memo(Page);
