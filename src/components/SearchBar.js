import React from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ searchState }) => {
  const { search, setSearch, searchApi } = { ...searchState }

  const handleSubmit = () => {
    searchApi(search)
  }

  return (
    <View style={styles.container}>
      <Feather name="search" style={styles.searchIcon} />
      <TextInput style={styles.input} placeholder="Search" value={search} onChangeText={v => setSearch(v)}
        autoCorrect={false} autoCapitalize='none' onEndEditing={() => handleSubmit()} />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#eee',
    marginHorizontal: 15,
    marginVertical: 5
  },
  text: {
    color: '#000'
  },
  input: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginLeft: 37
  },
  searchIcon: {
    color: "#555",
    position: "absolute",
    top: 5,
    left: 3,
    fontSize: 35
  }
})

export default SearchBar