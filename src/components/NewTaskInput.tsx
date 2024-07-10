import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useState } from "react";
import { Task } from "../app/index";

type NewTaskInput = {
    onAdd: (newTask: Task) => void;
}

const NewTaskInput = ({ onAdd }: NewTaskInput) => {

    const [newTask, setNewTask] = useState('');

    return (
        <View style={styles.taskContainer}>
            <MaterialCommunityIcons
                name="checkbox-blank-circle-outline"
                size={24}
                color="dimgray"
            />
            <TextInput
                onEndEditing={() => {
                    onAdd({ title: newTask, isFinished: false })
                    setNewTask('');
                }}
                value={newTask} onChangeText={setNewTask} style={styles.input} placeholder='Todo...' />
        </View>
    )
}

const styles = StyleSheet.create({
    taskContainer: {
        padding: 5,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: 'gray',
    },
    input: {
        fontFamily: 'InterSemi',
        fontSize: 15,
        color: 'dimgray',
        flex: 1,
    },
})

export default NewTaskInput;


