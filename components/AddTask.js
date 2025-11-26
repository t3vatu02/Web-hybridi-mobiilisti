import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function AddTask({ addTask }) {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="New task..."
        value={text}
        onChangeText={setText}
        style={styles.input}
      />
      <Button title="Add" onPress={() => {
        addTask(text);
        setText("");
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 15
  },
  input: {
    flex: 1,
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 5
  }
});
