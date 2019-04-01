import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  lbl: {
    color: '#000000', fontSize: 18, fontWeight: '500', letterSpacing: 0.25, lineHeight: 27, textAlign: 'center', marginTop: hp('7.5%')
  },
  accountLbl: {
    color: '#000000', fontSize: 13, fontWeight: '600', letterSpacing: 0.25, lineHeight: 21, textAlign: 'center', marginTop: hp('3.3%')
  },
  startedBtn: {
    marginTop: hp('4.42%'), height: hp('7.5%'), width: wp('82.13%'), borderRadius: 5, backgroundColor: '#000000', alignItems: 'center', alignSelf: 'center', justifyContent: 'center'
  },
  textInput: {
    marginTop: hp('3.15%'), fontSize: 13, fontWeight: '600', color: '#000', borderBottomWidth: 1, borderBottomColor: '#D8D8D8', paddingBottom: 15
  },
  inputView: {
    marginTop: hp('4.05%'), width: wp('81.33%'), height: hp('19.42%'), alignSelf: 'center'
  },
  labelStyle: {
    position: 'absolute', fontSize: 11, color: '#4A4A4A', height: hp('3.31%')
  },
  emailView: {
    height: hp('8.1%')
  },
  pwdView: {
    marginTop: hp('3.22%'), height: hp('8.1%')
  },
  startedTxt: {
    color: '#FFFFFF', fontSize: 18, letterSpacing: 0.25
  }
})
