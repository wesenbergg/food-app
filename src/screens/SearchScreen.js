import React, { useState } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import HorizontalList from '../components/HorizontalList'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
  const [search, setSearch] = useState('')
  const [errMessage, results, searchApi] = useResults()

  const filterByPrice = price => results.filter(r => price === r.price)
  
  return (
    <View style={styles.container}>
      <SearchBar searchState={{search, setSearch, searchApi}} />      
      <ScrollView>
        <HorizontalList name={'Bit Cheap'} restaurants={filterByPrice('$')} />
        <HorizontalList name={'Bit Pricer'} restaurants={filterByPrice('$$')} />
        <HorizontalList name={'Big Spender'} restaurants={filterByPrice('$$$')} />
      </ScrollView>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b3f53',
  },
  text: {
    color: '#fff'
  }
})

export default SearchScreen

/**
 * LEGACY & DEBUGGING
 * <Text style={styles.text}>{search}</Text>
 * console.log(results.map(r => r.price))
 * <Text style={styles.text}>{errMessage.length > 0 ? errMessage: ''}</Text>
 */