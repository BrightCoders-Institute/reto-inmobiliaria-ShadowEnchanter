import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Buttons } from './buttons';

const PropertyListItem = ( {item} ) => {

  const { id, name, direction, price, picture, rooms, bathrooms, area, rating } = item

  return (
    <View style = {styles.container}>
      <Image source={{uri: item.picture}} style={styles.picture}/>
      <View style = {styles.rating}>
        <Icon name='star' size={15} color='orange' style={styles.star}/>
        <Text style={styles.textRating}>{rating}</Text>
      </View>
      <View>
      <Text style={styles.textTitle}>{name}</Text>
      <View style={styles.icon}>
        <EvilIcons name="location" size={18} color='gray' />
        <Text style={styles.textDirection}>{direction}</Text>
      </View>
      <View style={styles.icon}>
        <Icon name="bed" size={15} color='gray' />
        <Text style={{left: 6, color: 'black', fontWeight: 'bold', }}>{rooms}</Text>
        <Icon name="bath" size={15} color='gray' style={{left: 60, }}/>
        <Text style={{left: 66, color: 'black', fontWeight: 'bold', }}>{bathrooms}</Text>
        <Icon name='arrows' size={15} color='gray' style={{left: 120, }}/>
        <Text style={{left: 125, color: 'black', fontWeight: 'bold', }}>{area}</Text>
      </View>
      <Text style={styles.textPrice}>{price}</Text>
      </View>
      <View style = {styles.favorite}>
        <Icon name='heart' size={12} color='white'/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'lightcyan',
        borderRadius: 10,
        // marginBottom: 10,
        flexDirection: 'row',
        padding: 10,

    },
    picture:{
        borderRadius: 10,
        marginRight: 10,
        width: 90,
        height: 90,
    },
    textTitle:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        flexDirection: 'column',
        padding: 2,
    },
    textDirection:{
        color: 'gray',
        fontWeight: '200',
        fontSize: 12,
        flexDirection: 'column',
    },
    textPrice:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        flexDirection: 'column',
    },
    icon:{
        alignItems: 'center',
        flexDirection: 'row',
        padding: 2,
    },
    rating:{
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: 'bisque',
        width: 50,
        height: 20,
        tintColor:'white',
        position: 'absolute',
        top: 75,
        zIndex: 1,
        left: 30,
    },
    star:{
        left: 10,
        flex: 1,
    },
    textRating:{
        flex: 1,
        color: '#873e23',
        fontWeight: 'bold',
    },
    favorite:{
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: 'forestgreen',
        padding: 6,
        width: 25,
        height: 25,
        tintColor:'white',
        position: 'absolute',
        top: 78,
        zIndex: 1,
        left: 308,
    }
})

export default PropertyListItem