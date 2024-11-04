import { StyleSheet, Text, View, TextInput, Pressable, FlatList } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useIsFocused } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, deleteTodo } from '../redux/todoAction';
import { useEffect } from 'react';

const apiLink = 'https://6703edfdab8a8f8927323f9c.mockapi.io/api/todolist';

export default function ToDoListScreen({ navigation }) {
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todos) || [];
    const isFocus = useIsFocused();

    useEffect(() => {
        if (isFocus) {
            fetchTodoData();
        }
    }, [isFocus]);

    const fetchTodoData = async () => {
        try {
            const response = await fetch(apiLink);
            const data = await response.json();
            dispatch(fetchTodos(data));
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    const handleRemove = async (item) => {
        try {
            await fetch(`${apiLink}/${item.id}`, { method: 'DELETE' });
            dispatch(deleteTodo(item.id));
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    const TodoComponent = ({ item }) => (
        <View style={stylesList.toDoComponent}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <AntDesign name="checksquareo" size={24} color="green" />
                <Text style={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: 16 }}>{item.title}</Text>
            </View>
            <View style={{ gap: 20, flexDirection: 'row' }}>
                <Pressable onPress={() => navigation.navigate("AddJobScreen", { item, isUpdate: true })}>
                    <AntDesign name="edit" size={25} color="#E05858" />
                </Pressable>
                <Pressable onPress={() => handleRemove(item)}>
                    <EvilIcons name="trash" size={25} color="red" />
                </Pressable>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={stylesList.containerToDo}>
            <View style={stylesList.searchBar}>
                <Ionicons name="search-outline" size={24} color="black" />
                <TextInput placeholder="Search" />
            </View>
            <View style={{ flex: 4 }}>
                <FlatList
                    data={todoList}
                    renderItem={({ item }) => <TodoComponent item={item} />}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <Pressable style={{ flex: 1, justifyContent: 'center' }} onPress={() => navigation.navigate('AddJobScreen', { capacity: todoList.length })}>
                <View>
                    <AntDesign name="pluscircle" size={100} color="cyan" />
                </View>
            </Pressable>
        </SafeAreaView>
    );
}

const stylesList = StyleSheet.create({
    containerToDo: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchBar: {
        borderWidth: 1,
        borderColor: "#9095A0",
        borderRadius: 12,
        flexDirection: 'row',
        width: 335,
        height: 45,
        alignItems: 'center',
        gap: 10,
        padding: 10,
        marginBottom: 50
    },
    toDoComponent: {
        marginTop: 10,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: "#9095A0",
        borderRadius: 30,
        backgroundColor: "#DEE1E6",
        width: 335,
        height: 45,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    }
});
