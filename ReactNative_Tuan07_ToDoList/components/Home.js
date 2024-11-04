
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Home({navigation}) {
    const [username, setUsername] = useState('');
    return (
        <SafeAreaView style={stylesHome.containerHome}>
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../assets/todo.png')} style={stylesHome.imgIcon} />
                <View>
                    <Text style={stylesHome.textHeader}>MANAGER YOUR</Text>
                    <Text style={[stylesHome.textHeader, { textAlign: "center"}]}>TASK</Text>
                </View>
            </View>
            <View style={{flex: 1, marginTop: 80}}>
                <View style={stylesHome.textInput}>
                    <Fontisto name="email" size={24} color="black" />
                    <TextInput style={{flex:1}} placeholder="Search" onChangeText={(value)=> setUsername(value)}/>
                </View>
                <Pressable style={{flex: 1, justifyContent: 'center'}} onPress={() => navigation.navigate('ToDoListScreen',{username})} >
                    <View style={{backgroundColor: "#00BDD6", padding: 15, borderRadius: 12, marginTop: 20, flexDirection:'row', gap: 5, justifyContent: 'center'}}>
                        <Text style={{color: 'white', textAlign: 'center', fontSize: 18}}>GET STARTED</Text>
                        <AntDesign name="arrowright" size={24} color="white" />
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const stylesHome = StyleSheet.create({
    containerHome: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textHeader:{
        fontSize: 24,
        fontWeight:'700',
        color: "#8353E2", 
    }
    ,
    imgIcon:{
        width: 200,
        height: 200,
        objectFit: 'contain',
        marginBottom: 50
    },
    textInput:{
        borderWidth: 1,
        borderColor: "#9095A0",
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        width: 335,
        height: 45,
        padding: 10,
        gap: 10
    }
});