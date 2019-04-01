import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'
import { connect } from 'react-redux'

class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={{flex: 1,
          backgroundColor: 'white'}}>

          <Text style={styles.lbl}>LOGIN</Text>
          <View style={styles.inputView}>
            <View style={styles.emailView}>
              <Text style={styles.labelStyle}>Username</Text>
              <TextInput style={styles.textInput}
                returnKeyType='next'
                onSubmitEditing={() => { this.secondTextInput.focus() }}
              />
            </View >
            <View style={styles.pwdView}>
              <Text style={styles.labelStyle}>Password</Text>
              <TextInput style={styles.textInput}
                returnKeyType='done'
                secureTextEntry
                ref={(input) => { this.secondTextInput = input }}
              />
            </View >
          </View>
          <TouchableOpacity style={styles.startedBtn} onPress={() => { this.props.loginDev() }}>
            {
              this.props.loggingIn
                ? <ActivityIndicator size='small' color='white' />
                : <Text style={styles.startedTxt} >Sign In</Text>
            }
          </TouchableOpacity>

        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loggingIn: state.github.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginDev: () => dispatch({ type: 'AUTHENTICATION_REQUEST', data: {} })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
