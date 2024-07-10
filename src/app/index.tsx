import { View, Text, StyleSheet, FlatList, Pressable, TextInput, KeyboardAvoidingView, Platform, } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import NewTaskInput from '../components/NewTaskInput'
import { SafeAreaView } from 'react-native-safe-area-context'
import TaskListItem from '../components/TaskListItem'
import { useHeaderHeight } from '@react-navigation/elements';





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
    const headerHeight = useHeaderHeight();

    const [tasks, setTasks] = useState<Task[]>(dummyTasks);


    const onItemPressed = (index: number) => {
        setTasks((currentTasks) => {
            const updatedTasks = [...currentTasks];
            currentTasks[index].isFinished = !currentTasks[index].isFinished;
            return updatedTasks;
        })
    }

    const deleteTask = (index: number) => {
        setTasks((currentTasks) => {
            const updatedTasks = [...currentTasks];
            updatedTasks.splice(index, 1);
            return updatedTasks;
        })
    }

    return (
        <KeyboardAvoidingView 
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.page}
        >
            <SafeAreaView style={{ flex: 1, paddingTop: headerHeight }}>
            <FlatList data={tasks}
            contentContainerStyle={{ gap: 5, padding: 10, marginTop: 10 }}
            keyExtractor={(item) => item.title}
                renderItem={({ item, index }) => 
                <TaskListItem task={item} onItemPressed={() => onItemPressed(index)} onDelete={() => deleteTask(index)} />}
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
})

export default TodoScreen;