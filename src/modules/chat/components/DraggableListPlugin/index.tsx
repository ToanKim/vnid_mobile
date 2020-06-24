import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import SubmitBtn from '../SubmitBtn';

const DraggableListPlugin = (props: any) => {
    function _renderItem({item, index, drag, isActive}) {
        const styleItem = isActive
            ? {...styles.itemContainer, ...styles.itemContainerActive}
            : styles.itemContainer;
        return (
            <TouchableOpacity
                style={styleItem}
                onLongPress={drag}
                delayLongPress={100}>
                <View style={{flexDirection: 'row'}}>
                    <Image
                        style={{width: 30, height: 30, marginRight: 10}}
                        source={require('src/assets/images/icons/pin.png')}
                    />
                    <Text style={styles.label}>{item.label}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    function _keyExtractor(item: any) {
        return `draggable-item-${item.label}`;
    }
    function _onDragEnd({data}: {data: any}) {
        setItems(data);
    }

    const normalizeItems = props.data.map((d: any, index: number) => ({
        backgroundColor: '#fbfbfc',
        borderRadius: 5,
        key: `${index}`,
        label: d,
    }));
    const [items, setItems] = useState(normalizeItems);

    return (
        <View style={styles.container}>
            <Text style={styles.instructor}>Put a long press and drag</Text>
            <DraggableFlatList
                data={items}
                renderItem={_renderItem}
                keyExtractor={_keyExtractor}
                onDragEnd={_onDragEnd}
            />
            <SubmitBtn />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        // backgroundColor: "rgb(250,250,250)" ,
        marginVertical: 20,
        padding: 20,
        width: '90%',
    },
    instructor: {
        color: 'rgb(80,80,80)',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    itemContainer: {
        alignItems: 'center',
        backgroundColor: '#fbfbfc',
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        marginHorizontal: 5,
        marginVertical: 10,
        paddingHorizontal: 10,
        shadowColor: '#00879C',
        shadowOffset: {
            height: 0,
            width: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 3,
    },

    itemContainerActive: {
        borderColor: '#00879C',
        borderWidth: 2,
    },
    label: {
        color: '#333',
        fontSize: 20,
        fontWeight: 'normal',
    },
    order: {
        color: '#aaa',
        fontSize: 20,
    },
});

export default React.memo(DraggableListPlugin);
