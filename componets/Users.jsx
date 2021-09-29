import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import { TextInput, Text, Button } from 'react-native-elements'
import { SafeAreaView, View, StyleSheet } from 'react-native'
import Todo from './Todo'

const Users = () => {

    const [todolist, setTodolist] = useState()







    useEffect(() => {
        const todoRef = firebase.database().ref('Todo');
        todoRef.on('value', (snapshot) => {
            const todos = snapshot.val()

            const todolist = [];
            for (let id in todos) {
                todolist.push({ id, ...todos[id] })

            }
            setTodolist(todolist)
        })



    }, [])



    const deleteTodoAll = () => {
        const todoRef = firebase.database().ref('Todo')
        todoRef.remove();
    }


    return (

        <SafeAreaView>

            <View style={styles.container}>
                <Text style={styles.itemLeft}>list of users </Text>
                <Text>
                    {'\n'}
                </Text>
                <Text>

                    {

                        todolist ? todolist.map((action, index) => <Todo todo={action} key={index} />) : ''

                    }

                </Text>
                <View>

                    <Button style={styles.deleteAll} onPress={deleteTodoAll} title="Delete all" />
                </View>


            </View>

        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#77ba89',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    container: {
        backgroundColor: '#77ba89'
    },
    itemLeft: {
        
        alignItems: 'center',

        paddingLeft: 550,
        textDecorationColor: "#bbf08d"
    },
    deleteAll:{
        backgroundColor:"#77ba89",
        alignContent:'center',
        padding:5,
        width:100,
        height:100,
        
        
    },
    
});
export default Users
