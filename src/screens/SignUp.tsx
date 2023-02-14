import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, SectionList } from 'react-native';
import { Auth } from '../../App';
import Input from '../components/Input';
import ModalScreen from '../components/ModalScreen';
import { GlobalColors } from '../GlobalColors';
import BorderlessButton from '../ui/BorderlessButton';
import CustomButton from '../ui/CustomButton';
import Icons from '../ui/Icons';

type Prop = {
    navigation: NativeStackNavigationProp<Auth, 'SignUp'>
}


const { height, width } = Dimensions.get('window');
// All use case of this is to make it adaptive to all screen size
const responsiveHeight = height * 0.23;

const days = [
    {
        id: 'w1',
        data: 'Saturday 23rd, July',
    },
    {
        id: 'w3',
        data: 'Suday 24th, July'
    }
]
const comingdays = [
    {
        id: 'w2',
        data: 'Saturday 30th , July'
    },
    {
        id: 'w3',
        data: 'Sunday 31st, July'
    }
]


const SignUp = ({ navigation }: Prop) => {
    const [modalIsVisible, setModalIsVisible] = useState<boolean>(false)
    return (
        <SafeAreaView>
            <View style={styles.header}>
                <View style={styles.iconContainer}>
                    <Icons onPress={() => {
                        navigation.navigate('Intro')
                    }} name='chevron-back-sharp'
                        size={33}
                        color={GlobalColors.primary.blue} />
                </View>
                <View style={styles.headerTitle}>
                    <Text style={styles.headerTitleText}>Enter your mobile number</Text>
                </View>
            </View>
            <View style={styles.inputContainer}>
                <Input />
                {/* Temporary Color */}
                <CustomButton backgroundColor={GlobalColors.primary.neutralGrey} onPress={() => setModalIsVisible(true)}> Open Modal</CustomButton>
                <Text style={{ textAlign: 'center', color: 'black', fontVariant: ['small-caps'] }}>By signing up, you agree to our <BorderlessButton>Terms of Service</BorderlessButton> and <BorderlessButton>Privacy Policy.</BorderlessButton></Text>
            </View>
            <ModalScreen
                subtitle='Subsequent deliveries will be on your selected day of the week'
                title='When do you want your first delivery?'
                onPress={() => setModalIsVisible(false)}
                modalIsVisible={modalIsVisible}>
                <SectionList
                    sections={[{
                        title: 'This Week', data: days
                    }, { title: 'Next week', data: comingdays }]}
                    ItemSeparatorComponent={() => {
                        return <View style={{ height: 40 }} />
                    }}

                    SectionSeparatorComponent={() => {
                        return <View style={{ height: 20 }} />
                    }}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return <Text
                            style={styles.listData}
                            onPress={(item) => console.log('I am a text')}>{item.data}</Text>
                    }}
                    renderSectionHeader={({ section: { title } }) => {
                        return <Text style={styles.title}>{title}</Text>
                    }}
                />
            </ModalScreen>
        </SafeAreaView>
    )
}

export default SignUp;

const styles = StyleSheet.create({
    header: {
        height: responsiveHeight,
        backgroundColor: GlobalColors.primary.warm
    },
    iconContainer: {
        marginLeft: width * 0.03,
        marginTop: responsiveHeight * 0.20
    },
    headerTitle: {
        marginLeft: width * 0.03,
        marginTop: responsiveHeight * 0.32
    },
    headerTitleText: {
        color: 'black',
        fontSize: 24,
        marginLeft: 12,
        fontFamily: 'IBMPlexSans-SemiBold'
    },
    inputContainer: {
        alignItems: 'center',
        backgroundColor: 'blue',
        height: height * 0.77,
        borderRadius: 12,
        
    },
    title: {
        fontFamily: 'IBMPlexSans-SemiBold',
        fontSize: 16,
        color: 'black',
        marginVertical: 8
    },
    listData: {
        fontFamily: 'IBMPlexSans-Reguler',
        fontSize: 14,
        color: 'black'
    }
})