/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {List, Headline, Avatar, useTheme} from 'react-native-paper';
import {View, Text} from 'react-native';

export interface ReviewItem {
    reviewId: string;
    reviewer: string;
    avatarUrl: string;
    content: string;
    rating: string;
    timestamp: string;
}
interface IProps {
    data: ReviewItem[];
}
const Review = (props: IProps) => {
    const {data} = props;
    const {colors} = useTheme();
    return (
        <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Headline style={{marginBottom: 10}}>Customer Reviews</Headline>
            </View>
            <View>
                {data.map((item: any) => (
                    <View key={item.reviewId}>
                        <List.Item
                            title={item.reviewer}
                            description={item.content}
                            descriptionNumberOfLines={10}
                            titleStyle={{
                                fontSize: 20,
                                fontWeight: '500',
                                marginBottom: 10,
                            }}
                            descriptionStyle={{
                                fontSize: 16,
                                color: '#42422C',
                                marginBottom: 15,
                            }}
                            left={() => (
                                <Avatar.Image
                                    size={60}
                                    source={{uri: item.avatarUrl}}
                                    style={{marginRight: 12}}
                                />
                            )}
                        />
                        <View
                            style={{
                                position: 'absolute',
                                right: 0,
                                top: 15,
                            }}>
                            <Text style={{fontSize: 15, fontWeight: '500'}}>
                                {item.rating}/5
                            </Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default React.memo(Review);
