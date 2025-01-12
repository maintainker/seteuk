import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    buttonContainer:{
        flexDirection: 'row',
        gap: 16,
    },
    content:{},
    date: {
        fontSize: 14,
        color: '#999',
        textAlign: 'right',
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        color: '#333',
        lineHeight: 24,
    },
})
export default styles