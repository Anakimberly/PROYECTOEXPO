import{ View, Text, StatusBar, Platform,StyleSheet } from 'react-native';

export const ListaAlumnos = () => {
    return (
        <View style={styles.mainS}>
            <Text>Hola</Text>
        </View>
    )
}

const styles = StyleSheet.create({ 
 mainS:{
        flex:1,
        backgroundColor: '#b4aee9ff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight:44,
        padding: 50
    },
});