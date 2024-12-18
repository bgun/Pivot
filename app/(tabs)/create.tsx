import React from 'react';
import { Text, View, Dimensions, Image, ScrollView, StyleSheet } from 'react-native';

export default function CreateScreen() {

  const { width, height } = Dimensions.get('window');

  const user = {
    name: 'Benjamin',
    image: require('../../assets/images/host-ben.jpeg'),
    bio: 'Benjamin is a software engineer and entrepreneur. He is the founder of Pivot and loves to host events.',
  };

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
        </View>

        <Text style={ styles.profileName }>Benjamin</Text>
        <Text style={ styles.profileCity }>Brooklyn, New York</Text>

        <View style={styles.interestsContainer}>
          <Text style={ styles.interests }>Interests</Text>
          <View style={styles.interestsGrid}>
            <View style={styles.capsule}><Text style={styles.capsuleText}>Cooking</Text></View>
            <View style={styles.capsule}><Text style={styles.capsuleText}>Fast Cars</Text></View>
            <View style={styles.capsule}><Text style={styles.capsuleText}>Gardening</Text></View>
            <View style={styles.capsule}><Text style={styles.capsuleText}>Scary Movies</Text></View>
            <View style={styles.capsule}><Text style={styles.capsuleText}>Photography</Text></View>
            <View style={styles.capsule}><Text style={styles.capsuleText}>Travel</Text></View>
            <View style={styles.capsule}><Text style={styles.capsuleText}>Electronic Music</Text></View>
            <View style={styles.capsule}><Text style={styles.capsuleText}>Long-Form Writing</Text></View>
            <View style={styles.capsule}><Text style={styles.capsuleText}>Rock Climbing</Text></View>
            <View style={styles.capsule}><Text style={styles.capsuleText}>Dance</Text></View>
            <View style={styles.capsule}><Text style={styles.capsuleText}>Technology</Text></View>
            <View style={styles.capsule}><Text style={styles.capsuleText}>Coffee</Text></View>
            <View style={styles.capsule}><Text style={styles.capsuleText}>Hiking</Text></View>
            <View style={styles.capsule}><Text style={styles.capsuleText}>Yoga</Text></View>
          </View>
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
  },
  imageContainer: {
    position: 'relative',
  },
  userImage: {
    position: 'absolute',
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
  profileName: {
    color: '#fff',
    fontSize: 35,
    marginTop: 10,
  },
  profileCity: {
    color: '#fff',
    fontSize: 15,
    marginTop: 10,
  },
  interests: {
    color: '#fff',
    fontSize: 20,
  },
  interestsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  interestsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  capsule: {
    borderRadius: 20,
    borderColor: '#fff',
    borderWidth: 1,
    padding: 10,
    margin: 5,
  },
  capsuleText: {
    color: '#fff',
    fontSize: 11,
  },
});
