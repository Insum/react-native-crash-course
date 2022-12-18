import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainers}>
        <TextInput style={styles.textInput} placeholder='Your course goal!'></TextInput>
        <Button title='Add Goal'></Button>
      </View>
      <View>
        <Text>List of goals....</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    padding: 50,
  },
  inputContainers: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding: 8
  }
});
