import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, KeyboardAvoidingView } from 'react-native';



export default function App() {
  const [age, setAge] = useState('');
  const [lowerLimit, setLowerLimit] = useState(0);
  const [upperLimit, setUpperLimit] = useState(0);

  const calculateLimits = () => {
    const ageNum = parseFloat(age);

    if (isNaN(ageNum)) {
      setLowerLimit(0);
      setUpperLimit(0);
      return;
    }

    const lower = (220 - ageNum) * 0.65;
    const upper = (220 - ageNum) * 0.85;
    setLowerLimit(lower.toFixed(1));
    setUpperLimit(upper.toFixed(1));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.header}>Heart Rate Limits</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />

      <Button title="Calculate" onPress={calculateLimits} />

      <View style={styles.resultBox}>
        <Text style={styles.result}>Lower Limit: {lowerLimit}</Text>
        <Text style={styles.result}>Upper Limit: {upperLimit}</Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '60%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  resultBox: {
    marginTop: 30,
    alignItems: 'center',
  },
  result: {
    fontSize: 20,
    marginVertical: 5,
  },
});
