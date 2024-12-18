import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Text, View, Dimensions, Image, ScrollView, StyleSheet } from 'react-native';

export default function ProfileScreen() {

  const { width, height } = Dimensions.get('window');

  const user = {
    name: 'Benjamin',
    image: require('../../assets/images/host-ben.jpeg'),
    bio: 'Benjamin is a software engineer and entrepreneur. He is the founder of Pivot and loves to host events.',
  };

  const interests = [
    'Cooking',
    'Gardening',
    'Scary Movies',
    'Photography',
    'Travel',
    'Electronic Music',
    'Long-Form Writing',
    'Yoga',
    'Rock Climbing',
    'Technology',
    'Coffee',
    'Hiking',
  ];

  const events = [
    {
      "id": 1,
      "title": "Wednesday Writing Circle", 
      "image": require("../../assets/images/events-writerscircle.png"),
      "date": "Saturday, Dec 14th",
      "timeStartEnd": "6:00 PM - 9:00 PM",
      "description": "Join Chef Joshua for an intimate dining experience in his Brooklyn brownstone. He'll prepare a seasonal four-course meal using fresh, local ingredients while sharing stories and techniques from his years in professional kitchens.\n\nThe evening will include wine pairings selected to complement each course, and guests will leave with recipe cards to recreate their favorite dishes at home.",
      "location": "Private residence, Brooklyn, NY",
      "openSpots": "5/10 spots left", 
      "hostName": "Joshua",
      "hostAvatar": require("../../assets/images/avatar-chef.png"),
      "hosted": true,
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
      "hostAvatar": require("../../assets/images/avatar-taichi.png"),
      "hosted": false,
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
      "hostAvatar": require("../../assets/images/avatar-gardener.png"),
      "hosted": false,
    },
    {
      "id": 4,
      "title": "A Home-Cooked Meal", 
      "image": require("../../assets/images/events-cooking.jpg"),
      "date": "Saturday, Dec 14th",
      "timeStartEnd": "6:00 PM - 9:00 PM",
      "description": "Join Chef Joshua for an intimate dining experience in his Brooklyn brownstone. He'll prepare a seasonal four-course meal using fresh, local ingredients while sharing stories and techniques from his years in professional kitchens.\n\nThe evening will include wine pairings selected to complement each course, and guests will leave with recipe cards to recreate their favorite dishes at home.",
      "location": "Private residence, Brooklyn, NY",
      "openSpots": "5/10 spots left", 
      "hostName": "Joshua",
      "hostAvatar": require("../../assets/images/avatar-chef.png"),
      "hosted": false,
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={ styles.imageContainer }>
          <Image
            source={ user.image }
            style={[styles.userImage, { height: height/2 }]}
          />
          <Image
            source={require('../../assets/images/gradient.png')}
            style={styles.gradient}
          />
          <View style={styles.profileInfo}>
            <View style={styles.profileNameContainer}>
              <Text style={ styles.profileName }>Benjamin</Text>
              <View style={styles.roleNameContainer}>
                <Ionicons name="star" color="#000" size={14}/>
                <Text style={ styles.roleName }>Host</Text>
              </View>
            </View>
            <Text style={ styles.profileCity }>Brooklyn, New York</Text>
          </View>
        </View>        

        <View style={styles.settingsContainer}>
          <Text style={ styles.settingsTitle }>Settings</Text>
          <View style={styles.settingsGrid}>
            <Text style={styles.settingsItem}>Personal information</Text>
            <Text style={styles.settingsItem}>Payments & payouts</Text>
            <Text style={styles.settingsItem}>Notifications</Text>
            <Text style={styles.settingsItem}>Sign in & security</Text>
            <Text style={styles.settingsItem}>Accessibility</Text>
          </View>
        </View>

        <View style={styles.interestsContainer}>
          <Text style={ styles.interests }>Interests</Text>
          <View style={styles.interestsGrid}>
            {interests.map((interest, index) => (
              <View key={index} style={styles.capsule}><Text style={styles.capsuleText}>{interest}</Text></View>
            ))}
          </View>
        </View>

        <Text style={ styles.pastEventsTitle }>Past Events</Text>
        <View style={styles.pastEventsGrid}>
          {events.map((event, index) => (
            <View key={index} style={styles.pastEvent}>
              <Image source={event.image} style={styles.pastEventImage} />
              { event.hosted ? <Text style={styles.hosted}>Hosted</Text> : null }
              <Text style={styles.pastEventTitle}>{event.title}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#223',
    justifyContent: 'top',
    alignItems: 'center',
    paddingBottom: 60,
  },
  imageContainer: {
    position: 'relative',
  },
  userImage: {
    position: 'relative',
    flex: 1,
    width: "100%",
    height: "50%",
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  profileInfo: {
    position: 'absolute',
    bottom: 0,
    padding: 20,
  },
  profileNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  profileName: {
    color: '#fff',
    fontSize: 35,
  },
  roleNameContainer: {
    backgroundColor: '#FD3',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    gap: 5,
  },
  roleName: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  profileCity: {
    color: '#fff',
    fontSize: 15,
  },
  settingsContainer: {
    flex: 1,
    justifyContent: 'left',
    alignItems: 'left',
    padding: 15,
  },
  settingsTitle: {
    color: '#fff',
    fontSize: 20,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  settingsGrid: {
    flexDirection: 'column',
    justifyContent: 'left',
    alignItems: 'left',
  },
  settingsItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff2',
    color: '#CAF',
    fontSize: 15,
    paddingHorizontal: 6,
    paddingVertical: 12,
  },
  interestsContainer: {
    flex: 1,
    justifyContent: 'left',
    alignItems: 'left',
    padding: 15,
  },
  interests: {
    color: '#fff',
    fontSize: 20,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  interestsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'left',
    alignItems: 'center',
  },
  capsule: {
    borderRadius: 20,
    borderColor: '#fff3',
    borderWidth: 1,
    padding: 10,
    margin: 5,
  },
  capsuleText: {
    color: '#fff',
    fontSize: 11,
  },

  pastEventsTitle: {
    color: '#fff',
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  pastEventsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pastEvent: {
    backgroundColor: '#0005',
    minWidth: '45%',
    maxWidth: '45%',
    flex: 1,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 10,
  },
  pastEventImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  pastEventTitle: {
    color: '#fff',
    fontSize: 15,
    padding: 15,
    height: 70,
    textAlign: 'center',
  },
  hosted: {
    color: '#000',
    backgroundColor: '#FC3',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 5,
    borderRadius: 10,
    margin: 10
  },
});
