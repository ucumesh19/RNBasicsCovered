import React, { useState } from 'react';
import { Image, ImageBackground, Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateData, signUpData } from '../../store/actions/Action';
import { useNavigation } from '@react-navigation/native';
import { hp, wp, hpx, wpx, nf } from '../../constants/constants';
import Header from '../../common/Header';

const EditProfile = () => {


    const fetchData = useSelector((state) => state.userData);
    const dispatch = useDispatch();

    const [editName, setEditName] = useState(fetchData?.name);
    const [editEmail, setEditEmail] = useState(fetchData?.email);
    const [editMobile, setEditMobile] = useState(fetchData?.mobile);

    const saveData = () => {
        let obj = {
            name: editName,
            email: editEmail,
            mobile: editMobile
        }
        dispatch(signUpData(obj));
        navigation.goBack();
    }
    const validationForm = () => {
        const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const nameReg = /^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/;
        const mobileReg = /^[1-9]{1}[0-9]{9}$/;

        if (!(editName && editEmail && editMobile)) {
            alert("All fields are required.")
            return false;
        }

        if (!editName) {
            alert("Name is empty.")
            return false;
        }
        else if (!(nameReg.test(editName))) {
            alert("Name is incorrect.")
            return false;
        }

        if (!editEmail) {
            alert("Email is empty.")
            return false;
        }
        else if (!(emailReg.test(editEmail))) {
            alert("Email is incorrect.")
            return false;
        }

        if (!editMobile) {
            alert("Number is empty.")
            return false;
        }
        else if (!(mobileReg.test(editMobile))) {
            alert("Number is incorrect.")
            return false;
        }

        else {
            saveData();
            return true;
        }
    }


    const navigation = useNavigation();
    return (
        <ImageBackground source={{ uri: "https://media.istockphoto.com/photos/blue-abstract-background-or-texture-picture-id1138395421?k=6&m=1138395421&s=612x612&w=0&h=bJ1SRWujCgg3QWzkGPgaRiArNYohPl7-Wc4p_Fa_cyA=" }}
            style={styles.backImage}
        >
            <Header name="Edit Profile" />
            <View style={styles.centerView}>
                <Image source={{ uri: "https://www.pikpng.com/pngl/m/60-602888_logo-globe-png-globe-clip-art-transparent-png.png" }}
                    style={styles.imageLogo}
                />
            </View>
            <View style={styles.mainView}>
                {/* <Text style={{ fontSize: 30, color: "black" }}>
                    Welcome back!!!  {fetchData?.name}
                </Text> */}
                <TextInput style={styles.fieldContainer} value={editName} placeholder="name" onChangeText={(editName) => { setEditName(editName) }} ></TextInput>
                <TextInput style={styles.fieldContainer} value={editEmail} placeholder="email" onChangeText={(editEmail) => setEditEmail(editEmail)} ></TextInput>
                <TextInput style={styles.fieldContainer} value={editMobile} placeholder="mobile number" onChangeText={editMobile => setEditMobile(editMobile)}></TextInput>
            </View>
            <TouchableOpacity onPress={validationForm}>
                <Text style={styles.styleSave} > Save</Text>
            </TouchableOpacity>
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
    },
    backImage: {
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
        justifyContent: "center",
        alignItems: "center"
    },
    mainView: {
        backgroundColor: "white",
        borderRadius: wpx(10),
        margin: wp(12),
        marginTop: hpx(30),
        marginBottom: hpx(20),
        padding: wpx(20)
    },
    styleSave: {
        fontSize: nf(34),
        color: "white",
        textDecorationLine: 'underline',
        marginLeft: wpx(140),
        margin: wpx(15)

    }
})


export default EditProfile;