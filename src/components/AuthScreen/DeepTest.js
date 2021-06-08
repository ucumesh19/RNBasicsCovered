import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DeepTest = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.mainView}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('DeepLinkingTest', {
                    deepID: 44
                });
            }}>
                <Text style={styles.textSize}>Go To DeepTest</Text>
            </TouchableOpacity>
        </View>

    );
}
const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    textSize: {
        fontSize: 16,
        fontWeight: "bold"
    }
})
export default DeepTest;