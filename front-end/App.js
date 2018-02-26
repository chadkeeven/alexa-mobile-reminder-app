import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import Amplify, { API } from 'aws-amplify';


import awsmobile from './aws-exports';


Amplify.configure(awsmobile);

export default class App extends React.Component {
 constructor(props) {
  super(props); 
  state = {
    apiResponse: null,
    noteId: '',
   // text: 'reminder placeholder'
  };  
}



handleChangeNoteId = (event) => {
  this.setState({noteId: event});
}

  // saveReminder = () => {
  //   console.log(this.state.text);

  // }
// Create a new Note according to the columns we defined earlier
async saveNote() {
  //console.log(this.state.text);
  let newNote = {
    body: {
      "NoteTitle": "hi chad",
      "NoteContent": "This is so cool!",
      "NoteId": state.noteId
    }
  }
  const path = "/Notes";

      // Use the API module to save the note to the database
      try {
        const apiResponse = await API.put("NotesCRUD", path, newNote);
        console.log("response from saving note: " + apiResponse);
        //this.setState({apiResponse});
      } catch (e) {
        console.log();
        console.log("Error: " + e);
      }
    }

    render() {
      return (
        <View style={styles.container}>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Hello Chad!</Text>
        <Text>Reminders:</Text>
        <TextInput
        onChangeText={(text) => this.setState({text})}
        value={state.text}/>
        <Button
        onPress={this.saveNote}
        title="Save"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
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
