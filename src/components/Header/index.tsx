import {Text, TouchableOpacity, View} from "react-native";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {useQuery} from "react-query";
import {queryKeyConstant} from "../../constance";
import memoListData from "../../../data/memos.json";
import styles from "./index.module"
import Icon from "../Icons";

interface Props {
    isBack?: boolean;
}

type AppRouteProp = RouteProp<{
    pages: {title?: string,id?: string};
}>;


const getData = () =>{
    return memoListData as Memo[];
}
const rootScreens = ["home"];


const NavigationHeader= () => {

    const navigation = useNavigation();
    const route = useRoute<AppRouteProp>();
    const {data} = useQuery(queryKeyConstant.getMemoList,getData, {
        enabled:false
    })
    const createHeaderTitle = (name:string, title:string ) =>{
        const countingList = ["home"];
        const detailList = ['detail','edit'];
        if(countingList.includes(name)){
            return `${title} (${data?.length || 0})`
        }else if(detailList.includes(name)) {
            return data?.find((memo) => memo.id === route.params.id)?.title || ''
        }
        return title
    }
    const isBack = !rootScreens.includes(route.name);
    const title = createHeaderTitle(route.name, route.params.title || "")
    return(
        <View style={styles.header}>
            {isBack && <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => navigation.goBack()}>
                <Icon width={24} height={24} name={"leftArrow"}/>
            </TouchableOpacity>}
            <Text style={styles.headerText}>{title || "임시 페이지입니다."}</Text>
        </View>)
}

export  default NavigationHeader;