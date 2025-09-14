import{ View, Text, StatusBar, Platform,StyleSheet,SafeAreaView } from 'react-native';
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';

export const ListaAlumnos = () => {
    return (
        <SafeAreaView style={style.mainS}>
            {/* inicio de AppBar */}
            <View style={style.appBar}>
                <Ionicons name="arrow-back" size={30} color={'#000000ff'} />
                <Text style={style.appBarTitle}>Lista de Alumnos</Text>
                </View>

            {/* fin de AppBar */}
        </SafeAreaView>
    )
}

const style = StyleSheet.create({ 
 mainS:{
        flex:1,
        backgroundColor: '#b4aee9ff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight:44,
        // padding: 50
    },
    appBar:{
        height:50,
        width:'100%',
        backgroundColor:'#ffffffff',
        flexDirection:'row',
        alignItems:'center',
         justifyContent:'space-between',
        paddingHorizontal:16,
        
       

    },
    appBarTitle:{
        fontWeight:'bold',
        fontSize:16,
    },
});