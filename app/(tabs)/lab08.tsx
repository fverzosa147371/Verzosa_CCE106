import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Student {
  id: string;
  name: string;
  status: 'Present' | 'Absent' | null;
}

const INITIAL_STUDENTS: Student[] = [
  { id: '1', name: 'Frank Christian Verzosa', status: null },
  { id: '2', name: 'Christian Tj Salas', status: null },
  { id: '3', name: 'Troy Angelo Montero', status: null },
  { id: '4', name: 'Jeter Celestial', status: null },
  { id: '5', name: 'Carlo Abandula', status: null },
  { id: '6', name: 'Lhindex Khim Gamones', status: null },
];

export default function Lab08Screen() {
  const [students, setStudents] = useState<Student[]>(INITIAL_STUDENTS);
  const [presentCount, setPresentCount] = useState(0);
  const [absentCount, setAbsentCount] = useState(0);

  useEffect(() => {
    const present = students.filter((s) => s.status === 'Present').length;
    const absent = students.filter((s) => s.status === 'Absent').length;
    setPresentCount(present);
    setAbsentCount(absent);
  }, [students]);

  const handleStatusChange = (id: string, status: 'Present' | 'Absent') => {
    setStudents((prev) =>
      prev.map((student) => (student.id === id ? { ...student, status } : student))
    );
  };

  const renderItem = ({ item }: { item: Student }) => (
    <View style={styles.studentRow}>
      <Text style={styles.studentName}>{item.name}</Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={[
            styles.statusButton,
            styles.presentButton,
            item.status === 'Present' && styles.activePresent,
          ]}
          onPress={() => handleStatusChange(item.id, 'Present')}
        >
          <Text style={[styles.buttonText, item.status === 'Present' && styles.activeText]}>P</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.statusButton,
            styles.absentButton,
            item.status === 'Absent' && styles.activeAbsent,
          ]}
          onPress={() => handleStatusChange(item.id, 'Absent')}
        >
          <Text style={[styles.buttonText, item.status === 'Absent' && styles.activeText]}>A</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Student Attendance</Text>

      <View style={styles.counterContainer}>
        <View style={[styles.card, styles.presentCard]}>
          <Ionicons name="checkmark-circle" size={24} color="#03dac6" />
          <Text style={styles.cardLabel}>Present (P)</Text>
          <Text style={styles.cardValue}>{presentCount}</Text>
        </View>

        <View style={[styles.card, styles.absentCard]}>
          <Ionicons name="close-circle" size={24} color="#cf6679" />
          <Text style={styles.cardLabel}>Absent (A)</Text>
          <Text style={styles.cardValue}>{absentCount}</Text>
        </View>
      </View>

      <View style={styles.listHeader}>
        <Text style={styles.listHeaderText}>Names</Text>
        <Text style={styles.listHeaderText}>P / A</Text>
      </View>

      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: '#1e1e2c',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 6,
    borderWidth: 1,
    borderColor: '#333',
  },
  presentCard: {
    borderTopWidth: 4,
    borderTopColor: '#03dac6',
  },
  absentCard: {
    borderTopWidth: 4,
    borderTopColor: '#cf6679',
  },
  cardLabel: {
    color: '#aaa',
    fontSize: 12,
    marginTop: 6,
    textTransform: 'uppercase',
  },
  cardValue: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 4,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  listHeaderText: {
    color: '#888',
    fontWeight: 'bold',
    fontSize: 14,
  },
  listContainer: {
    paddingBottom: 20,
  },
  studentRow: {
    flexDirection: 'row',
    backgroundColor: '#1a1a1a',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#262626',
  },
    studentName: {
    color: '#fff',
    fontSize: 15,
    flex: 1,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 8,
  },
  statusButton: {
    width: 38,
    height: 38,
    borderRadius: 8,
    backgroundColor: '#2a2a2a',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#444',
  },
  presentButton: {},
  absentButton: {},
  activePresent: {
    backgroundColor: '#03dac6',
    borderColor: '#03dac6',
  },
  activeAbsent: {
    backgroundColor: '#cf6679',
    borderColor: '#cf6679',
  },
  buttonText: {
    color: '#aaa',
    fontWeight: 'bold',
    fontSize: 16,
  },
  activeText: {
    color: '#121212',
  },
});