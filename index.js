import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function App({ start = 1, end = 4 }) {
    const [places, setplaces] = React.useState(start)
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginTop: 50
        }}>
            <TouchableOpacity style={{
                backgroundColor: "#543864",
                height: 50,
                width: 50,
                borderRadius: 25,
                alignItems: 'center',
                justifyContent: 'center'
            }}
                onPress={() => { places != start && setplaces(places - 1) }}
            >
                <AntDesign name="down" size={35} color="white" />
            </TouchableOpacity>

            <Text style={{
                color: 'red',
                fontSize: 18
            }}>{places}</Text>

            <TouchableOpacity style={{
                backgroundColor: "#543864",
                height: 50,
                width: 50,
                borderRadius: 25,
                alignItems: 'center',
                justifyContent: 'center'
            }}

                onPress={() => { places != end && setplaces(places + 1) }}
            >
                <AntDesign name="up" size={35} color="white" />
            </TouchableOpacity>
        </View>
    );
}

/* const styles = StyleSheet.create({
  button_increase: {
    backgroundColor: "#543864",
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  places: {
    color: 'red',
    fontSize: hp('10%')
  },
  container_add_number: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: hp('5%')
  }
}); */

exports.Increase = App;