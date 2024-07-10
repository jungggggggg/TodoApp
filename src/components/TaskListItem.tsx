import { Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Task } from "../app/index";


type TaskListItem = {
    task: Task
    onItemPressed: () => void
}

const TaskListItem = ({ task, onItemPressed }: TaskListItem) => {
    return (
        <Pressable onPress={onItemPressed} style={styles.taskContainer}>
            <MaterialCommunityIcons
                name={task.isFinished
                    ? "checkbox-marked-circle-outline"
                    : "checkbox-blank-circle-outline"
                }
                size={24}
                color={
                    task.isFinished ? 'gray' : 'dimgray'
                }
            />
            <Text style={[styles.taskTitle, 
                { textDecorationLine: task.isFinished 
                ? 'line-through' : 'none', color: task.isFinished 
                ? 'lightgray' : 'dimgray', }]}>
                {task.title}
            </Text>
        </Pressable>
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
    taskTitle: {
        fontFamily: 'InterSemi',
        fontSize: 15,
        color: 'dimgray',
        flex: 1,
    },
})

export default TaskListItem

