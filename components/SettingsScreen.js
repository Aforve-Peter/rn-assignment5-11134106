import React from 'react';
import { View, Text, StyleSheet, Switch, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const settingsOptions = [
  { title: 'Language', icon: 'chevron-forward-outline' },
  { title: 'My Profile', icon: 'chevron-forward-outline' },
  { title: 'Contact Us', icon: 'chevron-forward-outline' },
  { title: 'Change Password', icon: 'chevron-forward-outline' },
  { title: 'Privacy Policy', icon: 'chevron-forward-outline' },
];

const SettingsScreen = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Settings</Text>
      {settingsOptions.map((option, index) => (
        <TouchableOpacity key={index} style={styles.optionContainer}>
          <Text style={styles.optionText}>{option.title}</Text>
          <Ionicons name={option.icon} size={20} color="gray" />
        </TouchableOpacity>
      ))}
      <View style={styles.themeContainer}>
        <Text style={styles.optionText}>Theme</Text>
        <Switch
          value={isDarkTheme}
          onValueChange={value => setIsDarkTheme(value)}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  optionText: {
    fontSize: 16,
  },
  themeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    marginTop: 20,
  },
});

export default SettingsScreen;