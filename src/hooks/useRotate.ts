import {useState} from 'react';
import {Dimensions} from 'react-native';

const getWidth = () => Dimensions.get('window').width;
const getHeight = () => Dimensions.get('window').height;

const useRotate = () => {
    const [width, setWidth] = useState(getWidth());
    const [height, setHeight] = useState(getHeight());
    const onLayout = () => {
        setWidth(getWidth());
        setHeight(getHeight());
    };
    return {width, height, onLayout};
};

export default useRotate;
