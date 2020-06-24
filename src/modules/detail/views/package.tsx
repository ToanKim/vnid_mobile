import React, {useState} from 'react';
import {Dimensions, Image, ScrollView, Text, View} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import Description from '../components/Description';
import Review from '../components/Review';
import TabView, {SingleTab} from 'src/components/TabView';
import Page from 'src/components/Page';
import {useRoute} from '@react-navigation/native';
import styles from './styles';
import DetailService from '../services';
import {useTheme} from 'react-native-paper';
import useAsync from 'react-use/lib/useAsync';
import MaintainDisplay from 'src/components/MaintainDisplay';
export enum VIEW_TYPE {
    ABOUT,
    REVIEW,
    COUNSELOR,
    RELATE,
}

const tabList: SingleTab[] = [
    {
        key: VIEW_TYPE.ABOUT,
        tab: 'about',
    },
    {
        key: VIEW_TYPE.REVIEW,
        tab: 'review',
    },
    {
        key: VIEW_TYPE.COUNSELOR,
        tab: 'counselor',
    },
    {
        key: VIEW_TYPE.RELATE,
        tab: 'relate',
    },
];
function PackageDetail() {
    const {params = {}} = useRoute<any>();
    const {type = 'school', id = 0} = params;
    const detail = useAsync(() => DetailService.getDetail(type, id));
    const [activeTab, setTab] = useState(VIEW_TYPE.ABOUT);
    const content = {
        [VIEW_TYPE.ABOUT]: <Description data={detail.value?.description} />,
        [VIEW_TYPE.COUNSELOR]: (
                <MaintainDisplay />
        ),
        [VIEW_TYPE.REVIEW]: <Review data={detail.value?.reviews} />,
        [VIEW_TYPE.RELATE]: (
                <MaintainDisplay />
        ),
    };

    return (
        <Page loading={detail.loading}>
            <Image
                style={styles.imageContainer}
                source={{
                    uri:
                        'https://images.shiksha.com/mediadata/images/1533031647phpL6RaED.png',
                }}
            />
            <View style={styles.infoContainer}>
                <TabView
                    tabList={tabList}
                    activeTabKey={activeTab}
                    onTabChange={(key: number) => setTab(key)}
                    loading={detail.loading}>
                    {content[activeTab]}
                </TabView>
            </View>
        </Page>
    );
}
export default React.memo(PackageDetail);
