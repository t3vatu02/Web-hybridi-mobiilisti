import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { useTodos } from './hooks/useTodos';
import AddTask from './components/AddTask';
import TaskItem from './components/TaskItem';

export default function App() {

  const { tasks, addTask, toggleTask, removeTask } = useTodos();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>

      <AddTask addTask={addTask} />

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            toggleTask={toggleTask}
            removeTask={removeTask}
          />
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
