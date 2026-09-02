import React, { useState } from 'react';
import { Alert, FlatList, KeyboardAvoidingView, ListRenderItem, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';

interface Task {
  id: string;
  title: string;
  dueDate: string;
  completed: boolean;
}

interface Student {
  name: string;
  program: string;
}

export default function StudentTaskManager() {
  const student: Student = {
    name: 'Frank Christian J. Verzosa',
    program: 'BS Information Technology',
  };

  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Review', dueDate: '2026-09-02', completed: false },
    { id: '2', title: 'Study for Exam', dueDate: '2026-09-02', completed: true },
    { id: '3', title: 'Study for Quiz', dueDate: '2026-09-05', completed: true },
  ]);

  const [taskTitle, setTaskTitle] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>('');

  const pendingCount: number = tasks.filter((task) => !task.completed).length;
  const completedCount: number = tasks.filter((task) => task.completed).length;

  const handleAddTask = (): void => {
    if (!taskTitle.trim() || !dueDate.trim()) {
      Alert.alert('Validation Error', 'Please enter both a task title and a due date.');
      return;
    }

    const newTask: Task = {
      id: Date.now().toString(),
      title: taskTitle.trim(),
      dueDate: dueDate.trim(),
      completed: false,
    };

    setTasks([newTask, ...tasks]);
    setTaskTitle('');
    setDueDate('');
    Alert.alert('Success', 'Task added successfully!');
  };

  const handleToggleComplete = (id: string): void => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id: string): void => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const renderTaskItem: ListRenderItem<Task> = ({ item }) => (
    <View style={styles.taskItem}>
      <TouchableOpacity
        style={styles.taskInfo}
        onPress={() => handleToggleComplete(item.id)}
      >
        <View style={[styles.checkbox, item.completed && styles.checkedBox]}>
          {item.completed && <Text style={styles.checkmark}>✓</Text>}
        </View>
        <View style={styles.taskTextContainer}>
          <Text style={[styles.taskTitle, item.completed && styles.completedText]}>
            {item.title}
          </Text>
          <Text style={styles.taskDate}>Due: {item.dueDate}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDeleteTask(item.id)}
      >
        <Text style={styles.deleteButtonText}>✕</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <FlatList
          data={tasks}
          keyExtractor={(item: Task) => item.id}
          renderItem={renderTaskItem}
          keyboardShouldPersistTaps="handled"
          ListHeaderComponent={
            <View>
              <View style={styles.profileCard}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>{student.name.charAt(0)}</Text>
                </View>
                <Text style={styles.studentName}>{student.name}</Text>
                <Text style={styles.studentProgram}>{student.program}</Text>
              </View>

              <View style={styles.counterRow}>
                <View style={styles.counterCard}>
                  <Text style={styles.counterNumber}>{pendingCount}</Text>
                  <Text style={styles.counterLabel}>Pending Tasks</Text>
                </View>
                <View style={styles.counterCard}>
                  <Text style={styles.counterNumber}>{completedCount}</Text>
                  <Text style={styles.counterLabel}>Completed Tasks</Text>
                </View>
              </View>

              <View style={styles.formContainer}>
                <Text style={styles.sectionTitle}>Add New Task</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Task Title"
                  value={taskTitle}
                  onChangeText={(text: string) => setTaskTitle(text)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Due Date (YYYY-MM-DD)"
                  value={dueDate}
                  onChangeText={(text: string) => setDueDate(text)}
                />
                <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
                  <Text style={styles.addButtonText}>+ Add Task</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.sectionTitle}>My Task List</Text>
            </View>
          }
          contentContainerStyle={styles.listPadding}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No tasks found. Add one above!</Text>
          }
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F7',
  },
  listPadding: {
    padding: 16,
  },
  profileCard: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#34D399',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatarText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  studentName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3436',
  },
  studentProgram: {
    fontSize: 14,
    color: '#636E72',
  },
  counterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  counterCard: {
    flex: 0.48,
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 2,
  },
  counterNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#34D399',
  },
  counterLabel: {
    fontSize: 12,
    color: '#636E72',
  },
  formContainer: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2D3436',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DFE6E9',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    fontSize: 14,
    backgroundColor: '#FAFAFA',
  },
  addButton: {
    backgroundColor: '#34D399',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
  taskItem: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 1,
  },
  taskInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#34D399',
    marginRight: 12,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  checkedBox: {
    backgroundColor: '#34D399',
  },
  checkmark: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  taskTextContainer: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2D3436',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#B2BEC3',
  },
  taskDate: {
    fontSize: 12,
    color: '#636E72',
    marginTop: 2,
  },
  deleteButton: {
    padding: 8,
  },
  deleteButtonText: {
    color: '#FF7675',
    fontWeight: 'bold',
    fontSize: 16,
  },
  emptyText: {
    textAlign: 'center',
    color: '#B2BEC3',
    marginTop: 20,
  },
});
