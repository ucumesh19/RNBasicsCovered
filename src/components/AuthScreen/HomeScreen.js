import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { hp, wp, hpx, wpx, nf } from '../../constants/constants';
import { Text, View, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';

const img = { uri: 'https://media.istockphoto.com/photos/blue-abstract-background-or-texture-picture-id1138395421?k=6&m=1138395421&s=612x612&w=0&h=bJ1SRWujCgg3QWzkGPgaRiArNYohPl7-Wc4p_Fa_cyA=' }

const HomeScreen = () => {

    const navigation = useNavigation();

    return (


        <ImageBackground source={img} style={styles.backImage}>
            <View style={styles.mainView}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('SignUp');
                }}>
                    <Text style={styles.textStyle}>SignUp Screen</Text>
                </TouchableOpacity >

                <TouchableOpacity onPress={() => {
                    navigation.navigate('ApiCall');
                }}>
                    <Text style={styles.textStyle}>Api Call Screen</Text>
                </TouchableOpacity >


                <TouchableOpacity onPress={() => {
                    navigation.navigate('MapScreen');
                }}>
                    <Text style={styles.textStyle}>MapScreen</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => {
                    navigation.navigate('DeepTest');
                }}>
                    <Text style={styles.textStyle}>DeepLinkingExScreen</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => {
                    navigation.navigate('CameraRollScreen');
                }}>
                    <Text style={styles.textStyle}>CameraRoll</Text>
                </TouchableOpacity>

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

export default HomeScreen;