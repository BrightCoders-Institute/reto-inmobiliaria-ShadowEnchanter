import { View, Text, FlatList, SafeAreaView } from 'react-native';
import React from 'react';
import PropertyListItem from '../components/PropertyListItem';

const HomeScreen = () => {

    const property = [

        {
          id: '001',
          name: 'The  Willows',
          direction: '3517 W. Gray St. Utica',
          price: '$440/month',
          picture: 'https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60',
          rooms: 3,
          bathrooms: 2,
          area: '250 ft2',
          rating: '4.7',
        },
        {
          id: '002',
          name: 'Orchard House',
          direction: '3518 W. Gray St. Utica',
          price: '$440/month',
          picture: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60',
          rooms: 3,
          bathrooms: 2,
          area: '230 ft2',
          rating: '4.7',
        },
        {
          id: '003',
          name: 'The  Willows',
          direction: '3519 W. Gray St. Utica',
          price: '$440/month',
          picture: 'https://images.unsplash.com/photo-1600786288830-9f5d4bf1d516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlJTIwZXh0ZXJpb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
          rooms: 3,
          bathrooms: 2,
          area: '263 ft2',
          rating: '4.7',
        },
        {
          id: '004',
          name: 'Coner House',
          direction: '3520 W. Gray St. Utica',
          price: '$440/month',
          picture: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60',
          rooms: 3,
          bathrooms: 2,
          area: '235 ft2',
          rating: '4.7',
        },
        {
            id: '005',
            name: 'Winter House',
            direction: '3518 W. Gray St. Utica',
            price: '$440/month',
            picture: 'https://images.unsplash.com/photo-1517850945300-ab1f6fcc3395?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI5fHxob3VzZSUyMGV4dGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            rooms: 3,
            bathrooms: 2,
            area: '230 ft2',
            rating: '4.7',
        },
        {
            id: '006',
            name: 'The  Willows Departments',
            direction: '3517 W. Gray St. Utica',
            price: '$440/month',
            picture: 'https://images.unsplash.com/photo-1518503854977-da3ec12bfda7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjU5fHxob3VzZSUyMGV4dGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            rooms: 3,
            bathrooms: 2,
            area: '275 ft2',
            rating: '4.7',
        },
    ]

  return (
    <SafeAreaView style={{marginHorizontal: 10,}}>
      
        <FlatList
            data = {property} //variable o constante que debe ser un objeto o array, el Flatlist Itera.
            keyExtractor={(item) => item.id} //Key es para identificar que un registro o elemento de la lista es un item unico. 
            renderItem={({item, index})=><PropertyListItem item = {item} />} //Lo que se va a mostrar o renderizar.
            ItemSeparatorComponent = {() => <View style = {{marginBottom: 20, }} /> } //que hay entre un componente y otro
            ListHeaderComponent={() => <Text style = {{ fontWeight: 'bold', fontSize: 30, marginBottom: 10, color: 'black', }}>Real Estate</Text>}
        />

    </SafeAreaView>
  )
}

export default HomeScreen