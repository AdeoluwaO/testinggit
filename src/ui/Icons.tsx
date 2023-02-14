import { View, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

type Prop = {
  name: string,
  size: number,
  color: string,
  onPress?(): void
}

const Icons = ({ name, size, color, onPress }: Prop) => {
  const navigation = useNavigation();
    return (
      <View>
        <Pressable onPress={onPress}>
        <Icon name={name}
          size={size}
          color={color}
            onPress={onPress} /> 
          </Pressable>
        </View>
    )
}

export default Icons;

const styles = StyleSheet.create({

})
