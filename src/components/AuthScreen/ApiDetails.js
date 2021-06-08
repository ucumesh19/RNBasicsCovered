import React, { useEffect, useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { types } from '../../store/ActionType';
import Header from '../../common/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'native-base';
import { hp, wp, hpx, wpx, nf } from '../../constants/constants';

const ApiDetails = ({ route }) => {
    const { id } = route.params;
    const dummyParseData = useSelector((state) => state.dummyListData);
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [editTitle, setEditTitle] = useState('');
    const [editUserId, setEditUserId] = useState('');
    useEffect(() => {
        dispatch({
            type: types.DISPLAY_DUMMY_SAGA,
            payload: id
        })

    }, [])

    return (
        <>
            <Header name="Api Details" show={false} leftIcon={
                <TouchableOpacity onPress={() => { setEditMode(!editMode) }}>
                    {!editMode ? <Icon name="edit" type="FontAwesome5" style={styles.iconStyle} /> : null}
                </TouchableOpacity>
            }
                rightIcon={
                    <TouchableOpacity onPress={() => {
                        dispatch({
                            type: types.DELETE_DUMMY_SAGA,
                            payload: id

                        })
                    }} >
                        <Icon name="delete" type="AntDesign" style={styles.iconStyle} />
                        {/* <Text style={styles.iconStyle}>Delete</Text> */}
                    </TouchableOpacity>
                } />

            {!editMode ? <View style={styles.mainView}>
                {/* <Text>{id}</Text> */}
                <Text style={styles.dummyTextStyle}>
                    Title:  {dummyParseData?.title}
                </Text>
                <Text style={styles.dummyTextStyle}>
                    User Id: {dummyParseData?.userId}
                </Text>
            </View> : null}
            {editMode ?
                <View>
                    <TextInput style={styles.fieldContainer} onChangeText={(text) => setEditTitle(text)} placeholder="Edit Your Title" />
                    <TextInput style={styles.fieldContainer} onChangeText={(text) => setEditUserId(text)} placeholder="Edit Your User Id" />
                    {/* view for save and cancel button */}
                    <View style={{ flexDirection: "row", marginTop: hp(2) }} >
                        <TouchableOpacity style={styles.saveButton} onPress={() => {
                            dispatch({
                                type: types.UPDATE_DUMMY_SAGA,
                                payload: {
                                    item: dummyParseData,
                                    editTitle: editTitle,
                                    editUserId: editUserId
                                }
                            })
                            setEditMode(!editMode);
                        }}>
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancelButton} onPress={() => {
                            setEditMode(!editMode);
                        }}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>

                </View> : null}

        </>
    );

}

const styles = StyleSheet.create({
    fieldContainer: {
        height: hpx(48),
        color: "#4E4AAD",
        fontSize: nf(26),
        backgroundColor: "#0EB2BF",
        padding: wpx(10),
        borderRadius: wpx(8),
        margin: wpx(8),
        fontWeight: "bold"
    },
    cancelButton: {
        width: wpx(75),
        borderRadius: wpx(10),
        height: hpx(35),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
        marginLeft: wpx(50),
    },
    saveButton: {
        width: wpx(75),
        borderRadius: wpx(10),
        height: hpx(35),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#4E4AAD",
        marginLeft: wpx(90),
    },
    mainView: {
        flex: 1,
        marginTop: hpx(20),
        alignItems: "center"
    },
    iconStyle: {
        fontSize: nf(30),
        color: "#4E4AAD"
    },
    dummyTextStyle: {
        fontSize: nf(30),
        color: "black"
    },
    buttonText: {
        color: "white",
        fontSize: nf(20)

    }

})
export default ApiDetails;