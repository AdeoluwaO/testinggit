import {
    View,
    TextInput,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import { GlobalColors } from '../GlobalColors';


const {width, height} = Dimensions.get('window')

const Input = () => {
    return (
        <View>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Mobile Number</Text>
                <TextInput />
            </View>
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        borderWidth: .6,
        borderRadius: 8,
        width: width * 0.90,
        marginTop: width * 0.06,
        height: 55,
        paddingVertical: 8
    },
    text: {
        fontSize: 12,
        fontFamily: 'IBMPlexSans-Regular',
        textAlign: 'left',
        marginLeft: 8,
        color: GlobalColors.primary.blue, 
    }

})