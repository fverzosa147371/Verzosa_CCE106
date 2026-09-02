import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function CounterAppScreen({ incrementBy = 1 }) {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(prev => prev + incrementBy);
  };

  const handleDecrease = () => {
    setCount(prev => (prev - incrementBy >= 0 ? prev - incrementBy : 0));
  };

  const handleReset = () => {
    setCount(0);
  };

return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        <Text style={styles.headerTitle}>Counter App</Text>
        <Text style={styles.headerSubtitle}>Optional Assignment Activity</Text>

        <View style={styles.displayCard}>
          <Text style={styles.counterValue}>{count}</Text>
        </View>

        <View style={styles.buttonContainer}>
          
          <TouchableOpacity 
            style={[styles.button, styles.increaseBtn]} 
            onPress={handleIncrease}
          >
            <Text style={styles.buttonTextDark}>Increase</Text>
          </TouchableOpacity>


          <TouchableOpacity 
            style={[styles.button, styles.decreaseBtn]} 
            onPress={handleDecrease}
          >
            <Text style={styles.buttonTextDark}>Decrease</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, styles.resetBtn]} 
            onPress={handleReset}
          >
            <Text style={styles.buttonTextLight}>Reset</Text>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1E1E2C',
  },
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 40,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#A0A0B0',
    marginBottom: 24,
    textAlign: 'center',
  },
  displayCard: {
    backgroundColor: '#2A2A3D',
    borderRadius: 16,
    paddingVertical: 50,
    paddingHorizontal: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    width: '100%',
    borderWidth: 1,
    borderColor: '#3A3A4D',
  },
  counterValue: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  buttonContainer: {
    width: '100%',
    gap: 12,
  },
  button: {
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  increaseBtn: {
    backgroundColor: '#A855F7', 
  },
  decreaseBtn: {
    backgroundColor: '#FBBF24', 
  },
  resetBtn: {
    backgroundColor: '#EF4444', 
  },
  buttonTextDark: {
    color: '#1E1E2C',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextLight: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
