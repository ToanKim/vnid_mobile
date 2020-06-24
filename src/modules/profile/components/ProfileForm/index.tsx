import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';

interface IProps {
    metaFormBuilder: ItemProps[];
}

interface ItemProps {
    type?: string;
    content?: string;
}

function ProfileItem(props: ItemProps) {
    const {type = 'default', content = 'default'} = props;
    return (
        <TextInput
            mode="outlined"
            label={type}
            value={content}
            style={styles.input}
        />
    );
}

function ProfileForm(props: IProps) {
    const {metaFormBuilder} = props;
    return (
        <View>
            {metaFormBuilder.map((item: ItemProps) => (
                <ProfileItem key={item.type} {...item} />
            ))}
        </View>
    );
}

export default React.memo(ProfileForm);

const styles = StyleSheet.create({
    container: {
        height: 20,
    },

    input: {marginVertical: 10},
});
