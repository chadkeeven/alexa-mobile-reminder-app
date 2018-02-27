import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Platform } from 'react-native';
import Amplify, { API } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';

import ListReminders from './src/Components/ListReminders'
import AddReminder from './src/Components/AddReminder';



import awsmobile from './src/aws-exports';

if (Platform.Version === 25) {
  console.log('Running on Nougat!');
}


Amplify.configure(awsmobile);

class App extends Component {

    state = {
      reminders: ['One', 'Two'],
      apiResponse: null
    };
  handleChangeUserId = (event) => {
    console.log("hi")
        this.setState({userId: event});
}

  saveReminder = async (text) => {  
    const {reminders} = this.state
    console.log(`this is ${text}`)
    // Create a new Reminder according to the columns we defined earlier
      let newReminder = {
        body: {
          "task": text,
          "taskId": 2,
          "userId": "chadkeeven"
        }
      }
      console.log(newReminder.body)
      const path = "/Reminders";

      // Use the API module to save the task to the database
      try {
        const apiResponse = await API.put("RemindersCRUD", path, newReminder)
       // console.log("hi");
        console.log("response from saving reminder: " + apiResponse);
        this.setState({apiResponse});
      } catch (e) {
        console.log(e);
      }
    this.setState({
      reminders: [text, ...reminders],
    })
  }

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
export default withAuthenticator(App);
