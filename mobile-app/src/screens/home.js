import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Button, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#07071B',
   
  },
  scroll: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 25,
    paddingTop: 75
  },
  image: {
    alignSelf: 'center',
    height: '50%',
    width:'100%',
    resizeMode: 'contain'
  },
  title: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 36,
    color: '#323232',
    paddingBottom: 15
  },
  subtitle: {
    fontFamily: 'IBMPlexSans-Light',
    fontSize: 24,
    color: '#323232',
    textDecorationColor: '#D0E2FF',
    textDecorationLine: 'underline',
    paddingBottom: 5,
    paddingTop: 20
  },
  content: {
    fontFamily: 'IBMPlexSans-Light',
    color: '#323232',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16
  },
  buttonGroup: {
    flex: 1,
    paddingTop: 12,
    width: '100%'

  },
  buttonGreen: {
    backgroundColor: '#1062FE',
    color: '#FFFFFF',
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 32,
    overflow: 'hidden',
    padding: 30,
    textAlign:'center',
    marginTop: 25,
  },
  buttonRed: {
    backgroundColor: '#ff0000',
    color: '#FFFFFF',
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 32,
    overflow: 'hidden',
    padding: 30,
    textAlign:'center',
    marginTop: 25,
    
  }
});

const Home = ({navigation}) => (
  <View style={styles.center}>
    {/* <ScrollView style={styles.scroll}> */}
      <Image
        style={styles.image}
        source={require('../images/logo.png')}
      />
    
      <View style={styles.buttonGroup}>
        <TouchableOpacity onPress={() => navigation.navigate('FIND HELP')}>
          <Text style={styles.buttonGreen}>FIND HELP</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('OFFER HELP')}>
          <Text style={styles.buttonRed}>OFFER HELP</Text>
        </TouchableOpacity>
      </View>
    {/* </ScrollView> */}
  </View>
);

export default Home;
