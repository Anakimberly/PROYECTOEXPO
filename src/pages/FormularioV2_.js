import { Platform, StatusBar, StyleSheet,SafeAreaView, Text,View,TextInput,TouchableOpacity,Image, Dimensions } from "react-native" ;

import { ScrollView } from "react-native";
const {width} = Dimensions.get('window');
export const FormularioV2_ = () => {
  return (
   <SafeAreaView style={ style.mainS}> 
   <ScrollView>
  <Text style={style.title}>FORMULARIO V2</Text>
  <View style={style.container}>
    <Image source={{ uri: 'https://i.pinimg.com/474x/6d/5e/38/6d5e38d19bf4c0c9554b1e6beab75952.jpg'}} style={style.avatar} />
 

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
        fontSize: 30,
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
  })