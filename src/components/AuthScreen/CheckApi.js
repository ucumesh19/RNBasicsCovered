import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { hp, wp, hpx, wpx, nf } from '../../constants/constants';
import Header from '../../common/Header';

const CheckApi = () => {

    const dummySagaData = useSelector((state) => state.dummyData);
    const navigation = useNavigation();
    const renderItemFunc = ({ item, index }) => (
        <TouchableOpacity onPress={() => {
            navigation.navigate('ApiDetails', {
                id: item.id
            })
        }}>
            <View style={styles.listView}>
                <Text style={styles.textStyle1}>{item.id} </Text>
                <View style={{ marginHorizontal: wpx(10) }}>
                    <Text style={styles.textStyle2}>{item.title}  </Text>
                </View>
            </View>
        </TouchableOpacity>
    )

    // useEffect(() => {
    //     alert('Dumy Saga Data')
    // }, [dummySagaData])
    return (
        <>
            <Header name="List:API" />
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => {
                    console.log(dummySagaData);
                }}>
                    <Text>Touch ME</Text>
                </TouchableOpacity>
                <FlatList
                    data={dummySagaData}
                    renderItem={renderItemFunc}
                />

            </View>
        </>

    );
}

const styles = StyleSheet.create({
    listView: {
        flexDirection: "row",
        margin: wpx(12)
    },
    textStyle1: {
        fontSize: nf(20),
        fontWeight: "bold"

    },
    textStyle2: {
        fontSize: nf(20),
        color: "blue"

    }


})
export default CheckApi