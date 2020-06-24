/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {Avatar} from 'react-native-paper';
import CardCombo from '../components/CardCombo';
import CardResult from '../components/CardResult';
import Header from '../components/Header';
import SearchBar from 'src/components/SearchBar';
import CarouselWrapper from '../components/CarouselWrapper';
import Page from 'src/components/Page';
import HomeService from '../service';
import useAsync from 'react-use/lib/useAsync';
import {getHomeCard} from '../utils';
function Home() {
    const [query, setQuery] = useState('');
    const homeResp = useAsync(() => HomeService.getHome());
    const navigation = useNavigation();
    const renderBox = (box: any) => {
        const carouselProps = {
            title: box.title,
            items: box.items,
            carousel: {
                ...getHomeCard(box.title)
            },
        };
        return <CarouselWrapper key={box.title} {...carouselProps} />;
    };
    return (
        <Page loading={false} styles={styles.container}>
            <Header />
            <SearchBar
                placeholder="What are you thinking?"
                value={query}
                onChangeText={(query: string) => {
                    setQuery(query);
                }}
                onIconPress={() => navigation.navigate('Search', {query})}
            />
            {homeResp.value?.boxes?.map((box:any) => renderBox(box))}
        </Page>
    );
}

export default Home;
