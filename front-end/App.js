import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import Amplify, { API } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';

import ListReminders from './src/Components/ListReminders'
import AddReminder from './src/Components/AddReminder';



import awsmobile from './src/aws-exports';


Amplify.configure(awsmobile);

export default class App extends Component {

    state = {
      reminders: ['One', 'Two'],
     // apiResponse: null,
    };


  // Create a new reminder according to the columns we defined earlier
  //async 
  saveReminder = (text) => {
  //console.log("hello")
    const {reminders} = this.state
    this.setState({
      reminders: [text, ...reminders],
    })
  }
//     let newReminder = {
//       body: {
//         "task": "My first task!"
//       }
//     }
//     const path = "/reminders";

//       // Use the API module to save the note to the database
//       try {
//         const apiResponse = await API.put("remindersCRUD", path, newReminder);
//         console.log(apiResponse);
//         console.log("response from saving task: " + apiResponse);
//        // this.setState({apiResponse});
//       } catch (e) {
//         console.log(e);
//       }
    removeReminder = (index) => {
    const {reminders} = this.state

    this.setState({
      reminders: reminders.filter((reminders, i) => i !== index),
    })
  }
  

  render() {
    const {reminders} = this.state
    
    return (
     // style={styles.container}
      <View>
      <Text>Reminders:</Text>
        <AddReminder
          placeholder={'Type a reminder, then hit submit'}
          onPress={this.saveReminder}
          />
        <ListReminders
          list={reminders}
          onPressItem={this.removeReminder}
        />
      </View>
      );
    }
  }

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });

//   export default withAuthenticator(App);
