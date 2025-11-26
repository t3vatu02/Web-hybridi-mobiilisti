import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddTask from './components/AddTask';
import TaskItem from './components/TaskItem';

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const stored = await AsyncStorage.getItem("TASKS");
    if (stored) {
      setTasks(JSON.parse(stored));
    }
  };

  const saveTasks = async (updatedList) => {
    await AsyncStorage.setItem("TASKS", JSON.stringify(updatedList));
  };

  const addTask = (text) => {
    if (!text.trim()) return;
    const newTask = {
      id: Date.now().toString(),
      text: text,
      done: false,
    };
    const updated = [...tasks, newTask];
    setTasks(updated);
    saveTasks(updated);
  };

  const toggleTask = (id) => {
    const updated = tasks.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    );
    setTasks(updated);
    saveTasks(updated);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>

      <AddTask addTask={addTask} />

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} toggleTask={toggleTask} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    padding: 20
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 20
  }
});
