import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const CustomMarker = ({ cordinates }) => {
    return (
        <View style={styles.markerView}>
            <Image
                style={styles.markerIcon}
                source={{ uri: cordinates.imgUri }}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    markerIcon: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    markerView: {
        height: 40,
        width: 40,
        backgroundColor: "white",
        borderRadius: 20

    }

})

export default CustomMarker;
