import {IconsProps} from "./index";
import Svg, {Path} from "react-native-svg";


const Cancel = ({width, height, fill}:IconsProps) =>{
    return (
        <Svg fill={fill} width={width} height={height} >
            <Path d='M.724.118L.118.724 7.395 8 .118 15.276l.606.606L8 8.605l7.276 7.277.606-.606L8.605 8 15.882.724l-.606-.606L8 7.395z'/>
        </Svg>)
}

export default Cancel