import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';

export default function SimpleCalculator() {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [message, setMessage] = useState('');

  
  const calculate = (operator: string) => {
    // 1. Validate empty inputs
    if (num1.trim() === '' || num2.trim() === '') {
      setMessage('Please enter numeric values.');
      setResult(null);
      return;
    }

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    // 2. Validate invalid input (non-numeric text)
    if (isNaN(n1) || isNaN(n2)) {
      setMessage('Invalid input. Please enter valid numbers.');
      setResult(null);
      return;
    }

    let res = 0;

    if (operator === '+') {
      res = n1 + n2;
    } else if (operator === '-') {
      res = n1 - n2;
    } else if (operator === '*') {
      res = n1 * n2;
    } else if (operator === '/') {
      // 3. Prevent division by zero
      if (n2 === 0) {
        setMessage('Error: Division by zero is not allowed.');
        setResult(null);
        return;
      }
      res = n1 / n2;
    }

    setResult(res);
    setMessage('');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        
        <Text style={styles.headerTitle}>===========================</Text>
        <Text style={styles.headerTitle}>Simple Calculator</Text>
        <Text style={styles.headerSubtitle}>Alternative Mini Project</Text>
        <Text style={styles.headerTitle}>===========================</Text>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Enter Numbers</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Enter first number..."
            placeholderTextColor="#888899"
            keyboardType="numeric"
            value={num1}
            onChangeText={setNum1}
          />

          <TextInput
            style={styles.input}
            placeholder="Enter second number..."
            placeholderTextColor="#888899"
            keyboardType="numeric"
            value={num2}
            onChangeText={setNum2}
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Choose Operation</Text>
          
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.opButton} onPress={() => calculate('+')}>
              <Text style={styles.opButtonText}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.opButton} onPress={() => calculate('-')}>
              <Text style={styles.opButtonText}>-</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.opButton} onPress={() => calculate('*')}>
              <Text style={styles.opButtonText}>×</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.opButton} onPress={() => calculate('/')}>
              <Text style={styles.opButtonText}>÷</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Result & Message Display Card */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Output</Text>
          
          {message ? (
            <Text style={styles.errorText}>{message}</Text>
          ) : (
            <Text style={styles.resultText}>
              Result: {result !== null ? result : '---'}
            </Text>
          )}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1E1E2C',
  },
  container: {
    flexGrow: 1,
    padding: 16,
    paddingTop: 40,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    marginTop: 20,
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#A0A0B0',
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#2A2A3D',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    width: '100%',
  },
  sectionTitle: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'left',
  },
  input: {
    backgroundColor: '#1E1E2C',
    color: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#3A3A4D',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  opButton: {
    backgroundColor: '#A855F7',
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  opButtonText: {
    color: '#1E1E2C',
    fontSize: 20,
    fontWeight: 'bold',
  },
  resultText: {
    color: '#A855F7',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: '#FF5555',
    fontSize: 14,
    fontWeight: '600',
  },
});
