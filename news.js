/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform, ScrollView,
  StyleSheet, StatusBar,ActivityIndicator,
  Text,
  View, Image, Arial,
} from 'react-native';
import { Container, Card, Content, List, ListItem, Thumbnail, CardItem, StyleProvider, Header, Left, Right, Icon, Button, Body } from 'native-base';
import GridView from 'react-native-super-grid';
import { Actions } from 'react-native-router-flux'


const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);


export default class News extends Component {
  componentWillMount() {
    return fetch('https://newsapi.org/v1/sources')
      .then(response => response.json())  // promise
      .then((responseJson) => {
        console.log(responseJson);

        this.setState({ Jsonse: responseJson })
        this.setState({ data: responseJson.source })
        this.setState({isloading:true})
        console.log(this.state.Jsonse.sources);





      })
      .catch((error) => {
        console.log("" + error);

      });

  }
  constructor(props) {
    super(props)
    this.state = {

      isloading: false,


      Jsonse: {
        "status": "",
        "sources": [
          {
            "id": "",
            "name": "",
            "description": "",
            "url": "",
            "category": "",
            "language": "en",
            "country": "au",
            "urlsToLogos": {
              "small": "",
              "medium": "",
              "large": ""
            },
            "sortBysAvailable": [
              "top"
            ]
          }
        ],

      }
    }
  }





  render() {
    if(this.state.isloading)
      {
    return (
      <Container style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <MyStatusBar backgroundColor="black" barStyle="light-content" />

          <View style={{
            height: 75,
            backgroundColor: '#00796B', padding: 30
          }}>
            <Text style={{ fontSize: 20, textAlign: 'center', fontFamily: Arial, color: '#ffffff' }}
              is >News Update</Text>
          </View>
          <List style={{ marginLeft: -10 }} dataArray={this.state.Jsonse.sources}
            renderRow={(item) =>

              <ListItem style={{ margin: -20 }} onPress={() => {



                Actions.detail(item.id)


              }}>
                <Card style={{ height: 'auto', backgroundColor: 'white', margin: 10 }} >


                  <Left>
                    <View style={{ flexDirection: 'row' }}>
                      <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ygpDq4GUW4yWged6b05taV1X3vdkEBFRQQMKQ7JeN-Ycd5RO' }} />

                      <Text style={{ color: '#404040', fontSize: 20, marginLeft: 10, marginTop: 15 }} >{item.name}</Text>

                    </View>
                    <Text style={{ color: '#404040', fontSize: 15, margin: 10, alignSelf: 'center' }}>{item.description}</Text>
                  </Left>









                </Card>

              </ListItem  >
            }>

          </List>





        </ScrollView>
      </Container>
    );
      }
  else{
    return (
     
      <View style={styles.container} >


        
          <MyStatusBar backgroundColor="black" barStyle="light-content" />

      
         <View style={{ flex: 1, paddingTop: 20 }}>
                <View style={styles.container}>
                  <ActivityIndicator

                    color='#00796B'
                    size="large"
                    style={styles.activityIndicator} />
                </View>
              </View>
   
      </View>
    );}
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginBottom: 10,
    marginTop: 20,
    backgroundColor: 'white'

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
 
  containers: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  
  },
   activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  }
});
