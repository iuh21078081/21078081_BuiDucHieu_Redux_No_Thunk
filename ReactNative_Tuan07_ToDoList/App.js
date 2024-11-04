import { Provider } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Home from './components/Home';
import ToDoListScreen from './components/ToDoListScreen';
import AddJobScreen from './components/CreateJob';
import store from './redux/store';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
     <NavigationContainer>
        <Stack.Navigator  screenOptions={({navigation, route})=>({

              headerLeft: () => (
                <TouchableOpacity 
                  onPress={() => navigation.goBack()}
                >
                  <FontAwesome name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
              ),
              headerRight: () =>  {
                  const userName = route.params?.username || 'Twinkle';
              
                return (
                <View style={styles.user}>
                    <FontAwesome name="user-circle" size={24} color="black" />
                    <View>
                      <Text style={styles.greeting}>Hi {userName}</Text>
                      <Text style={styles.subText}>Have a great day ahead</Text>
                    </View>
                </View>
                
              )}
        })}>
          <Stack.Screen name="home" component={Home} options={{ headerShown:false}} />
          <Stack.Screen name="ToDoListScreen" component={ToDoListScreen} options={{title:""}}/>
          <Stack.Screen name="AddJobScreen" component={AddJobScreen} options={{title:""}}/>
        </Stack.Navigator>
     </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    gap: 10, // Tạo khoảng cách giữa avatar và text
  },
  greeting: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  subText: {
    fontSize: 14,
    color: '#9095A0',
  },
});
