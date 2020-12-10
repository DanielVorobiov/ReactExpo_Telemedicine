import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import personList from '../Doctors.json';

export default function NotificationScreen({navigation,route}) {
  const key = route.params?.key
  var data = personList.map(function(item) {
    return {
      id: item.DocId,
      FullName: item.FullName,
      Specs: item.Specs,
      Address: item.Address,
      About: item.About,
      Stars: item.Stars,
      Lat: item.Long,
      Long: item.Lat
    };
  });
  return (
    <ScrollView >
      <View style={StyleSheet.container}>
        <View style={styles.circle}>
          <FontAwesome5 name="check-circle" size={120} color="#07da5f" />
        </View>

        <View>
          <Text numberOfLines={3} style={styles.text1}>
            Your Request Has Been Approved
          </Text>

          <Text numberOfLines={3} style={styles.text2}>
            Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, t. Ut enim
            ad veni am, quis nostrud exercitation ullamco
          </Text>

          <Text
            style={{
              color: "#07da5f",
              fontWeight: "bold",
              fontSize: 20,
              marginLeft: 25,
              marginTop: 40,
            }}
          >
            Request Details
          </Text>

          <Text style={styles.details}>Name</Text>
          <Text style={styles.details2}>Dodung</Text>
          <Text style={styles.details}>Desease</Text>
          <Text style={styles.details2}>Sore eyes</Text>
          <Text style={styles.details}>Location</Text>
          <Text style={styles.details2}>St.Broxlyn 212</Text>
          <Text style={styles.details}>Description</Text>
          <Text style={styles.details2}>
            Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, t. Ut enim
            ad veni am, quis nostrud
          </Text>
          <Text
            style={{
              color: "#07da5f",
              fontWeight: "bold",
              fontSize: 20,
              marginLeft: 25,
              marginTop: 40,
            }}
          >
            Doctor
          </Text>

          <Card>
            <View style={{ flexDirection: "row" }}>
              <View>
                <Image source={{uri: 'https://sun9-6.userapi.com/impf/IU9VcFtwmWFVYFrNGyQbSixdoLaJMSMq4JPGNw/ryv4_lRP_uc.jpg?size=128x128&quality=96&proxy=1&sign=46526a71b2a6c36a8e5117310ad415f5&type=album'}} style={{ width: 100, height: 100 , borderRadius: 100 }}/>
              </View>
              <View style={{ paddingLeft: 15 }}>
                <Text style={styles.name}>{data[key].FullName}</Text>
                <Text style={styles.speciality}>{data[key].Specs}</Text>
                <View style={{ flexDirection: "row", paddingTop: 8 }}>
                  <AntDesign
                    style={styles.star}
                    name="star"
                    size={23}
                    color="#FFDF00"
                  />
                  <AntDesign
                    style={styles.star}
                    name="star"
                    size={23}
                    color="#FFDF00"
                  />
                  <AntDesign
                    style={styles.star}
                    name="star"
                    size={23}
                    color="#FFDF00"
                  />
                  <AntDesign
                    style={styles.star}
                    name="star"
                    size={23}
                    color="#FFDF00"
                  />
                  <AntDesign
                    style={styles.star}
                    name="star"
                    size={23}
                    color="#FFDF00"
                  />
                  <Text
                    style={{ color: "gray", fontSize: 20, paddingLeft: 15 }}
                  >
                    4.9
                  </Text>
                </View>
              </View>
            </View>
          </Card>

          <TouchableOpacity
            style={styles.greenbutton}>
            <Text style={{ fontSize: 20, color: "#fff" }}>Confirm</Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={()=>navigation.navigate("Contact")}
            style={styles.whiteButton}>
            <Text style={{ fontSize: 20, color: "gray" }}>Cancel Request</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
  },
  circle: {
    marginLeft: 0,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    fontSize: 20,
    paddingTop: 20,
    paddingHorizontal: 90,
    textAlign: "center",
    fontWeight: "bold",
  },
  text2: {
    fontSize: 15,
    paddingTop: 20,
    paddingHorizontal: 40,
    textAlign: "center",
    color: "gray",
  },
  details: {
    fontSize: 17,
    marginLeft: 25,
    marginTop: -5,
    paddingTop: 20,
    fontWeight: "bold",
    color: "black",
  },
  details2: {
    fontSize: 17,
    marginLeft: 25,
    color: "gray",
  },
  speciality: {
    paddingTop: 8,
    fontStyle: "italic",
    color: "#07da5f",
    fontSize: 18,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  greenbutton:{
    backgroundColor: "#07da5f",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    height: 75,
    width: 250,
    marginLeft: 80,
    marginTop: 50,
  },
  whiteButton:{
    backgroundColor: "transparent",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    height: 75,
    width: 250,
    marginLeft: 80,
    marginTop: 30,
    marginBottom: 50,
  }
});
