import React from "react";
import { SafeAreaView,Text } from "react-native";
import Button from "../../components/button/Button";

const Profile=({navigation})=>{
    const handleEdit=()=>{
        navigation.navigate('ProfileEditScreen');
    }
    return(
        <SafeAreaView>
            <Text>profile</Text>
            <Button title="Go ProfileEdit" onPress={handleEdit} />
        </SafeAreaView>
    )
}

export default Profile;