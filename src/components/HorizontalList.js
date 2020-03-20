import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ListItem from './ListItem'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { withNavigation } from 'react-navigation'

const HorizontalList = ({ name, restaurants, navigation }) => {

  const showItem = (item) =>
    <TouchableOpacity onPress={() => navigation.navigate('Single', {item})}>
      <ListItem restaurant={item} />
    </TouchableOpacity>
  
  if(restaurants.length === 0) return null
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name} {restaurants.length}</Text>
      <FlatList showsHorizontalScrollIndicator={false}
        horizontal keyExtractor={(item) => item.id} data={restaurants} renderItem={({item}) => showItem(item)} />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    paddingBottom: 8,
    backgroundColor: '#3b4a5d',

  },
  text: {
    color: '#ddd',
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold'
  }
})

export default withNavigation(HorizontalList)