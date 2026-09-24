import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { deleteToken, getToken, saveToken } from './src/services/tokenStorage';
import { getCurrentUser, loginUser } from './src/storage/authService';
export default function App() {
  const [username, setUsername] = useState<string>('emilys');
  const [password, setPassword] = useState<string>('emilyspass');
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    checkStoredSession();
  }, []);

  async function checkStoredSession() {
    try {
      setLoading(true);
      const token = await getToken();
      if (token) {
        const userData = await getCurrentUser(token);
        setProfile(userData);
      }
    } catch (err) {
      await deleteToken();
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin() {
    setError('');
    setLoading(true);
    try {
      console.log('Step 1: Attempting login for user:', username);
      const data = await loginUser(username, password);
      console.log('Step 2: Login successful, token received.');

      await saveToken(data.accessToken);
      console.log('Step 3: Token saved securely.');

      const userData = await getCurrentUser(data.accessToken);
      console.log('Step 4: User profile fetched successfully, updating state...');

      setProfile(userData);
    } catch (err: any) {
      console.error('LOGIN ERROR:', err.message);
      setError(err.message || 'Login failed. Check your username and password.');
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    try {
      await deleteToken();
      setProfile(null);
      setError('');
    } catch (err) {
      setError('Failed to log out cleanly.');
    }
  }

  if (loading && !profile) {
    return (
      <SafeAreaView style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#6C5CE7" />
        <Text style={styles.loadingText}>Restoring session...</Text>
      </SafeAreaView>
    );
  }

  if (!profile) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.card}>
          <Text style={styles.headerTitle}>Secure Profile</Text>
          <Text style={styles.subtitle}>Please sign in to continue</Text>

          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#999"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity
            style={[styles.button, loading && styles.disabledButton]}
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Text style={styles.buttonText}>Login</Text>
            )}
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.profileCard}>
        {profile.image && (
          <Image source={{ uri: profile.image }} style={styles.avatar} />
        )}
        <Text style={styles.profileName}>
          {profile.firstName} {profile.lastName}
        </Text>
        <Text style={styles.profileMeta}>@{profile.username}</Text>
        <Text style={styles.profileMeta}>{profile.email}</Text>
        <Text style={styles.profileMeta}>ID: {profile.id}</Text>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F7',
    justifyContent: 'center',
    padding: 20,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F5F7',
  },
  loadingText: {
    marginTop: 10,
    color: '#636E72',
    fontSize: 14,
  },
  card: {
    backgroundColor: '#FFF',
    padding: 24,
    borderRadius: 16,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D3436',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#636E72',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DFE6E9',
    borderRadius: 8,
    padding: 12,
    marginBottom: 14,
    fontSize: 14,
    backgroundColor: '#FAFAFA',
    color: '#2D3436',
  },
  button: {
    backgroundColor: '#6C5CE7',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 6,
  },
  disabledButton: {
    backgroundColor: '#b2bec3',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorText: {
    color: '#FF7675',
    marginBottom: 12,
    fontSize: 14,
  },
  profileCard: {
    backgroundColor: '#FFF',
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 3,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 16,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2D3436',
    marginBottom: 4,
  },
  profileMeta: {
    fontSize: 14,
    color: '#636E72',
    marginBottom: 6,
  },
  logoutButton: {
    backgroundColor: '#FF7675',
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  logoutButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
});