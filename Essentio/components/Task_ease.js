import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, ScrollView } from 'react-native';

function Task_ease(props) {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleAddTask = () => {
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    const handleRemoveTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <View style={styles.theme}>
            <View style={styles.header}>
                <Text style={styles.heading}>Managing Tasks</Text>
                <Text style={styles.heading}>Made Easy!</Text>
            </View>
            <View style={styles.taskAdd}>
                <TextInput 
                    style={styles.enterTask} 
                    placeholder='Forgot to take your meds.' 
                    value={task} 
                    onChangeText={setTask} 
                />
                <Pressable style={styles.addButtonContainer} onPress={handleAddTask}>
                    <Text style={styles.addButtonText}>Add Task!</Text>
                </Pressable>
            </View>
            <ScrollView style={styles.taskList}>
                {tasks.map((task, index) => (
                    <View key={index} style={styles.taskItemContainer}>
                        <Text style={styles.taskItem}>{task}</Text>
                        <Pressable style={styles.deleteButton} onPress={() => handleRemoveTask(index)}>
                            <Text style={styles.deleteButtonText}>Delete</Text>
                        </Pressable>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    theme: {
        backgroundColor: '#3333cc',
        flex: 1,
        padding: 20,
    },
    header: {
        borderColor: '#51E5FF',
        borderBottomWidth: 7,
        borderRadius: 10,
        marginBottom: 20,
    },
    heading: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '700',
        color: '#51E5FF',
    },
    taskAdd: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    enterTask: {
        backgroundColor: '#51E5FF',
        borderRadius: 10,
        textAlign: 'center',
        width: 200,
        height: 40,
        padding: 10,
        margin: 20,
        flex: 3,
    },
    addButtonContainer: {
        backgroundColor: '#51E5FF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 20,
    },
    addButtonText: {
        color: '#3333cc',
        fontWeight: '700',
    },
    taskList: {
        marginTop: 20,
    },
    taskItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#51E5FF',
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
    },
    taskItem: {
        color: '#3333cc',
        fontWeight: '700',
        flex: 1,
    },
    deleteButton: {
        backgroundColor: '#ff6666',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    deleteButtonText: {
        color: 'white',
        fontWeight: '700',
    },
});

export default Task_ease;
