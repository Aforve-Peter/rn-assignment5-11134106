import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList,TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; // You can use other icon libraries too

export default function App() {
  const transactions = [
    { id: '1', title: 'Apple Store', subtitle: 'Entertainment', amount: -5.99, icon: 'apple' },
    { id: '2', title: 'Spotify', subtitle: 'Music', amount: -12.99, icon: 'spotify' },
    { id: '3', title: 'Money Transfer', subtitle: 'Transaction', amount: 300, icon: 'cash' },
    { id: '4', title: 'Grocery', subtitle: '', amount: -88, icon: 'cart' },
  ];

  const renderTransaction = ({ item }) => (
    <View style={styles.transactionItem}>
      <MaterialCommunityIcons name={item.icon} size={40} color="black" />
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionTitle}>{item.title}</Text>
        <Text style={styles.transactionSubtitle}>{item.subtitle}</Text>
      </View>
      <Text style={[styles.transactionAmount, { color: item.amount > 0 ? 'blue' : 'black' }]}>
        {item.amount > 0 ? `$${item.amount}` : `-$${-item.amount}`}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image source={require('../assets/profile.png')} style={styles.profileImage} />
          <View>
            <Text style={styles.welcomeText}>Welcome back,</Text>
            <Text style={styles.username}>Aforve Peter Kwame Atsu</Text>
          </View>
          <Ionicons name="search" size={24} color="black" />
        </View>
        
        <View >
        

            <Image source={require('../assets/Card.png')} style={styles.cardLogo} />
            <View  style={{flexDirection:'row',margin:20}}>
                <Text style={{left:50}}>Transactions</Text>
                <TouchableOpacity style={{left:'85%',color:'blue'}}>See All</TouchableOpacity>
            </View>
          
        </View>
        
        <View style={styles.actions}>
          <View style={styles.actionItem}>
            <Ionicons name="arrow-up" size={24} color="gray" />
            <Text style={styles.actionLabel}>Sent</Text>
          </View>
          <View style={styles.actionItem}>
            <Ionicons name="arrow-down" size={24} color="gray" />
            <Text style={styles.actionLabel}>Receive</Text>
          </View>
          <View style={styles.actionItem}>
            <Ionicons name="logo-usd" size={24} color="gray" />
            <Text style={styles.actionLabel}>Loan</Text>
          </View>
          <View style={styles.actionItem}>
            <Ionicons name="cloud-upload-outline" size={24} color="gray" />
            <Text style={styles.actionLabel}>Topup</Text>
          </View>
        </View>
        
        <FlatList
          data={transactions}
          renderItem={renderTransaction}
          keyExtractor={item => item.id}
          style={styles.transactionList}
        />
      </ScrollView>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    justifyContent: 'space-between',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  welcomeText: {
    fontSize: 16,
    color: 'gray',
    right:'150%'
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    right:'150%'
  },
  card: {
    backgroundColor: 'purple',
    borderRadius: 8,
    padding: 16,
    margin: 16,
  },
  cardNumber: {
    color: 'white',
    fontSize: 18,
    marginBottom: 8,
  },
  cardName: {
    color: 'white',
    fontSize: 16,
    marginBottom: 8,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardLabel: {
    color: 'white',
    fontSize: 12,
  },
  cardValue: {
    color: 'white',
    fontSize: 14,
  },
  cardLogo: {
    width: 1000,
    height: 500,
    borderRadius:20,
    marginHorizontal:100
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  actionItem: {
    alignItems: 'center',
  },
  actionLabel: {
    color: 'gray',
    marginTop: 4,
  },
  transactionList: {
    paddingHorizontal: 16,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  transactionDetails: {
    flex: 1,
    marginLeft: 16,
  },
  transactionTitle: {
    fontSize: 16,
  },
  transactionSubtitle: {
    color: 'gray',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  },
});