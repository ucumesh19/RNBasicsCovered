import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { types } from '../../store/ActionType';
import { hp, wp, hpx, wpx, nf } from '../../constants/constants';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Header from '../../common/Header'

const img = { uri: 'https://media.istockphoto.com/photos/blue-abstract-background-or-texture-picture-id1138395421?k=6&m=1138395421&s=612x612&w=0&h=bJ1SRWujCgg3QWzkGPgaRiArNYohPl7-Wc4p_Fa_cyA=' }


const ApiCall = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    return (
        <ImageBackground source={img} style={styles.backImage}>
            <Header name="Call Api" />
            <View style={styles.mainView}>
                <TouchableOpacity onPress={() => {
                    dispatch({
                        type: types.CHECK_SAGA,
                        payload: "This Side Umesh"
                    });
                }}>
                    <Text style={styles.textStyle}>Call Api</Text>
                </TouchableOpacity >

                <TouchableOpacity onPress={() => {
                    navigation.navigate('CheckApi');
                }}>
                    <Text style={styles.textStyle}>Go To Api List</Text>
                </TouchableOpacity >
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backImage: {
        width: wp(100),
        height: hp(100)
    },
    mainView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: hpx(70)
    },
    textStyle: {
        fontSize: nf(30),
        fontWeight: "bold",
        color: "white",
        textDecorationLine: 'underline',
        marginTop: hpx(45)
    }
});

export default ApiCall;