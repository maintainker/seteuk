export type ValueOf<T> = T[keyof T];

export type NavigationPropType<T> = {
    screen?: keyof T;
    params?: ValueOf<T>;
};

 export type DefaultParams = {
    title?: string;
}




export type RouterParamList = {
    Home: NavigationPropType<DefaultParams>
}
