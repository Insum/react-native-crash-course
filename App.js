import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHndeler(enteredText){
    setEnteredGoalText(enteredText);
  };

  function addGoalHandeler(){
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredGoalText]);    
  };



  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainers}>
        <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHndeler}></TextInput>
        <Button title='Add Goal' onPress={addGoalHandeler}></Button>
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal) => <Text key={goal}>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainers: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  }
});
