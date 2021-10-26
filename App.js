import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
GoogleSignin.configure({
  webClientId:
    '272733356002-o7944fr2622e9ut10fvv38v16h9peikp.apps.googleusercontent.com',
});
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'rahmatnur@barangmudo.com',
      password: 'Padri0@@',
    };
  }
  onGooglePressButton = () => {
    const panggil = async () => {
      try {
        await GoogleSignin.hasPlayServices({
          showPlayServicesUpdateDialog: true,
        });
        // google services are available
      } catch (err) {
        console.error('play services are not available');
      }
      const {accessToken, idToken} = await GoogleSignin.signIn();
      console.log(
        '==============Sign Google Token Progress======================',
      );
      console.log(idToken);
      console.log('===============Credintial token=====================');
      const googlecrudential = await auth.GoogleAuthProvider.credential(
        idToken,
      );
      console.log('====================================');
      console.log(googlecrudential);
      console.log('====================================');
      const signstatus = auth().signInWithCredential(googlecrudential);
      const userDetails = await GoogleSignin.getCurrentUser();
      console.log('================Sign Progress====================');
      console.log(!signstatus?'Sign Gagal':'Sign succes');
      console.log(userDetails);
      console.log('====================================');
    };
    panggil();
  };
  createuser = () => {
    auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        console.log('Account Craeted, please sign');
      })
      .catch(e => {
        console.log('===========Eror happen=========================');
        console.log(e.code);
        console.log('====================================');
      });
  };
  loginuser = () => {
    auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        console.log('====================================');
        console.log('Berhasil login');
        console.log('====================================');
      })
      .catch(e => {
        console.log('===========Eror happen=========================');
        console.log(e.code);
        console.log('====================================');
      });
  };
  UNSAFE_componentWillMount() {
    this.loginuser();
  }

  render() {
    return (
      <View>
        <Button
          title="Google Sign-In"
          onPress={() => this.onGooglePressButton()}
        />
      </View>
    );
  }
}
