import { Platform, StatusBar, StyleSheet,SafeAreaView, Text,TextInput } from "react-native" ;

export const Formulario = () => {
  return (
   <SafeAreaView style={ style.mainS}>
   <Text>Nombre:</Text>
<TextInput placeholder="Escribe tu nombre"/> 
        
    </SafeAreaView>
  )
  }

  
  const style = StyleSheet.create({
      mainS:{
          flex:1,
          backgroundColor: '#f5f5f5ff',
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeigth:44,
          padding: 16
        },
  })