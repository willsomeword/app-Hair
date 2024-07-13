import React from 'react';
import { styles } from './styles';
import { TouchableOpacity, Text } from 'react-native';



const Button = (props) => {
    return (
        <TouchableOpacity
            style={{
                ...styles.mainContainer,
                width: props.width,
                height: props.height,
                backgroundColor: props.bgColor,
            }}
            activeOpacity={0.8}
            onPress={() => {
                if (props.action) {
                    props.action();
                }
            }}
        >
            <Text style={{ color: props.color }}>{props?.label}</Text>
        </TouchableOpacity>

    );

};

export default Button;