import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'


const dummyTasks = [{
    title: 'Setup structure',
    isFinished: true,
},
{
    title: 'Render a list of tasks',
    isFinished: false,
},
{
    title: 'Add a new tasks',
    isFinished: false,
},
{
    title: 'Change the status of a task',
    isFinished: false,
},
{
    title: 'Separete in 2 tabs: todo, and complete',
    isFinished: false,
},
]

const TodoScreen = () => {
    const [tasks, setTasks] = useState(dummyTasks);

    const onItemPressed = (index: number) => {
        setTasks((currentTasks) => {
            const updatedTasks = [...currentTasks];
            currentTasks[index].isFinished = !currentTasks[index].isFinished;
            return updatedTasks;
        })
    }

    return (
        <View style={styles.page}>

            <FlatList data={tasks}
            contentContainerStyle={{ gap: 5 }}
                renderItem={({ item, index }) => (
                    <Pressable onPress={() => onItemPressed(index)} style={styles.taskContainer}>
                        <MaterialCommunityIcons
                        name={item.isFinished 
                            ? "checkbox-marked-circle-outline" 
                            : "checkbox-blank-circle-outline"
                        }
                        size={24}
                        color="dimgray"
                        />
                        <Text style={[styles.taskTitle, {textDecorationLine: item.isFinished ? 'line-through' : 'none',}]}>
                            {item.title}
                            </Text>
                    </Pressable>
                )}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 15,
        backgroundColor: 'white',
        flex: 1,
    },
    taskContainer: {
        padding: 5,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: 'gray',
    },
    taskTitle: {
        fontFamily: 'InterSemi',
        fontSize: 15,
        color: 'dimgray',
    },
})

export default TodoScreen;