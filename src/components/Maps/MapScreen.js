import MapView, { Callout, Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { View, StyleSheet, Text, Modal, Pressable, Alert, TextInput, Image } from 'react-native';
import React, { useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import CustomMarker from './CustomMarker';

const MapScreen = () => {

    const [modalVisible, setModalVisible] = useState(false);           //for modal
    //for latitude
    const [getlatitude, setlatitude] = useState(0)
    {
        Geolocation.getCurrentPosition(info => setlatitude(info.coords.latitude));
        Geolocation.getCurrentPosition(info => console.log(info.coords.latitude));
    }
    //for longitude
    const [getlongitude, setlongitude] = useState(0)
    {
        Geolocation.getCurrentPosition(info => setlongitude(info.coords.longitude));
        Geolocation.getCurrentPosition(info => console.log(info.coords.longitude));
    }

    const locations =
        [{
            id: 1,
            title: "Club",
            description: "Welcome to Club",
            pinColor: "orange",
            latitude: 28.695871,
            longitude: 77.271176,
            imgUri: "https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-7/128/Game-clubs-icon.png"
        },
        {
            id: 2,
            title: "Restaurant",
            description: "Hey Come and Eat",
            pinColor: "yellow",
            latitude: 28.691421,
            longitude: 77.272176,
            imgUri: "https://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/128/Restaurant-icon.png"
        },
        {
            id: 3,
            title: "School",
            description: "RDJP School",
            pinColor: "pink",
            latitude: 28.695421,
            longitude: 77.2760276,
            imgUri: "https://icons.iconarchive.com/icons/google/noto-emoji-travel-places/128/42496-school-icon.png"
        },
        {
            id: 4,
            title: "GYM",
            description: "Royal Gym",
            pinColor: "gold",
            latitude: 28.693421,
            longitude: 77.2690276,
            imgUri: "https://icons.iconarchive.com/icons/sonya/swarm/256/gym-icon.png"

        }
        ]

    return (
        <>
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: getlatitude,
                        longitude: getlongitude,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                    //  mapType="satellite"
                    //  mapType='hybrid'
                    showsUserLocation={true}
                    showsMyLocationButton={false}
                    followsUserLocation={true}
                    getCurrentPosition={true}
                >
                    <Marker
                        draggable
                        onDragEnd={(e) => { console.log('dragEnd', e.nativeEvent.coordinate) }}
                        coordinate={{
                            latitude: getlatitude,
                            longitude: getlongitude,
                        }}
                        title="Home"
                        description="This is my Home"
                        //pinColor="gold"
                        image={{ uri: 'https://i.ibb.co/ynqmZ4Y/placeholder-1.png' }}

                    >
                        <Callout onPress={() => setModalVisible(!modalVisible)} >
                            {/* <View style={styles.calloutMainView}>
                                <Image style={styles.calloutImage}
                                    source={{ uri: 'https://i.ibb.co/ynqmZ4Y/placeholder-1.png' }}
                                />
                                <Text>Hi There</Text>
                            </View> */}

                        </Callout>
                    </Marker>

                    {locations.map((marker, index) => (
                        <Polyline
                            key={index}
                            coordinates={locations}
                            strokeWidth={2}
                            strokeColor="blue"
                            fillColor="lightblue"

                        />

                    ))}

                    {locations.map((marker, index) => (
                        <Marker
                            draggable
                            key={marker.id}
                            coordinate={{
                                latitude: marker.latitude,
                                longitude: marker.longitude
                            }}
                            //    title={marker.title}
                            //   description={marker.description}
                            pinColor={marker.pinColor}
                        >
                            <CustomMarker cordinates={marker} />


                            <Callout >

                                <View style={styles.calloutMainView}>
                                    <Text style={styles.name}>{marker.title}</Text>
                                    <Text>Hi there!</Text>
                                    <Text>Description: {marker.description}</Text>
                                    {/* <Image
                                        style={styles.calloutImage}
                                        source={{ uri: marker.imgUri }}
                                    /> */}
                                </View>

                            </Callout>
                        </Marker>
                    ))}


                </MapView>
                <View style={styles.centeredView}>

                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Hello!!!</Text>
                                <Text style={styles.modalText}>This is my Home...</Text>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.textStyle}>  Close  </Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                </View>

            </View>

            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <TextInput style={styles.fieldContainer}
                    placeholder="latitude" > {getlatitude}</TextInput>

                <TextInput style={styles.fieldContainer}
                    placeholder="longitude" > {getlongitude}</TextInput>
            </View>

        </>

    );
}
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 640,
        width: 400,
        marginTop: 170,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    calloutMainView: {
        alignSelf: "flex-start",
        backgroundColor: "#fff",
        borderRadius: 6,
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 15,
        width: 200
    },
    name: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: "bold",
        color: "#ff4321",
        textDecorationLine: "underline"
    },
    btnColor: {
        color: "#fff",
        fontSize: 16,
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 55,
        alignItems: "center",
        borderWidth: 2
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonClose: {
        backgroundColor: "#D82E2F",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 20
    },
    fieldContainer: {
        height: 48,
        color: "#4E4AAD",
        fontSize: 16,
        backgroundColor: "#0EB2BF",
        padding: 10,
        borderRadius: 8,
        margin: 5,
        fontWeight: "bold"
    },
    calloutImage: {
        height: 50,
        width: 120,
        borderWidth: 5,
        borderColor: "blue"
    }
});
export default MapScreen;