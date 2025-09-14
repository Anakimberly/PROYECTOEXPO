import { Platform, StatusBar, StyleSheet,SafeAreaView, Text,TextInput } from "react-native" ;

export const Formulario = () => {
  return (
   <SafeAreaView style={ style.mainS}> 
   <Text style={style.title}>REGISTRO DE ALUMNO</Text>
   <Text style ={style.label}>Nombre:</Text>
<TextInput style ={style.input} placeholder="Escribe tu nombre"/> 
<Text style ={style.label}>Carrera:</Text>
<TextInput editable={false} style ={style.input} placeholder="Escribe tu carrera"/> 
 <Text style ={style.label}>Descripcion:</Text>
<TextInput multiline={true} numberOfLines={4} style ={[style.input,style.textArea]} placeholder="Describe tu personalidad"/> 
 <Text style ={style.label}>Correo Electronico:</Text>
<TextInput style ={style.input} placeholder="Ingresa el correo" keyboardType="email-address"/>    
 <Text style ={style.label}>Contraseña:</Text>
<TextInput style ={style.input} placeholder="********" secureTextEntry/> 
 <Text style ={style.label}>Telefono:</Text>
<TextInput style ={style.input} placeholder="123456"  keyboardType="numeric"/>   
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
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign:'center'
    },
        label:{
fontWeight: 'bold',
marginTop:10,
marginBottom:10
        },
        input:{
          borderWidth:1,
          borderColor:'#aaa',
          borderRadius:10,

        },
      textArea:{
        height:100,
        textAlignVertical:'top'
      }
  })