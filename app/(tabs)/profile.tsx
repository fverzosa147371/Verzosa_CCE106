import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
    const [name, setName] = useState('Frank Christian Verzosa');
    const [email, setEmail] = useState('fverzosa@umindanao.edu');
    const [error, setError] = useState('');
    const [isSaved, setIsSaved] = useState(false);
  
    const handleSave = () => {
      if (!name.trim() || !email.trim()) {
        setError('All fields are required.');
        setIsSaved(false);
        return;
      }
      if (!email.includes('@')) {
        setError('Please enter a valid email address containing "@".');
        setIsSaved(false);
        return;
      }
      setError('');
      setIsSaved(true);
    };
  
    return (
      <View style={styles.container}>
        <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.avatar} />
       
        <Text style={styles.label}>Full Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />
  
        <Text style={styles.label}>Email Address</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />
  
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        {isSaved ? <Text style={styles.successText}>Profile saved successfully!</Text> : null}
  
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#121212', padding: 16, alignItems: 'center' },
    avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 20 },
    label: { alignSelf: 'flex-start', color: '#aaa', marginBottom: 4, marginTop: 12 },
    input: { width: '100%', backgroundColor: '#222', color: '#fff', padding: 12, borderRadius: 8 },
    errorText: { color: '#cf6679', marginTop: 10 },
    successText: { color: '#03dac6', marginTop: 10, fontWeight: 'bold' },
    saveButton: { backgroundColor: '#bb86fc', width: '100%', padding: 14, borderRadius: 8, alignItems: 'center', marginTop: 20 },
    buttonText: { color: '#121212', fontWeight: 'bold' },
  });
  