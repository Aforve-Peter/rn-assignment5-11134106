import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/profile.png')}
          style={styles.profilePicture}
        />
        <View style={styles.headerText}>
          <Text style={styles.headerTextUp}>Welcome back,</Text>
          <Text style={styles.headerTextDown}>Aforve Peter Kwame Atsu</Text>
        </View>
        <Image
          source={require('../assets/search.png')}
          style={styles.searchIcon}
        />
      </View>
      <Image
        source={require('../assets/Card.png')}
        style={styles.debitCard}
      />
      <View style={styles.horizontalLine}>
        <View style={styles.imageWithText}>
          <Image
            source={require('../assets/send.png')}
            style={styles.smallImage}
          />
          <Text style={styles.imageText}>Send</Text>
        </View>
        <View style={styles.imageWithText}>
          <Image
            source={require('../assets/recieve.png')}
            style={styles.smallImage}
          />
          <Text style={styles.imageText}>Recieve</Text>
        </View>
        <View style={styles.imageWithText}>
          <Image
            source={require('../assets/loan.png')}
            style={styles.smallImage}
          />
          <Text style={styles.imageText}>Loan</Text>
        </View>
        <View style={styles.imageWithText}>
          <Image
            source={require('../assets/topUp.png')}
            style={styles.smallImage}
          />
          <Text style={styles.imageText}>Topup</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.leftText}>Transactions</Text>
        <Text style={styles.rightText}>Sell All</Text>
      </View>
      <View style={styles.verticalImages}>
        <View style={styles.imageWithTextVertical}>
          <Image
            source={require('../assets/apple.png')}
            style={styles.verticalImage}
          />
          <Text style={styles.imageText}>Apple Store</Text>
          <Text style={styles.imageTextUnder}>Entertainment</Text>
        </View>
        <View style={styles.imageWithTextVertical}>
          <Image
            source={require('../assets/spotify.png')}
            style={styles.verticalImage}
          />
          <Text style={styles.imageText}>Spotify</Text>
          <Text style={styles.imageTextUnder}>Music</Text>
        </View>
        <View style={styles.imageWithTextVertical}>
          <Image
            source={require('../assets/moneyTransfer.png')}
            style={styles.verticalImage}
          />
          <Text style={styles.imageText}>Money Transfer</Text>
          <Text style={styles.imageTextUnder}>Transaction</Text>
        </View>
        <View style={styles.imageWithTextVertical}>
          <Image
            source={require('../assets/grocery.png')}
            style={styles.verticalImage}
          />
          <Text style={styles.imageText}>Grocery</Text>
         
        </View>
      </View>
      <View style={styles.horizontalLine}>
        <View style={styles.imageWithText}>
          <Image
            source={require('../assets/home.png')}
            style={styles.smallImage}
          />
          <Text style={styles.imageText}>Home</Text>
         
        </View>
        <View style={styles.imageWithText}>
          <Image
            source={require('../assets/myCards.png')}
            style={styles.smallImage}
          />
          <Text style={styles.imageText}>My cards</Text>
          
        </View>
        <View style={styles.imageWithText}>
          <Image
            source={require('../assets/statictics.png')}
            style={styles.smallImage}
          />
          <Text style={styles.imageText}>Statistics</Text>
        </View>
        <View style={styles.imageWithText}>
          <Image
            source={require('../assets/settings.png')}
            style={styles.smallImage}
          />
          <Text style={styles.imageText}>Settings</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerText: {
    flex: 1,
    marginLeft: 10,
  },
  headerTextUp: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerTextDown: {
    fontSize: 14,
    color: 'gray',
  },
  searchIcon: {
    width: 30,
    height: 30,
  },
  debitCard: {
    width: '100%',
    height: 150,
    marginVertical: 20,
  },
  horizontalLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  imageWithText: {
    alignItems: 'center',
  },
  smallImage: {
    width: 50,
    height: 50,
  },
  imageText: {
    marginTop: 5,
    fontSize: 14,
  },
  imageTextUnder: {
    marginBottom:5,
    fontSize:11,

  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  leftText: {
    fontSize: 16,
  },
  rightText: {
    fontSize: 16,
  },
  verticalImages: {
    marginVertical: 10,
  },
  imageWithTextVertical: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  verticalImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});

export default HomeScreen;