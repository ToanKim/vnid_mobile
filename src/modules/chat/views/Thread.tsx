import React, {useState, useCallback, useEffect} from 'react';
import {TextInput, TouchableOpacity, View, FlatList, Platform} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import {getPlugin} from '../service';
import {useTheme} from 'react-native-paper';
import useChat from 'src/hooks/useChat';
import {useSelector} from 'react-redux';
import {MyBubble, OtherBubble} from '../components/Bubble';
import Page from 'src/components/Page';

function Thread() {
    let flatList: any;
    const [input, setInput] = useState('');
    const {sub} = useSelector((state: any) => state.authReducers);
    const {currentMessage, send, loading} = useChat();
    const {colors} = useTheme();
    const onSend = useCallback(
        (text: string) => {
            send({body: text});
        },
        [],
    );

    const renderChatBubble = useCallback(
        ({msg, senderId, messageId}) => {
            return (
                <View>
                    {senderId === sub
                        ? MyBubble(msg?.body || '', messageId, colors.primary)
                        : OtherBubble(msg?.body || '', messageId, colors.onBackground)}
                    {msg?.component &&
                        getPlugin(
                            msg?.component,
                            messageId + msg?.component.id,
                            onSend,
                        )}
                </View>
            );
        },
        [onSend, colors, sub],
    );

    useEffect(() => {
        onSend('Hi');
    }, [])

    useEffect(() => {
        return () => {
            console.log('destructor');
            send({body: '/restart'}, true );
        }
    }, [])

    return (
        <Page loading={false} noScrollView={true}
            styles={{justifyContent: 'space-between', flex: 1}}>
            <FlatList
                ref={(el) => (flatList = el)}
                data={currentMessage}
                renderItem={({item}) => renderChatBubble(item)}
                contentContainerStyle={{paddingTop: 20, marginBottom: 50, paddingHorizontal: 15,}}
                style={styles.chatContainer}
                onContentSizeChange={() =>
                    flatList.scrollToEnd({
                        animated: true,
                    })
                }
                keyExtractor={(item: any) => {
                    return String(item.messageId);
                }}
            />

            <View style={styles.inputContainer}>
                <TouchableOpacity>
                    <MaterialIcons
                        name="mic"
                        size={25}
                        color={colors.primary}
                    />
                </TouchableOpacity>
                <TextInput
                    style={{...styles.input, marginVertical: Platform.OS === 'ios' ? 20 : 0,}}
                    placeholder="Input Text..."
                    onChangeText={(text: string) => setInput(text)}
                    value={input}
                />
                <TouchableOpacity onPress={() => {onSend(input); setInput('');}}>
                    <MaterialIcons
                        name="send"
                        size={25}
                        color={colors.primary}
                    />
                </TouchableOpacity>
            </View>
        </Page>
    );
}

export default React.memo(Thread);
