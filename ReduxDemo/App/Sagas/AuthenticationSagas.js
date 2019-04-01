 /* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

 import { call, put } from 'redux-saga/effects'
 import AuthenticationActions from '../Redux/AuthenticationRedux'
 const delay = (ms) => new Promise(res => setTimeout(res, ms))
// import { AuthenticationSelectors } from '../Redux/AuthenticationRedux'

 export function * getAuthentication (action) {
   const { data } = action
   console.log('aaayaa', action)
   yield delay(1000)
   yield put(AuthenticationActions.authenticationSuccess({success: true}))
   yield put({type: 'Navigation/NAVIGATE', routeName: 'HomeScreen'})
 }
