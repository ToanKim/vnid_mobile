import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Card, Title, Paragraph, Caption} from 'react-native-paper';
import useAsyncFn from 'react-use/lib/useAsyncFn';
import SearchBar from 'src/components/SearchBar';
import styles from './styles';
import SearchService from '../services';
import Page from 'src/components/Page';
import {useEffect} from 'react';

function Search() {
    const [query, setQuery] = useState('');
    const navigation = useNavigation();
    const [list, onSearch] = useAsyncFn(() => {
        return SearchService.search(query);
    }, [query]);

    useEffect(() => {
        onSearch();
    }, []);

    return (
        <Page loading={list.loading} contentContainerStyle={styles.container}>
            <Text style={styles.header}>Search</Text>
            <SearchBar
                placeholder="What are you thinking?"
                value={query}
                onChangeText={(text: string) => {
                    setQuery(text);
                }}
                onIconPress={onSearch}
            />
            <View style={styles.content}>
                {/* <Meta /> */}
                <Caption style={styles.result__meta}>
                    {list.value?.length || 0} relevent results
                </Caption>
                {list.value?.map((result: any) => (
                    <View key={result.name} style={styles.card__shadow}>
                        <Card
                            key={result.id}
                            style={styles.card__container}
                            onPress={() =>
                                navigation.navigate('PackageDetail')
                            }>
                            <Card.Cover
                                source={{
                                    uri: 'https://picsum.photos/700',
                                }}
                            />
                            <Card.Content style={{marginTop: 5}}>
                                <Title>{result.name}</Title>
                                <Paragraph>{result.description}</Paragraph>
                                <Caption>{result.provider}</Caption>
                            </Card.Content>
                        </Card>
                    </View>
                ))}
            </View>
        </Page>
    );
}

export default Search;
