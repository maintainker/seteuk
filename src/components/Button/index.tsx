import styles from "./index.module";
import {Text, TouchableOpacity} from "react-native";
import {GestureResponderEvent} from "react-native/Libraries/Types/CoreEventTypes";

interface Props {
    children:string
    onPress :(e:GestureResponderEvent)=> void
}

const Button = ({children,onPress}: Props) =>{
    return(
    <TouchableOpacity  onPress={onPress} style={styles.button}>
        <Text style={styles.content}>{children}</Text>
    </TouchableOpacity>)
}

export default Button