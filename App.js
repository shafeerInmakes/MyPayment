/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View, Text, Image, Button, Alert } from 'react-native';

import RazorpayCheckout from 'react-native-razorpay';

function App () {

  const handlePayment = () => {
    var options = {
      name: 'In Makes',
      description: "For test payment",
      currency: 'INR',
      amount: 50000,
      key: 'rzp_test_3bVAi7XMPRnnwe',
      prefill: {
        email: 'ss@gmail.com',
        contact: '9191919191',
        name: 'Tester'
      },
      theme: {color: '#f37251'}
    }
    RazorpayCheckout.open(options).then((data) => {
      console.log("data", data)
Alert.alert('Success');
    })
    .catch((error) => {
Alert.alert(`Error : ${error.code} | ${error.description}`)
    })
  }
  return (
    <View style={styles.container}>
<Image 
style={styles.productImg}
source={require("./assets/dark.jpg")} />
<Text style={styles.text}>InMakes</Text>
<Text style={styles.text}>Rs. 500</Text>
<View style={styles.button}>
  <Button title="Buy" onPress={() => handlePayment()}/>
</View>
    </View>
  );
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
},
productImg: {
  width: 200,
  height: 200,
  resizeMode: 'contain'
},
text:{
  fontSize: 25
},
button: {
  width:200
}
});

export default App;
