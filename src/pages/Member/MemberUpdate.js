import React from "react";
import { SafeAreaView,Text } from "react-native";
import Button from "../../components/button/Button";

const MemberUpdate=({navigation})=>{
    const handleBack=()=>{
        navigation.popToTop('MemberScreen');
    }
    
    return(
        <SafeAreaView>
            <Text>Member Update</Text>
            <Button  title="Back to Member" onPress={handleBack}/>
        </SafeAreaView>
    )
}

export default MemberUpdate;