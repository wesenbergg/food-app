import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { getCurrentFrame } from 'expo/build/AR'

const ListItem = ({ restaurant }) => {

  return (
    <View style={styles.container} >
      <Image style={styles.image} source={{uri: restaurant.image_url}} />
      <Text style={styles.heading}>{restaurant.name.length > 25 ? 'Pappa\'s pizzeria': restaurant.name}</Text>
      <Text style={styles.text}>{restaurant.rating} stars, {restaurant.review_count} reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: 210,
    borderRadius: 4,
    marginBottom: 5
  },
  heading: {
    color: '#ddd',
    fontSize: 16,
    fontWeight: 'bold'
  },
  text: {
    color: '#bbb',
    fontSize: 12,
  },
  container: {
    marginLeft: 10,
  }
})

export default ListItem