import { ReactNode } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Modal,
    Dimensions,
    Pressable
} from 'react-native';
import CustomButton from '../ui/CustomButton';

type Props = {
    modalIsVisible: boolean,
    onPress(): void,
    title: string,
    subtitle?: string,
    children: ReactNode
}

const { height, width } = Dimensions.get('window');

const ModalScreen = ({
    modalIsVisible,
    onPress,
    title,
    subtitle,
    children }: Props) => {
    
    return (
        <Modal visible={modalIsVisible}
            transparent={true}
            animationType={'slide'}>
            <Pressable style={styles.outideView} onPress={onPress} />
            <View style={styles.modal}>
                <View style={styles.content}>
                    <Text style={styles.title}>{ title }</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                    {children}
                </View>
            </View>

        </Modal>
    )
}

export default ModalScreen;

const styles = StyleSheet.create({
    outideView: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'transparent'
    },
    modal: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: height * 0.65,
        backgroundColor: 'white'
    },
    content: {
        marginTop: width * 0.06,
        marginHorizontal: width * 0.08
    },
    title: {
        fontFamily: 'IBMPlexSans-SemiBold',
        fontSize: 20,
        lineHeight: 28,
        color: 'black'
    },
    subtitle: {
        color: 'black',
        fontFamily: 'IBMPlexSans-Regular',
        fontSize: 14,
        paddingVertical: 10,
        lineHeight: 21
    }
})