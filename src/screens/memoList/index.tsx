import {View, Text, FlatList} from "react-native";
import {useQuery} from "react-query";
import {queryKeyConstant} from "../../constance"
import memoListData from "../../../data/memos.json"
import MemoItem from "./component/MemoItem";
import styles from "./index.module";
import {DefaultButton} from "../../components";

const getData = () =>{
    return memoListData as Memo[];
}

const MomoList = () =>{
    const {data} = useQuery(queryKeyConstant.getMemoList,getData, {
        enabled:false
    })
    // console.log(data);

    return (<View style={styles.container}>
        <FlatList<Memo>
        keyExtractor={item =>`home-list-${item.id}`}
        data={data} renderItem={({item}) => <MemoItem item={item} />}
        />
        <View style={styles.buttonContainer}>
            <DefaultButton onPress={()=>{}}>추가</DefaultButton>
        </View>
    </View>)
}

export default MomoList;