import React, { Component } from 'react'
import {
  ScrollView,
  Text,
  KeyboardAvoidingView,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import { Colors, Images } from '../Themes'
import styles from './Styles/LaunchScreenStyles'

class HomeScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={{flex: 1,
          backgroundColor: Colors.bloodOrange}}>
          <Text style={styles.lbl}>HOME</Text>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
