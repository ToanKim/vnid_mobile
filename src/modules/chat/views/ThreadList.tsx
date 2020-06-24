import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ChatItem from '../components/ChatItem';
import {useTheme} from 'react-native-paper';
import useAsync from 'react-use/lib/useAsync';
import ChatService, {IThread} from '../service';
import Page from 'src/components/Page';

const ThreadList = () => {
    const theme = useTheme();
    const list = useAsync(() => ChatService.getThreads());
    return (
        <Page loading={false} styles={{...styles.container}}>
            <Text style={{...styles.header}}>Messenger</Text>
            {list.value?.map((item: IThread) => (
                <ChatItem
                    key={item.threadId}
                    fontStyle={{color: theme.colors.text, fontSize: 16}}
                    data={item}
                />
            ))}
        </Page>
    );
};

export default React.memo(ThreadList);

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingTop: 50,
    },
    header: {
        marginBottom: 10,
        fontSize: 25,
        fontWeight: '700',
        color: '#2c2e3d',
        marginVertical: 20,
        letterSpacing: 1,
    },
    subHeader: {
        color: '#74B6C1',
        marginVertical: 10,
    },
});
