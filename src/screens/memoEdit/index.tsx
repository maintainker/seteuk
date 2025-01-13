import {Text, TextInput, View} from "react-native";
import styles from "./index.module";
import {TextButton} from "../../components";
import {useMutation, useQuery, useQueryClient} from "react-query";
import mock from "../../../data/data";
import {useNavigation, useRoute} from "@react-navigation/native";
import type {RouteProp} from "@react-navigation/core/src/types";
import {useEffect, useState} from "react";
import QueryKeys from "../../constance/queryKeys/memoQueryKeys";
// import styles from "../memoDetail/index.module";

const MemoEdit = () =>{
    const route = useRoute<RouteProp< {detail:{id: string}}>>();
    const navigation = useNavigation()

    const id = route.params.id

    const {data:memo,isLoading} =useQuery(["memo","detail", id],()=> mock.getMemo(id));
    const editMutation = useMutation({
        mutationKey: QueryKeys.createKeys("edit", id),
        async mutationFn(){
            mock.updateMemo(memo?.id|| '', title, description);
            await queryClient.invalidateQueries('memo')
            navigation.goBack();
        }
    })

    const queryClient = useQueryClient();

    const [title, setTitle] = useState(memo?.title || "");
    const [description, setDescription] = useState(memo?.description || '');

    useEffect(()=>{
        if(!isLoading && !memo){
            navigation.navigate("home");
        }else if(!isLoading){
            setTitle(memo?.title || '')
            setDescription(memo?.description || '')
        }
    },[isLoading])

    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TextInput
                style={styles.title}
                value={title}
                onChangeText={setTitle}
            />
            <View style={styles.buttonContainer}>
                <TextButton onPress={editMutation.mutate} >수정</TextButton>
                <TextButton onPress={navigation.goBack} >취소</TextButton>
            </View>
        </View>
        <View>
            <Text style={styles.date}>{memo?.updatedAt}</Text>
            <TextInput
                style={styles.description}
                value={description}
                onChangeText={setDescription}
                multiline
            />
        </View>
    </View>);
}


export default MemoEdit