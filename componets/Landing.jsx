import React, { useEffect, useState } from 'react'
import { Button } from 'react-native-elements'
import firebase from './firebase'
import { SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native'

const Landing = () => {

    const [name, setName] = useState()
    const [surname, setSurname] = useState();
    const [age, setAge] = useState();
    const [location, setLocation] = useState();


    const handleOnChane = (e) => {
        setName(e.target.value)

    }
    const surnameHandle = (e) => {
        setSurname(e.target.value)
    }
    const ageHandle = (e) => {
        setAge(e.target.value)
    }
    const locationHandle = (e) => {
        setLocation(e.target.value)
    }
    const createUser = () => {
        const todoRef = firebase.database().ref("Todo")
        const todo = {
            name,
            surname,
            age,
            location
        }
        todoRef.push(todo)
    }




    return (
        <>


            <View style={styles.container}>


                <View style={styles.item}>
                    <Text>
                        {'\n'}
                    </Text>
                    <TextInput onChange={handleOnChane} value={name} placeholder="Enter your name" />
                    <TextInput onChange={surnameHandle} value={surname} placeholder="Enter your surname" />
                    <TextInput onChange={ageHandle} value={age} placeholder="Enter your age" />
                    <TextInput onChange={locationHandle} value={location} placeholder="Enter your location" />



                    <Button onPress={createUser} title="Adder User" />

                </View>
            </View>
        </>
    )

}

const styles = StyleSheet.create({
    item: {

        backgroundColor: '#bbf08d',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        
        
    },
    container: {
        backgroundColor: '#2a5736'
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },

});
export default Landing
