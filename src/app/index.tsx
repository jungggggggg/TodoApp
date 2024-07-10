import { View, Text, StyleSheet, FlatList, Pressable, TextInput, KeyboardAvoidingView, Platform, } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import NewTaskInput from '../components/NewTaskInput'
import { SafeAreaView } from 'react-native-safe-area-context'


export type Task = {
    title: string;
    isFinished: boolean;
}


const dummyTasks: Task[] = [{
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
    const [tasks, setTasks] = useState<Task[]>(dummyTasks);


    const onItemPressed = (index: number) => {
        setTasks((currentTasks) => {
            const updatedTasks = [...currentTasks];
            currentTasks[index].isFinished = !currentTasks[index].isFinished;
            return updatedTasks;
        })
    }

    return (
        <KeyboardAvoidingView 
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.page}
        >
            <SafeAreaView style={{ flex: 1 }}>
            <FlatList data={tasks}
            contentContainerStyle={{ gap: 5, padding: 10 }}
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
                ListFooterComponent={() => <NewTaskInput 
                    onAdd={(newTodo: Task) => 
                        setTasks(currentTasks => [...currentTasks, newTodo]
                        )} 
                        />
                    }
            />
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    page: {
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
        flex: 1,
    },
})

export default TodoScreen;