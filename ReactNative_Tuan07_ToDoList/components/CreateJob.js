import React from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, updateJob } from '../redux/todoAction';
const AddJobScreen = ({route, navigation}) => {
    const [job, setJob] = useState('');
    const dispatch = useDispatch();
    const isUpdate = route.params?.isUpdate || false;
    const item = route.params?.item || {};
    const handleAddJob = () => {
        if(isUpdate){
            dispatch(updateJob({...item, title: job}));
            navigation.navigate('ToDoListScreen');
        }else{
            dispatch(addTodo(job));
            navigation.navigate('ToDoListScreen');
        }
    }

    useEffect(()=>{
        if(isUpdate){
            setJob(item.title);
        }
    },[]);

  return (
    <SafeAreaView style={styles.containerAdd}>
      <Text style={styles.title}>ADD YOUR JOB</Text>
      
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/job-icon.png')} // Make sure to have this icon in your assets
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Input your job"
          placeholderTextColor="#999"
          onChangeText={(value) => setJob(value)}
          value={job}
        />
      </View>
      
      <Pressable style={styles.button} onPress={()=>handleAddJob()}>
        <Text style={styles.buttonText}>FINISH →</Text>
      </Pressable>
      
      <View style={{alignItems: 'center', justifyContent:'center'}}>
        <Image
            source={require('../assets/todo.png')} // Make sure to have this image in your assets
            style={styles.notepadImage}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerAdd: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '100%',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#40E0D0', // Turquoise color similar to the image
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  notepadImage: {
    width: 150,
    height: 150,
    marginTop: 40,
  },
});

export default AddJobScreen;