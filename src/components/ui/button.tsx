import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
    title: string;
    onPress: () => void;
    backgroundColor?: string;
    textColor?: string;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

const MyButton: React.FC<ButtonProps> = ({
                                                     title,
                                                     onPress,
                                                     backgroundColor,
                                                     textColor,
                                                     style,
                                                     textStyle,
                                                 }) => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor }, style]}
            onPress={onPress}
            activeOpacity={0.9}
        >
            <Text style={[styles.text, { color: textColor }, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 16,
        paddingHorizontal: 40,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: '700',
        letterSpacing: 1,
    },
});

export default MyButton;
