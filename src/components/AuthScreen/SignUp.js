import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, secureTextEntry, Image, TouchableOpacity, ImageBackground, TextInput, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { signUpData } from '../../store/actions/Action';
import { hp, wp, hpx, wpx, nf } from '../../constants/constants';


const img = { uri: 'https://media.istockphoto.com/photos/blue-abstract-background-or-texture-picture-id1138395421?k=6&m=1138395421&s=612x612&w=0&h=bJ1SRWujCgg3QWzkGPgaRiArNYohPl7-Wc4p_Fa_cyA=' }
const imgLogo = { uri: 'https://www.pikpng.com/pngl/m/60-602888_logo-globe-png-globe-clip-art-transparent-png.png' }


const SignUp = () => {

  const navigation = useNavigation();
  const [email, setEmail] = useState("Ume123@gmail.com");       //Email
  const [name, setName] = useState("Umesh");                    //Name
  const [mobile, setMobile] = useState("9874569874");           //Mobile
  const [pass, setPass] = useState("Ume@123");                  //Password
  const [cpass, setCpass] = useState("Ume@123");                //Confirm Password

  const dispatch = useDispatch();

  // const goToLogin = () => { navigation.navigate('Login') };

  // To store data in store and will navigate to Login Screen
  const saveData = () => {
    let obj = {
      name: name,
      email: email,
      mobile: mobile,
      password: pass
    }
    dispatch(signUpData(obj));
    alert("Data Saved Successfully");
    navigation.navigate('Login');
  }

  //For Validation
  const validationForm = () => {
    const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;
    const nameReg = /^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/;
    const mobileReg = /^[1-9]{1}[0-9]{9}$/;

    if (!(email && name && mobile && pass && cpass)) {
      alert("All fields are required.")
      return false;
    }

    if (!email) {
      alert("Email is empty.")
      return false;
    }
    else if (!(emailReg.test(email))) {
      alert("Email is incorrect.")
      return false;
    }

    if (!name) {
      alert("Name is empty.")
      return false;
    }
    else if (!(nameReg.test(name))) {
      alert("Name is incorrect.")
      return false;
    }

    if (!mobile) {
      alert("Number is empty.")
      return false;
    }
    else if (!(mobileReg.test(mobile))) {
      alert("Number is incorrect.")
      return false;
    }

    if (!pass) {
      alert("Password is empty.")
      return false;
    }
    else if (!(passReg.test(pass))) {
      alert("Password is incorrect.")
      return false;
    }

    if (!cpass) {
      alert("Field is empty.")
      return false;
    }
    else if (cpass != pass) {
      alert("Password not matching");
      return false;
    }
    else {
      alert("You can Login Now!!!")
      // saveData();
    }

  }

  return (


    <ImageBackground source={img} style={styles.backImage}>
      <View style={styles.centerView}>
        <Image source={imgLogo} style={styles.imageLogo} />
      </View>

      <View style={styles.mainView} >
        <TextInput value={email} style={styles.fieldContainer} onChangeText={(email) => { setEmail(email) }} placeholder="Enter your email" />
        <TextInput value={name} style={styles.fieldContainer} onChangeText={(name) => { setName(name) }} placeholder="Enter your Name" />
        <TextInput value={mobile} style={styles.fieldContainer} onChangeText={(mobile) => { setMobile(mobile) }} keyboardType={'number-pad'} placeholder="Mobile No" />
        <TextInput value={pass} style={styles.fieldContainer} onChangeText={(pass) => { setPass(pass) }} secureTextEntry={true} placeholder="Password" />
        <TextInput value={cpass} style={styles.fieldContainer} onChangeText={(cpass) => { setCpass(cpass) }} secureTextEntry={true} placeholder="Confirm Password" />
        <TouchableOpacity style={styles.validationStyle} onPress={validationForm} >
          <Text style={styles.signText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.centerView} onPress={saveData}>
        <Text style={styles.loginText}>Login</Text>
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
  centerView: {
    justifyContent: "center",
    alignItems: "center"
  },
  mainView: {
    backgroundColor: "white",
    borderRadius: wpx(10),
    margin: wp(12),
    marginTop: hpx(30),
    padding: wpx(20)
  },
  validationStyle: {
    width: wp(38),
    borderRadius: wpx(10),
    height: hpx(30),
    alignItems: "center",
    justifyContent: "center",
    marginTop: hpx(5),
    backgroundColor: "#4E4AAD",
    marginLeft: wpx(50)
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
  signText: {
    color: "white",
    fontSize: nf(16)
  },
  loginText: {
    color: "white",
    fontSize: nf(36),
    marginBottom: hp(5),
    textDecorationLine: 'underline'

  }
});
export default SignUp;
