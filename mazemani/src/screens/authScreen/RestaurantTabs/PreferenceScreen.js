import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TextInput,
  ProgressCircle,
} from 'react-native';
import React, {useState} from 'react';

function PreferenceScreen() {
  // State variable to keep track of whether the form is open or closed
  const [isUnlocked, setIsUnlocked] = useState(false);
  // State variable to keep track of the completion percentage of the form
  const [completion, setCompletion] = useState(0);

  // State variables to keep track of the values of the required fields
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');

  // Function to handle the logic for unlocking the form
  const handleUnlock = () => {
    if (field1 !== '' && field2 !== '') {
      setIsUnlocked(true);
      setCompletion(100);
    }
  };

  // Function to handle the logic for calculating the completion percentage of the form
  const handleCompletion = () => {
    let filledFields = 0;
    if (field1 !== '') {
      filledFields += 1;
    }
    if (field2 !== '') {
      filledFields += 1;
    }
    const totalFields = 2;
    const percentage = (filledFields / totalFields) * 100;
    setCompletion(percentage);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Field 1</Text>
        <TextInput
          value={field1}
          onChangeText={text => {
            setField1(text);
            handleCompletion();
          }}
          style={{backgroundColor: 'red', padding: 15, margin: 10}}
        />
        <Text>Field 2</Text>
        <TextInput
          value={field2}
          onChangeText={text => {
            setField2(text);
            handleCompletion();
          }}
          style={{backgroundColor: 'red', padding: 15, margin: 10}}
        />
        <TouchableOpacity onPress={handleUnlock}>
          <Text>Unlock Form</Text>
        </TouchableOpacity>
      </View>
      {isUnlocked && (
        <View>
          <TouchableOpacity onPress={() => setIsUnlocked(!isUnlocked)}>
            <Text>Form Header</Text>
          </TouchableOpacity>
          <View>
            <Text>Form Content</Text>
            <ProgressCircle
              percent={completion}
              radius={30}
              borderWidth={8}
              color="#3399FF"
              shadowColor="#999"
              bgColor="#fff">
              <Text style={{fontSize: 18}}>{`${completion}%`}</Text>
            </ProgressCircle>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

export default PreferenceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d5d5d5',
  },
});
