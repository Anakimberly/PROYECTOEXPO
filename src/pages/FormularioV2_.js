import { Platform, StatusBar, StyleSheet,SafeAreaView, Text,View,TextInput,TouchableOpacity,Image, Dimensions } from "react-native" ;
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { ScrollView } from "react-native";
const {width} = Dimensions.get('window');
export const FormularioV2_ = () => {
  return (
   <SafeAreaView style={ style.mainS}> 
   <ScrollView>
  <Text style={style.title}>FORMULARIO V2</Text>
  <View style={style.container}>
    <Image source={{ uri: 'https://i.pinimg.com/474x/6d/5e/38/6d5e38d19bf4c0c9554b1e6beab75952.jpg'}} style={style.avatar} />
    <Text style={style.name}>Ana Kimberly</Text>
    <View style={style.InfoContainer}>
      <Text style={style.label}>Carrera</Text>
     <Text style={style.info}>Ing.Sistemas Computacionales</Text>
     <Text style={style.label}>Especialidad</Text>
     <Text style={style.info}>Desarrollo de software</Text>
       <Text style={style.label}>Correo</Text>
     <Text style={style.info}>anakim1103@gmail.com</Text>
     <Text style={style.label}>Telefono</Text>
     <Text style={style.info}>1234567</Text>
      <Text style={style.label}>Numero de control</Text>
     <Text style={style.info}>1234567</Text>
        </View>
        {/* Boton grande con Icono*/}
                <TouchableOpacity style={style.botonConIcono}>
                <Ionicons name="save" size={20} color={'#0c0c0cff'} style = {style.iconoIzquierda}/>
                <Text style={style.textoBoton}>Guardar</Text>
                </TouchableOpacity>
  </View>
  </ScrollView>
    </SafeAreaView>
    
  )
  }

  
  const style = StyleSheet.create({
      mainS:{
          flex:1,
          backgroundColor: '#daf2daff',
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeigth:44,
          padding: 16
        },
         title:{
        paddingTop:30,
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign:'center'
    },
    container: {
      width: '100%',
      backgroundColor: '#ffffffff',
      borderRadius: 15  ,
      alignItems: 'center',
      padding: 20,
      shadowColor: '#000',
      shadowOpacity: 0.5,
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 10,
      elevation: 5,
      
    },
    avatar: {
      width: width * 0.35,
      height : width * 0.35,
      borderRadius: (width * 0.35) / 2,
      marginBottom: 20,
      borderWidth: 2,
      borderColor: '#ccc',
      
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      borderRadius:20,
      backgroundColor:'#d9ead7ff',
      padding:5,
    },
    InfoContainer: {
      width: '100%',
      marginBottom:15,
    },
    label: {
      fontWeight: 'bold',
      marginBottom:10,
      fontSize:18,
    },
    info: {
      fontSize: 15,
      marginBottom: 10,
      borderRadius:15,
      backgroundColor:'#ecececff',
      padding:10,
    },
     botonConIcono:{
        backgroundColor: '#cae3f1ff',
        marginTop:10,
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
        paddingVertical:12,
        borderRadius:15,
        width: '100%',
    },
    iconoIzquierda:{
        marginRight:10
    },
     
    textoBoton:{
        color: '#000000ff',
        fontWeight: 'bold',
        textAlign: 'center'
    },
  })