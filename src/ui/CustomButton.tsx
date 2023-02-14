import { ReactNode } from "react";
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Dimensions
} from "react-native";
import { GlobalColors } from "../GlobalColors";

const { width } = Dimensions.get('window')

type Button = {
    children: ReactNode,
    backgroundColor?: string,
    borderWidth?: number,
    onPress(): void
}

const CustomButton = ({children, backgroundColor, borderWidth, onPress}: Button) => {
    
    return (
        <View>
            <Pressable onPress={onPress}>
                <View style={[styles.pressedContainer, {backgroundColor, borderWidth}]}>     
                    <Text style={styles.text}>{ children }</Text>  
                </View>    
            </Pressable>
        </View>
    )
}

export default CustomButton;

const styles = StyleSheet.create({
    pressedContainer: {    
        width: width * 0.8,
        padding: 17,
        borderRadius: 30,
        alignItems: 'center',
        marginVertical: 20
    },
    text: {
        color: 'black',
        fontFamily: 'IBMPlexSans-Medium'
    }
})