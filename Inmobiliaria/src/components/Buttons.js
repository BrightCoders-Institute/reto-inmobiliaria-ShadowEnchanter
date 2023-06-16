import { View, Text, TouchableOpacityComponent, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export function Buttons(){
  return (
    <TouchableOpacity style = {{
        ...styles.button,
        backgroundColor: 'green',
    }}>
        <Text>Green Button</Text>
    </TouchableOpacity>
  )
}

const styles= StyleSheet.create({

    button:{
        alignSelf: 'center',
        borderRadius: 10,
        paddingVertical: 15,
        width: '90%',
    }
})