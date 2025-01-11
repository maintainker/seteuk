import {View,Text} from "react-native";
import {useQuery} from "react-query";
import {queryKeyConstant} from "../../constance"
import memoListData from "../../../data/memos.json"

const getData = () =>{
    return memoListData as Memo[];
}

const MomoList = () =>{
    const {data} = useQuery(queryKeyConstant.getMemoList,getData, {
        enabled:false
    })
    console.log(data);

    return (<View>
        <Text>{data?.[0]?.title}</Text>
    </View>)
}

export default MomoList;