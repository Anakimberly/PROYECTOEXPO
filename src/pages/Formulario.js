import { Platform, StatusBar, StyleSheet,View } from "react-native"
export const Formulario = () => {
  return (
    <View style={style.mainS}>
 <Text style ={style.title}> Pagina Principal </Text>
         <CardBasico/>
    </View>
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