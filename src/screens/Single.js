import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'

const Single = ({ navigation }) => {
  const item = navigation.getParam('item')
  
  return (
    <ScrollView><View style={styles.container}>
      <Image style={styles.image} source={{uri: item.image_url}} />
      <View style={styles.textContainer}>
        <Text style={styles.heading}>{ item.name } ({ item.price })</Text>
        <Text style={styles.text}>{ item.rating } stars, { item.review_count } reviews</Text>
        <Text style={styles.p}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Contact</Text>
        <Text style={styles.p}>Phone: { item.display_phone }</Text>
        <Text style={styles.p}>Address: { item.location.display_address[0] } </Text>
      </View>
    </View>
    </ScrollView>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b3f53',
  },
  image: {
    width: 300,
    height: 200,
    alignSelf: "center",
    marginVertical: 10
  },
  text: {
    color: '#444',
    marginBottom: 15
  },
  heading: {
    color: '#111',
    fontWeight: 'bold',
    fontSize: 32
  },
  textContainer: {
    flex: 1,
    backgroundColor: '#ddd',
    margin: 12,
    borderRadius: 3,
    padding: 8,
  },
  p: {
    color: '#222',
    fontSize: 18
  }
})

export default Single