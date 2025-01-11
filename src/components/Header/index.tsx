import {Text, View} from "react-native";
import {RouteProp, useRoute} from "@react-navigation/native";

interface Props {
    path?: string;
}

type AppRouteProp = RouteProp<{
    home: {title?: string};
    MemoForm: {title?: string};
}>;



const NavigationHeader= () =>{

    const route = useRoute<AppRouteProp>();
    const temp = 1;

    const createHeaderTitle = (name:string, title:string ) =>{
        const CountingList = ["home"];
        if(CountingList.includes(name)){
            return `${title} (${temp})`
        }
        return "없음"

    }

    const title = createHeaderTitle(route.name, route.params.title || "")
    return<View><Text>{title|| "123"}</Text></View>
}

export  default NavigationHeader;