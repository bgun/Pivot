import React from 'react';
import { Text, View, Dimensions, StyleSheet, ScrollView, Image } from 'react-native';
import { Link } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Index() {

  const { width, height } = Dimensions.get('window');

  // Import events data from local JSON file
  const events = [
    {
      "id": 1,
      "title": "A Home-Cooked Meal", 
      "image": require("../../assets/images/events-cooking.jpg"),
      "date": "Saturday, Dec 14th",
      "timeStartEnd": "6:00 PM - 9:00 PM",
      "description": "Join Chef Joshua for an intimate dining experience in his Brooklyn brownstone. He'll prepare a seasonal four-course meal using fresh, local ingredients while sharing stories and techniques from his years in professional kitchens.\n\nThe evening will include wine pairings selected to complement each course, and guests will leave with recipe cards to recreate their favorite dishes at home.",
      "location": "Private residence, Brooklyn, NY",
      "openSpots": "5/10 spots left", 
      "hostName": "Joshua",
      "hostAvatar": require("../../assets/images/avatar-chef.png")
    },
    {
      "id": 2,
      "title": "Tai Chi with Master Chen",
      "image": require("../../assets/images/events-taichi.png"),
      "date": "Tuesday, March 11th",
      "timeStartEnd": "5:00 PM - 6:30 PM",
      "description": "Experience the ancient art of Tai Chi in the serene setting of Prospect Park. Master Chen guides participants through gentle movements and breathing exercises, helping reduce stress and improve balance.\n\nPerfect for beginners and experienced practitioners alike. After the session, join us for complimentary herbal tea and learn about the philosophy behind Tai Chi, its health benefits, and how to incorporate its principles into your daily life.",
      "location": "Prospect Park, Brooklyn, NY",
      "openSpots": "6/25 spots left",
      "hostName": "Chen",
      "hostAvatar": require("../../assets/images/avatar-taichi.png")
    },
    {
      "id": 3,
      "title": "7th Ave Community Garden Grand Opening",
      "image": require("../../assets/images/events-garden.jpg"),
      "date": "Sunday, April 20th",
      "timeStartEnd": "10:00 AM - 5:00 PM",
      "description": "Join us for the grand opening of our community garden! Tour the new plots, meet fellow gardeners, and learn about sustainable urban farming. Light refreshments will be served, and visitors can sign up for garden plots and upcoming workshops.\n\nThis community garden project has been in development for over a year, transforming an unused lot into a vibrant green space. The garden features 50 individual plots, a shared herb garden, composting station, and rain water collection system. We'll also be announcing our schedule of free gardening classes, seed exchanges, and seasonal harvest celebrations.",
      "location": "7th Ave Community Garden, Bushwick",
      "openSpots": "12/50 spots left",
      "hostName": "Annie",
      "hostAvatar": require("../../assets/images/avatar-gardener.png")
    }
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}
      >
        { events.map((ev: any) => (
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
              <View style={styles.eventDateContainer}>
                <Text style={styles.eventDate}>{ ev.date }</Text>
              </View>
              <View style={styles.eventTimeContainer}>
                <Text style={styles.eventTime}>{ ev.timeStartEnd }</Text>
              </View>

              <View style={styles.actionButtons}>
                <View style={styles.actionButton}>
                  <Ionicons name="thumbs-up" color="#FC3" size={24}/>
                  <Text style={styles.actionButtonText}>RSVP</Text>
                </View>
                <View style={styles.actionButton}>
                  <Ionicons name="share" color="#FC3" size={24}/>
                  <Text style={styles.actionButtonText}>Share</Text>
                </View>
                <View style={styles.actionButton}>
                  <Ionicons name="calendar-outline" color="#FC3" size={24}/>
                  <Text style={styles.actionButtonText}>Add</Text>
                </View>
              </View>
              <View style={styles.hostContainer}>
                <Text style={styles.hostBy}>Hosted by: &nbsp;</Text>
                <Image
                  source={ev.hostAvatar}
                  style={styles.hostAvatar}
                />
                <Text style={styles.hostName}>{ ev.hostName }</Text>
              </View>
              <View style={styles.cardText}>
                <Ionicons name="location-outline" color="#fff" size={24}/>
                <Text style={styles.eventLocation}>{ ev.location }</Text>
              </View>
              <View style={styles.cardText}>
                <Ionicons name="people-circle-outline" color="#fff" size={24}/>
                <Text style={styles.eventOpenSpots}>{ ev.openSpots }</Text>
              </View>
              <View style={styles.cardText}>
                <Text style={styles.eventDescription}>{ ev.description }</Text>
              </View>

              <View style={styles.buttonContainer}>
                <Text style={styles.buttonPrimary}>See more events like this</Text>
                <Text style={styles.buttonSecondary}>See fewer events like this</Text>
              </View>
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
    backgroundColor: '#223',
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
    color: '#F5F5F5',
    flex: 1,
    fontSize: 16,
    letterSpacing: 0.2,
    lineHeight: 25,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  imageContainer: {
    position: 'relative',
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
    fontSize: 36,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 18,
    paddingVertical: 22,
  },
  eventDateContainer: {
    paddingHorizontal: 5,
    paddingTop: 20,
    paddingBottom: 2,
  },
  eventDate: {
    color: '#fff',
    fontSize: 28,
  },
  eventTimeContainer: {
    paddingHorizontal: 5,
    paddingTop: 2,
    paddingBottom: 10,
  },
  eventTime: {
    color: '#fff',
    fontSize: 18,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  actionButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#fff3',
    width: 80,
    height: 80,
  },
  actionButtonText: {
    color: '#FC3',
    fontSize: 16,
    textAlign: 'center',
  },
  hostContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  hostAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#fff',
    marginRight: 10,
  },
  hostBy: {
    color: '#fff',
    fontSize: 16,
  },
  hostName: {
    color: '#CAF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  eventLocation: {
    color: '#CAF',
    fontSize: 16,
  },
  eventOpenSpots: {
    color: '#fff',
    fontSize: 16,
    fontStyle: 'italic',
  },
  eventDescription: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 22,
  },
  buttonContainer: {
    borderTopWidth: 1,
    borderTopColor: '#fff2',
    marginVertical: 20,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  buttonPrimary: {
    color: '#000',
    fontSize: 16,
    backgroundColor: '#FD3',
    marginHorizontal: 20,
    marginVertical: 5,
    padding: 15,
    borderRadius: 50,
    textAlign: 'center',
  },
  buttonSecondary: {
    color: '#fffA',
    fontSize: 16,
    borderColor: '#fff2',
    borderWidth: 1,
    borderRadius: 50,
    marginHorizontal: 20,
    marginVertical: 5,
    padding: 15,
    textAlign: 'center',
  },
});
