import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TaskItem({ task, toggleTask, removeTask }) {
  return (
    <TouchableOpacity
      onPress={() => toggleTask(task.id)}
      onLongPress={() => removeTask(task.id)}
    >
      <Text style={[styles.text, task.done && styles.done]}>
        {task.text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingVertical: 10
  },
  done: {
    textDecorationLine: "line-through",
    color: "grey"
  }
});
