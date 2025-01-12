import LeftArrow from "./LeftArrow"
import Cancel from "./Cancel";

export interface IconsProps{
    height?: number,
    width?: number,
    fill?: string
}
const IconsList  ={
    leftArrow: {
        Component: LeftArrow
    },
    cancel: {
        Component: Cancel
    }
}

export default IconsList