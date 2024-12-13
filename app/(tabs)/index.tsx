import React from 'react';
import { Text, View, Dimensions, StyleSheet, ScrollView, Image } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {

  const { width, height } = Dimensions.get('window');

  const events = [
    {
      id: 1,
      title: "A Home-Cooked Meal",
      image: require('../../assets/images/events-cooking.jpg'),
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      hostName: "Joshua",
    },
    {
      id: 2,
      title: "Tai Chi with Master Chen",
      image: require('../../assets/images/events-taichi.png'),
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      hostName: "Chen",
    },
    {
      id: 3,
      title: "7th Ave Community Garden Grand Opening",
      image: require('../../assets/images/events-garden.jpg'),
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      hostName: "Annie",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}
      >
        { events.map(ev => (
          <View key={ev.id} style={[styles.card, { width: width }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={ styles.imageContainer }>
                <Image 
                  source={ ev.image }
                  style={[styles.cardImage, { width: width-20 }]}
                />
                <Image
                  source={require('../../assets/images/gradient.png')}
                  style={styles.gradient}
                />
                <Text style={styles.eventTitle}>{ ev.title }</Text>
              </View>
              <View style={styles.hostContainer}>
                <View style={styles.hostAvatar}></View>
                <Text style={styles.hostName}>{ ev.hostName }</Text>
              </View>
              <Text style={styles.cardText}>
                { ev.description }
              </Text>
            </ScrollView>
          </View>  
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carousel: {
    width: "100%",
  },
  card: {
    padding: 10,
  },
  cardImage: {
    flex: 1,
    height: 400,
  },
  cardText: {
    color: '#fff',
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 15,
  },
  imageContainer: {
    position: 'relative',
    borderRadius: 50,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  eventTitle: {
    color: '#fff',
    fontSize: 35,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
  },
  hostContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  hostAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#fff',
  },
  hostName: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
});
