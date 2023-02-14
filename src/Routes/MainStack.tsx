import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import { useRef, useState, useCallback } from "react";
import {
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    ScrollView,
    FlatList,
    Dimensions,
    NativeScrollPoint
} from "react-native";
import { Auth } from "../../App";
import ItemsList from "../components/ItemsList";
import { GlobalColors } from "../GlobalColors";
import BorderlessButton from "../ui/BorderlessButton";
import CustomButton from "../ui/CustomButton";

const { height, width } = Dimensions.get('window')

type Props = {
    navigation: NativeStackNavigationProp<Auth, 'SignUp'>;
}

const MainStack = ({ navigation }: Props) => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    // intro message on scrollview
    const Intro = [
        {
            id: 0,
            title: 'Create Lists',
            subtitle: 'Create your lists and get your groceries weekly, bi-weekly or monthly.'
        },
        {
            id: 1,
            title: 'Schedule orders from your lists',
            subtitle: 'Create your lists and get your groceries weekly, bi-weekly or monthly.'
        },
        {
            id: 2,
            title: 'Get your groceries',
            subtitle: 'Create your lists and get your groceries weekly, bi-weekly or monthly.'
        }
    ]

    const viewConfig = useRef({ itemVisiblePercentThreshold: 50 }).current;

    const viewable = useRef((info: { changed: [{ index: number }] }) => {
        setCurrentSlide(info.changed[0].index)
    }).current

    const ScrollIntro = (itemData) => {
        return <ItemsList title={itemData.item.title} subtitle={itemData.item.subtitle} />
    }

    return (
        <SafeAreaView>
            <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: GlobalColors.primary.warm }}>
                <FlatList
                    data={Intro}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={ScrollIntro}
                    pagingEnabled
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    alwaysBounceHorizontal={false}
                    bounces={false}
                    viewabilityConfig={viewConfig}
                    onViewableItemsChanged={viewable}
                />
                <View style={styles.indicatorContainer}>
                    {
                        Intro.map((int, index) => {
                            return <View key={int.title} style={[styles.indicator, { backgroundColor: index === currentSlide ? GlobalColors.primary.blue : GlobalColors.secondary.ivory }]} />
                        })
                    }
                </View>

                <View style={styles.authContainer}>
                    <CustomButton onPress={() => {
                        navigation.replace('SignUp')
                    }} backgroundColor={GlobalColors.primary.lemon}>Sign up</CustomButton>
                    <CustomButton onPress={() => { }} borderWidth={.6}>Continue as a guest</CustomButton>
                    <BorderlessButton>Log in</BorderlessButton>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default MainStack;

const styles = StyleSheet.create({
    intro: {
        height: height * 0.60,
        backgroundColor: GlobalColors.primary.warm
    },
    indicatorContainer: {
        flexDirection: 'row'
    },
    indicator: {
        height: 6,
        width: width * 0.28,
        bottom: 23,
        alignSelf: 'center',
        marginRight: 8,
        borderRadius: 4
    },
    authContainer: {
        width,
        height: height * 0.40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: 'white'
    }
})