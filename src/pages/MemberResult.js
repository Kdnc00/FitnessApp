import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

function MemberResult({ route }) {
    const { user } = route.params;
    return (
        <SafeAreaView>
            <Text style={styles.message}>Complete the Registration</Text>
            <Text style={styles.label}>User Name:{user.userName} </Text>
            <Text style={styles.label}>User Surname:{user.UserSurname} </Text>
            <Text style={styles.label}>User Age:{user.UserAge} </Text>
            <Text style={styles.label}>User Mail: {user.UserMail}</Text>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    label: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 5,
    },
    message: {
        fontWeight: 'bold',
        fontSize: 50,
        textAlign: 'center',

    },
});
export default MemberResult;

