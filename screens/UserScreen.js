// screens/UserScreen.js
import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {ListItem} from 'react-native-elements';
import firebase from '../database/firebaseDb';
class UserScreen extends Component {
  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection('users');
    this.state = {
      isLoading: true,
      userArr: [],
    };
  }
  componentDidMount() {
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  getCollection = querySnapshot => {
    const userArr = [];
    querySnapshot.forEach(res => {
      const {name, email, mobile} = res.data();
      userArr.push({
        key: res.id,
        res,
        name,
        email,
        mobile,
      });
    });
    console.log(userArr);
    this.setState({
      userArr,
      isLoading: false,
    });
  };
  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }
    return (
      <ScrollView style={styles.container}>
        {this.state.userArr.map((item, i) => {
          return (
            // <ListItem
            //   key={i}
            //   chevron
            //   bottomDivider
            //   title={item.name}
            //   subtitle={item.name}
            //   onPress={() => {
            //     this.props.navigation.navigate('UserDetailScreen', {
            //       userkey: item.key,
            //     });
            //   }}
            // />
            <TouchableOpacity
              style={{
                height: 40,
                margin: 5,
                marginHorizontal: 10,
                borderBottomWidth: 1,
              }}
              onPress={() => {
                this.props.navigation.navigate('UserDetailScreen', {
                  userkey: item.key,
                });
              }}>
              <Text
                style={{
                  fontSize: 14,
                }}>
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                }}>
                {item.email}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 22,
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default UserScreen;
