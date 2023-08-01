import React, { useState } from "react";
import { SafeAreaView,Text} from "react-native";
import Button from "../../components/button/Button";
import Input from "../../components/Input/Input";

const Member=({navigation})=>{

    const [name,setName]=useState(null);

    const handleSubmit=()=>{
        navigation.navigate('MemberDetailScreen' , {name});
    }
    
    return(
        <SafeAreaView>
            <Input value="Member Name" placeholder="Adınızı giriniz." onChangeText={setName} />
            <Button title="Next Page" onPress={handleSubmit}  />
        </SafeAreaView>
    )
}

export default Member;