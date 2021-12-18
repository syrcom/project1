import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, FlatList, SafeAreaView } from "react-native";

const names = [
  "Aaran",
  "Aaren",
  "Aarez",
  "Aarman",
  "Aaron",
  "Aaron-James",
  "Aarron",
  "Aaryan",
  "Aaryn",
  "Aayan",
  "Aazaan",
  "Abaan",
  "Abbas",
  "Abdallah",
  "Abdalroof",
  "Abdihakim",
  "Abdirahman",
  "Abdisalam",
  "Abdul",
  "Abdul-Aziz",
  "Abdulbasir",
  "Abdulkadir",
  "Abdulkarem",
];

const nameAsObjects = names.map((item) => {
return {
name: item,
}

}

)

export default function App() {
 const renderName = ({ item }) => {
return <Text>{item.name}</Text>;
 };
 return <FlatList data={nameAsObjects} renderItem={renderName}
 keyExtractor={(item) => item.name}></FlatList>
};

const styles = StyleSheet.create({
container: {
alignItems:"center",
backgroundColor: "#fff",
justifyContent: "center",
},

});

