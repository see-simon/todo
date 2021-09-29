import React, { useState } from 'react'
import { Button, Text } from 'react-native-elements'
import firebase from 'firebase'
import { SafeAreaView, View, StyleSheet } from 'react-native'

const Todo = ({ todo }) => {



    const deleteTodo = () => {
        const todoRef = firebase.database().ref('Todo').child(todo.id)
        todoRef.remove();
    }




    return (
        <>

            <SafeAreaView>
                <View style={styles.container}>
                    <View>

                        <Text style={styles.names}>{todo.name} {'\n'} </Text>
                    </View>


                </View>
                <Button style={styles.itemLeft} onPress={deleteTodo} title="delete" />
            </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: 'blue',
        padding: 4,

    },
    container: {
        backgroundColor: '#77ba89'
    },
    itemLeft: {
        alignItems: 'center',
        backgroundColor: "#bbf08d",
        paddingLeft: 20,

    },
    names: {
        padding: 2,
        marginBottom: 20,
        backgroundColor: "yello",
    },

});
export default Todo
