import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateData } from '../../store/actions/Action';
import EditProfile from './EditProfile';
import { hp, wp, hpx, wpx, nf } from '../../constants/constants';
import Header from '../../common/Header';

const Profile = () => {

    const navigation = useNavigation();

    //to access redux's store state:Type SIGN_UP_DATA
    const fetchData = useSelector((state) => state.userData)

    const dispatch = useDispatch();

    // const [editMode, setEditMode] = useState(false);
    // const [nameP, setNameP] = useState(fetchData.name);
    // const [emailP, setEmailP] = useState(fetchData.email);
    // const [mobileP, setMobileP] = useState(fetchData.mobile);
    // const navigation = useNavigation();

    // const saveData = () => {
    //     let obj = {
    //         name: nameP,
    //         email: emailP,
    //         mobile: mobileP
    //     }
    //     dispatch(updateData(obj));
    //     console.log("Data Saved");
    //     setEditMode(!editMode);
    // }


    useEffect(() => {
        console.log(fetchData);
    }, [fetchData])

    return (
        <ImageBackground source={{ uri: "https://media.istockphoto.com/photos/blue-abstract-background-or-texture-picture-id1138395421?k=6&m=1138395421&s=612x612&w=0&h=bJ1SRWujCgg3QWzkGPgaRiArNYohPl7-Wc4p_Fa_cyA=" }}
            style={styles.backImage}
        >
            <Header name="Profile" />
            <View style={styles.centerView}>
                <Image source={{ uri: "https://www.pikpng.com/pngl/m/60-602888_logo-globe-png-globe-clip-art-transparent-png.png" }}
                    style={styles.imageLogo}
                />
            </View>
            <View style={styles.mainView}>
                {/* <Text style={{ fontSize: 30, color: "black" }}>
                    Welcome back!!!  {fetchData?.name}
                </Text> */}
                <TextInput style={styles.fieldContainer} editable={false}>{fetchData?.name}</TextInput>
                <TextInput style={styles.fieldContainer} editable={false}>{fetchData?.email}</TextInput>
                <TextInput style={styles.fieldContainer} editable={false}>{fetchData?.mobile}</TextInput>
            </View>
            <View style={styles.centerView}>
                <TouchableOpacity onPress={() => { navigation.navigate(EditProfile) }}>
                    <Text style={styles.styleEdit}>Edit</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    fieldContainer: {
        height: hpx(48),
        color: "#4E4AAD",
        fontSize: nf(16),
        backgroundColor: "#0EB2BF",
        padding: wpx(10),
        borderRadius: wpx(8),
        margin: wpx(5),
        fontWeight: "bold"

    }, backImage: {
        width: wp(100),
        height: hp(100)
    },
    imageLogo: {
        width: wpx(150),
        height: hpx(130),
        borderRadius: hpx(130) / 2,
        marginTop: hp(4)
    },
    centerView: {
        alignItems: "center",
        justifyContent: "center"
    },
    mainView: {
        backgroundColor: "white",
        borderRadius: wpx(10),
        margin: wp(12),
        marginTop: hpx(30),
        padding: wpx(20)
    },
    styleEdit: {
        fontSize: nf(34),
        color: "white",
        textDecorationLine: 'underline'
    }
})

export default Profile;