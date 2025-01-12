import iconList from "./iconsList";
import Svg, {G, Path} from 'react-native-svg';
import iconsList from "./iconsList";

interface Props{
    name: keyof typeof iconList,
    width?: number,
    height?: number,
    fill?: string
}

const Icon = ({ width= 16, height = 16, name, fill = "#FFF"}:Props) =>{
    const {Component:SVGIcon} = iconsList[name];
    return(<SVGIcon width={width} height={height} fill={fill} />)
}

export default Icon