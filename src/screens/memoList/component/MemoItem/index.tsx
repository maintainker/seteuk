import {Text, TouchableOpacity, View} from "react-native";
import styles from "./index.module"
import {Icon} from "../../../../components";

interface Props{
    item:Memo
}

const MemoItem = ({item}:Props) =>{
    return <View style={styles.container}>
        <TouchableOpacity style={styles.contents}>
            <View style={styles.header}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.date}>{item.updatedAt}</Text>
            </View>
            <Text
                style={styles.description}
                numberOfLines={1}
                ellipsizeMode="tail">
                {item.description}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
            <Icon width={24} height={24} fill="#666" name={"cancel"} />
        </TouchableOpacity>
    </View>
}

export default MemoItem