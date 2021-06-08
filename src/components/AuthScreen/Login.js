
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, TouchableOpacity, fontFamily } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { hp, wp, hpx, wpx, nf } from '../../constants/constants';
import Header from '../../common/Header';

const img = { uri: 'https://media.istockphoto.com/photos/blue-abstract-background-or-texture-picture-id1138395421?k=6&m=1138395421&s=612x612&w=0&h=bJ1SRWujCgg3QWzkGPgaRiArNYohPl7-Wc4p_Fa_cyA=' }
const imgLogo = { uri: 'https://www.pikpng.com/pngl/m/60-602888_logo-globe-png-globe-clip-art-transparent-png.png' }



const Login = () => {

  const fetchData = useSelector((state) => state.userData);
  const navigation = useNavigation();
  const [email, setEmail] = useState("");                             //for email
  const [pass, setPass] = useState("");                               //for password
  const [emailVerify, setEmailVerify] = useState(fetchData?.email);   //For Verification
  const [passVerify, setPassVerify] = useState(fetchData?.password);  //For Verification
  const navigProfile = () => { navigation.navigate('Profile') };

  //Validation for data coming from redux's store state
  const validationForm = () => {
    if (!(email && pass)) {
      alert("All Fields are required!!")
      return false;
    }
    if (!email) {
      alert("Email is empty!!");
      return false;
    }
    else if (email != emailVerify) {
      alert("Email is not matching!!");
      return false;
    }
    if (!pass) {
      alert("Password is empty!!");
      return false;
    }
    else if (pass != passVerify) {
      alert("Password is not matching!!");
      return false;
    }
    else {
      alert("Login Successfully!!!")
    }
  }


  return (

    <ImageBackground source={img} style={styles.backImage}>
      <Header name="Login" />
      <View style={styles.centerView}>
        <Image source={imgLogo} style={styles.imageLogo} />
      </View>

      <View style={styles.mainView} >
        <TextInput style={styles.fieldContainer} onChangeText={(email) => { setEmail(email) }} placeholder="Enter your email" />
        {/* {emailErr && <Text style={{ color: "red" }}> Wrong Email!! </Text>} */}

        <TextInput style={styles.fieldContainer} onChangeText={(pass) => { setPass(pass) }} secureTextEntry={true} placeholder="Password" />
        {/* {passErr && <Text style={{ color: "red" }}> Wrong Password!! </Text>} */}

        <TouchableOpacity style={styles.validationStyle} onPress={validationForm}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>


      <TouchableOpacity style={styles.centerView} onPress={navigProfile}>
        <Text style={styles.signText}>SignUp</Text>
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
  backImage: {
    width: wp(100),
    height: hp(100)
  },
  validationStyle: {
    width: wp(38),
    borderRadius: wpx(10),
    height: hpx(30),
    alignItems: "center",
    justifyContent: "center",
    marginTop: hpx(10),
    backgroundColor: "#4E4AAD",
    marginLeft: wpx(50)
  },
  imageLogo: {
    width: wpx(150),
    height: hpx(130),
    borderRadius: hpx(130) / 2,
    marginTop: hp(4)
  },
  loginText: {
    color: "white",
    fontSize: nf(16)
  },
  signText: {
    color: "white",
    fontSize: nf(30),
    marginBottom: hpx(20),
    textDecorationLine: 'underline'

  }
});

export default Login;