import React from "react";
import { SafeAreaView,TextInput,Text} from "react-native";
import styles from './Input.styles';

const Input=({value,onChangeText,placeholder})=>{
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.inputText}>{value}</Text>
            <TextInput style={styles.input_box} onChangeText={onChangeText} placeholder={placeholder} />
        </SafeAreaView>
    )
}

export default Input;