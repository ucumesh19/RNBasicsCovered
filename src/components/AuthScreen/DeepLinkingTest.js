import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DeepLinkingTest = ({ route }) => {

    const { deepID } = route.params;

    return (
        <View style={styles.mainView}>
            <Text style={styles.textSize}>
                Welcome Sir!!!! {deepID}
            </Text>
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
export default DeepLinkingTest;