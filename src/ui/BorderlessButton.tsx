import { ReactNode } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

type Button = {
    children: ReactNode
}

const BorderlessButton = ({children}: Button) => {
    return (
        <Pressable onPress={() => {console.log('pressed')}}>
        <View>
            <Text style={styles.text}>{children}</Text>
            </View>
            </Pressable>
    ) 
}

export default BorderlessButton;

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontFamily: 'IBMPlexSans-Medium',
        borderBottomWidth: .8
    }
})