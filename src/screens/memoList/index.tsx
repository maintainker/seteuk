import {View, Text, FlatList} from "react-native";
import {useMutation, useQuery} from "react-query";
import {queryKeyConstant} from "../../constance"
import MemoItem from "./component/MemoItem";
import styles from "./index.module";
import {DefaultButton} from "../../components";
import mock from "../../../data/data"

interface MemoContent {
    title: string,
    description: string
}

const MomoList = () =>{
    const {data,refetch} = useQuery(queryKeyConstant.getMemoList,mock.getAllMemo)
    const addMemo = useMutation< void, Error,MemoContent>({
        mutationKey:["memo", "create"],
        async mutationFn({title = "임시 메모입니다.",description= "임시추가메모입니다."}) {
            mock.addMemo(title, description); // mock.addMemo 호출
            await refetch();
         }
        }
    );
    const deleteMemo = useMutation<void,Error, string>({
        mutationKey:["memo", "delete"],
        async mutationFn(id){
            mock.deleteMemo(id);
            await refetch();
        }
    })
    return (<View style={styles.container}>
        <FlatList<Memo>
        keyExtractor={item =>`home-list-${item.id}`}
        data={data} renderItem={({item}) => <MemoItem item={item} onPressDelete={deleteMemo.mutate}  />}
        />
        <View style={styles.buttonContainer}>
            <DefaultButton onPress={addMemo.mutate}>추가</DefaultButton>
        </View>
    </View>)
}

export default MomoList;