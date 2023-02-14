import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { GlobalColors } from '../GlobalColors';

const {width, height} = Dimensions.get('window')

type Prop = {
    title: string,
    subtitle: string
}

const ItemsList = ({title, subtitle}: Prop) => {
    return (
        <View style={styles.intro}>
            <View style={styles.introSub}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </View>
    )
}

export default ItemsList;

const styles = StyleSheet.create({
    intro: {
        height: height * 0.60,
        backgroundColor: GlobalColors.primary.warm
    },
    introSub: {
        width,
        alignItems: 'flex-start',
        marginLeft: 11,
        marginTop: 30
    },
    title: {
        fontFamily: 'IBMPlexSans-SemiBold',
        fontSize: 32,
        color: 'black',
        marginRight: width * 0.20
    },
    subtitle: {
        fontFamily: 'IBMPlexSans-Medium',
        fontSize: 16,
        color: 'black',
        marginVertical: 8
    },
})