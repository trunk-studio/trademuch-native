
import React, {
  StyleSheet,
  View,
  Component,
  Image,
  Text,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Dimensions from 'Dimensions';
import MaskView from './MaskView';

const windowSize = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  bgContainer: {
    flex: 1,
    top: 0,
    left: 0,
    position: 'absolute',
  },
  backImg: {
    width: windowSize.width,
    height: windowSize.height,
  },
  logo: {
    marginTop: 100,
    width: 180,
    height: 180,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'transparent',
  },
  loginButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    color: '#fff',
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 1 },
    textShadowColor: '#000000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});

export default class Registered extends Component {

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.bgContainer}>
          <Image source={{ uri: 'login' }} style={styles.backImg} />
        </View>
        <View style={styles.header}>
          <Image style={styles.logo} source={{ uri: 'http://i.imgur.com/4VdrFFQ.png' }} />
        </View>
        <View style={styles.loginButtonContainer} >
          <Text style={styles.text}>Log in or sign up with Facebook</Text>
        </View>
        <MaskView />
      </View>
    );
  }
}