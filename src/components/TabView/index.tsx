import React, {useRef} from 'react';
import {View, Text, StyleSheet, StyleProp} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
export interface SingleTab {
    key: number;
    tab: string;
}

export interface SingleTabProps {
    tab: string;
    isActive: boolean;
    onPress: any;
    activeTabStyle?: StyleProp<any>;
    tabStyle?: StyleProp<any>;
    textStyle?: StyleProp<any>;
}
export interface TabViewProps {
    tabList: SingleTab[];
    activeTabKey: number;
    onTabChange: (key: number) => void;
    children: Element;
    loading: boolean;
}

export interface TabListProps {
    onTabChange: (key: number) => void;
    tabList: SingleTab[];
    activeTabKey: number;
}

const SingleTab = (props: SingleTabProps) => {
    const {
        tab,
        onPress,
        isActive,
        tabStyle,
        activeTabStyle = styles.activeTab,
        textStyle,
    } = props;
    const style = isActive ? activeTabStyle : tabStyle;
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={style}>
                <Text
                    style={
                        textStyle || {
                            fontSize: 18,
                            textTransform: 'capitalize',
                        }
                    }>
                    {tab}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const TabList = (props: TabListProps) => {
    const {onTabChange, tabList, activeTabKey} = props;
    const carouselRef = useRef();
    return (
        <View>
            <Carousel
                data={tabList}
                removeClippedSubviews={false}
                sliderWidth={700}
                itemWidth={100}
                ref={(ref: any) => (carouselRef.current = ref)}
                activeSlideAlignment={'start'}
                firstItem={0}
                onSnapToItem={(index: number) => onTabChange(index)}
                renderItem={({item}) => (
                    <SingleTab
                        key={item.key}
                        isActive={activeTabKey === item.key}
                        onPress={() => {
                            onTabChange(item.key);
                            carouselRef.current.snapToItem(item.key);
                        }}
                        {...item}
                    />
                )}
            />
        </View>
    );
};

const TabView = (props: TabViewProps) => {
    const {loading = false, children, ...TabProps} = props;
    return (
        <View style={{width: '100%'}}>
            <View style={{width: '100%', marginBottom: 20}}>
                <TabList {...TabProps} />
            </View>
            <View style={{flex: 1, height: '100%'}}>{children}</View>
        </View>
    );
};

export default React.memo(TabView);
