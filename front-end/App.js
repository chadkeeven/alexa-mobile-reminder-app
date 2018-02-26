import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import Amplify, { API } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';


import awsmobile from './aws-exports';


Amplify.configure(awsmobile);

class App extends React.Component {
    state = {
      apiResponse: null,
    };


  // Create a new reminder according to the columns we defined earlier
  async saveReminder() {
    let newReminder = {
      body: {
        "task": "My first task!"
      }
    }
    const path = "/reminders";

      // Use the API module to save the note to the database
      try {
        const apiResponse = await API.put("remindersCRUD", path, newReminder);
        console.log(apiResponse);
        console.log("response from saving task: " + apiResponse);
        this.setState({apiResponse});
      } catch (e) {
        console.log(e);
      }
    }
  

  render() {
    return (
      <View style={styles.container}>
      <Text>Shake your phone to open the developer menu.</Text>
      <Text>Hello Chad!</Text>
      <Text>Reminders:</Text>
      <Button
      fontFamily='lato'
      containerViewStyle={{ marginTop: 20 }}
      title="Save"
      onPress={this.saveReminder}
      />
      </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


  export default withAuthenticator(App);
