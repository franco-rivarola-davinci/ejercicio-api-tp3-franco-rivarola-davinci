import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, View, Image, Button, ActivityIndicator } from 'react-native';
const axios = require('axios').default;



function ApiScreen()
{

    const [imgCat , SetImgCat] = React.useState(null)
    const [loading , SetLoading] = React.useState(false)

    function handlerButton(){
    SetLoading(true);
    axios.get("https://api.thecatapi.com/v1/images/search")
    .then(function(resp){
        SetImgCat(resp.data[0].url);
        SetLoading(false);
    })
    .catch(function(err){
        console.log(err);
    });
    }


  return(
    <View style={styles.container}>
      {!loading ? 
      <Button color= "black"
       title='Generar imagen'  
       onPress={() => handlerButton()} />  : <ActivityIndicator/> }
      <Image style ={styles.imgStyle} source={{uri:(imgCat)}} />
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
    imgStyle : {
        width: 400,
        height: 400,
        marginTop: 50,
      },
  });

  module.exports =  ApiScreen;
