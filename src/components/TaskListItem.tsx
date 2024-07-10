import { Text, Pressable, StyleSheet, View, Animated } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Task } from "../app/index";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from "react-native-gesture-handler";


const AnimatedView = Animated.createAnimatedComponent(View);



const RightActions = ({ 
    dragAnimatedValue,
    onDelete,
 }:{
    dragAnimatedValue: Animated.AnimatedInterpolation<string | number>;
    onDelete: () => void;
}) => {
    const animatedStyles = {
        transform: [
            {
                translateX: dragAnimatedValue.interpolate({
                    inputRange: [-40, 0],
                    outputRange: [0, 40],
                    extrapolate: 'clamp',
                })
            }
        ]
    }

    return (
    <AnimatedView
     style={[{ backgroundColor: 'crimson', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 10 } ,animatedStyles]}>
    <MaterialCommunityIcons onPress={onDelete} name="delete" size={20} color="white" />
</AnimatedView>
)
}

type TaskListItem = {
    task: Task
    onItemPressed: () => void
    onDelete: () => void
}


const TaskListItem = ({ task, onItemPressed, onDelete }: TaskListItem) => {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
        <Swipeable
        renderRightActions={(progressAnimatedValue, dragAnimatedValue) => (
        <RightActions dragAnimatedValue={dragAnimatedValue} onDelete={onDelete} />
    )}>

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
        </Swipeable>
        </GestureHandlerRootView>
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

