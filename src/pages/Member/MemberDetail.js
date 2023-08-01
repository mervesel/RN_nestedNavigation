import React from "react";
import { SafeAreaView,Text } from "react-native";
import Button from "../../components/button/Button";

const MemberDetail=({navigation,route})=>{
    const {name}=route.params;
    
    const handleDetailSubmit=()=>{
        navigation.navigate('MemberUpdateScreen');
    }
    
    return(
        <SafeAreaView>
            <Text>Member Detail</Text>
            <Text>{name}</Text>
            <Button title="Next Page" onPress={handleDetailSubmit} />
        </SafeAreaView>
    )
}

export default MemberDetail;