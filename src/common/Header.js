import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { useNavigation } from '@react-navigation/core';

const Header = ({ name, show = true, leftIcon = null, rightIcon = null }) => {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {show ? <TouchableOpacity onPress={() => { navigation.goBack() }}>
                <Icon name="arrow-back" type="Ionicons" style={styles.iconStyle} />
            </TouchableOpacity> : leftIcon}

            <Text style={styles.head1}>{name}</Text>

            {show ? <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen') }}>
                <Icon name="user" type="FontAwesome" style={styles.iconStyle} />
            </TouchableOpacity> : rightIcon}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        justifyContent: "space-between",
        backgroundColor: "#0EB2BF"
    },
    iconStyle: {
        fontSize: 40,
        color: "#4E4AAD",
        fontWeight: "bold"
    },
    head1: {
        fontSize: 30,
        color: "white",
        fontWeight: "bold"
    }
})

export default Header;