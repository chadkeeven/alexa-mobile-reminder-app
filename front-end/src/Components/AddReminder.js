import React, { Component } from 'react'
import { StyleSheet, View, Button, TextInput} from 'react-native'

class AddReminder extends Component {

  state = {
      text: '',
  }
  
onChangeText = (text) => {
  console.log(this.state.text)
  this.setState({text})
}
   onSubmitReminder = () => {
    //const onSubmitReminder = this.props
    const {text} = this.state

    if (!text) return // Don't submit if empty
    this.props.onPress(text)
    //onSubmitReminder(text)
    this.setState({text: ''})
  }

  render() {
    const {placeholder} = this.props
    const {text} = this.state

    return (
      <View>
      <TextInput
        style={styles.input}
        value={text}
        placeholder={placeholder}
        onChangeText={this.onChangeText}
      />
        <Button
          fontFamily='lato'
          containerViewStyle={{ marginTop: 20 }}
          title="Save"
          onPress={this.onSubmitReminder}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    height: 50,
  },
})

export default AddReminder