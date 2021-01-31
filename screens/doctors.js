import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground,Image } from 'react-native';
import {Card} from 'react-native-elements'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import personList from '../Doctors.json';
  



export default function DoctorsScreen({navigation}) {
  
  
    return (
      <ScrollView>
      <View style={styles.container}>
        {personList.map((data,key) =>{
                return(
        <TouchableOpacity onPress={()=>navigation.navigate("Contact",{key:key})}>
        <Card style={styles.card}>
          <View style = {{ flexDirection: 'row'}}>
            <View>
              <Image source={{uri: 'https://sun9-6.userapi.com/impf/IU9VcFtwmWFVYFrNGyQbSixdoLaJMSMq4JPGNw/ryv4_lRP_uc.jpg?size=128x128&quality=96&proxy=1&sign=46526a71b2a6c36a8e5117310ad415f5&type=album'}} style={{ width: 100, height: 100 , borderRadius: 100}}/>
            </View>
            <View >
                  <View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.name}>{data.FullName}</Text>
                    <AntDesign style={styles.star} name="star" size={24} color="#FFDF00" />
                    <Text style={styles.rating} >{data.Stars}</Text>
                  </View>
                  <Text style={styles.speciality}>{data.Specs}</Text>
                  <View style={styles.location} >
                    <EvilIcons name="location" size={24} color='gray' />
                <Text style={{color:'gray'}}>{data.Address}</Text> 
                  </View>   
                </View>
                               
            </View> 
          </View>       
        </Card>
        </TouchableOpacity>
        );
      })} 
        
      </View>
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent:'center',
      marginTop:50
    }, 
    name:{
      margin:5,
      fontSize:17,
      fontWeight: 'bold'
    },
    rating:{  
      margin:5,
      color:'gray',
      fontSize:17,
      
    },
    star:{
      margin:5,
      marginBottom:1,
    },
    speciality:{
      marginLeft:6,
      fontStyle:'italic',
      color:'#07da5f',
      fontSize:15
    },
    location:{
      flexDirection: 'row',
      marginLeft:1,
      marginTop:5,
      color:'gray',
    },
    card:{
      marginTop:50
    }

   
  });