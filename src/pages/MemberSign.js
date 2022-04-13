import React, { useState } from 'react';
import { SafeAreaView, Text, Alert } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';



function MemberSign({ navigation }) {

    const [userName, setUserName] = useState('');
    const [userSurname, setUserSurname] = useState('');
    const [userAge, setUserAge] = useState('');
    const [userMail, setUserMail] = useState('');

    function handleSubmit() {


        if (!userName || !userSurname || !userAge || !userMail) {
            Alert.alert('Fitness Center', 'CANNOT BE BLANK!');
            return;
        }


        const user = {
            userName,
            userSurname,
            userAge,
            userMail,

        };
        navigation.navigate('MemberResultScreen', { userObj: user })
    }

    return (
        <SafeAreaView>
            <Text>MemberSign</Text>
            <Input label="Member Name"
                placeholder="Enter the member's name..."
                onChangeTest={setUserName} />
            <Input label="Member Surname"
                placeholder="Enter the member's last name"
                onChangeTest={setUserSurname} />
            <Input label="Member Age"
                placeholder="Enter the member's age"
                onChangeTest={setUserAge} />
            <Input label="Member e-post"
                placeholder="Enter the member's e-post"
                onChangeTest={setUserMail} />
            <Button text="Complete the Registration"
                onPress={handleSubmit} />

        </SafeAreaView>
    );
}
export default MemberSign;