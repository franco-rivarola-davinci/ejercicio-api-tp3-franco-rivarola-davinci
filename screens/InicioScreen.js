import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

function InicioScreen()
{
  return(
    <View style={styles.container}>
    <Image style={styles.logoStyle} source={require("../img/gatoLogo.jpg")} />
    <Text style={styles.welcomeStyle}> Bienvenido a kat-PI</Text>
    <Text style={styles.textStyle}> Aqui encontraras las mejores imagenes de gatos para crear tus propios stickers  </Text>

    <StatusBar style="auto" />
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D5FFEE',
      alignItems: 'center',
      justifyContent: 'center',
    },
    welcomeStyle:{
        textAlign: 'center',
        fontFamily:'Verdana',
        fontSize: 26,
        fontWeight: 'bold',
    },
    textStyle:
    {
      marginLeft:30,
      marginRight:30,
      marginTop: 350,
      textAlign:'center',
      fontSize: 16,
    },
    logoStyle:
    {
        width: 250,
        height: 250,
    },
  });

  module.exports = InicioScreen;