import {Text, View} from "react-native";

const DetailHeader = () =>{
    return <View style={styles.header}>

        <Text style={styles.title}>{memo.title}</Text>
        <View style={styles.actionButtons}>

            <TouchableOpacity onPress={() => setIsEditing(true)}>
                <Text style={styles.actionButton}>편집</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={deleteMemo}>
                <Text style={styles.actionButton}>삭제</Text>
            </TouchableOpacity>
        </View>
    </View>
}

export default DetailHeader