/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform, Dimensions,
  StyleSheet, ScrollView, StatusBar, Image,
  Text,
  Linking,ActivityIndicator,
  View,Arial
} from 'react-native';
import { Container, Card, Content, List, ListItem, Thumbnail, CardItem, StyleProvider, Header, Left, Right, Icon, Button, Body } from 'native-base';
const window = Dimensions.get('window');


const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFlag:false,
      json: {
        "status": "",
        "source": "",
        "sortBy": "",
        "articles": [
          {
            "author": null,
            "title": "",
            "description": "",
            "url": "",
            "urlToImage": "",
            "publishedAt": ""
          }
        ]



      }
    }
  }
  componentWillMount() {
 
    return fetch('https://newsapi.org/v1/articles?source=' + this.props.data + '&sortBy=latest&apiKey=97a6e4a8137c4abc92268989accd8722')
      .then(response => response.json())  // promise
      .then((responseJson) => {
        console.log(responseJson);

        this.setState({ json: responseJson })
        this.setState({isFlag:true})
        //  this.setState({ data: responseJson.source })






      })
      .catch((error) => {
        console.log("" + error);

      });
  }
  render() {
    if(this.state.isFlag)
      {
        return (
     
      <Container>


        <ScrollView showsVerticalScrollIndicator={false}>
          <MyStatusBar backgroundColor="black" barStyle="light-content" />

          <View style={{  height:75,
    backgroundColor:'#00796B',padding:30}}>
            <Text style={{ fontSize: 20,textAlign:'center',fontFamily: Arial,color:'#ffffff' }}
              is >{this.props.data}</Text>
          </View>
          <List style={{ marginLeft: -10 }} dataArray={this.state.json.articles}
            renderRow={(item) =>

              <ListItem style={{ margin: -20 }} onPress={() => {






              }}>
                <Content style={{ margin: 20 }} >
                  <Card style={{ flex: 0, backgroundColor: '#c3c3c3' }}>
                    <CardItem>
                      <Text style={{ color: '#404040', fontSize: 15 }}>
                        {item.title}

                      </Text>

                    </CardItem>
                    <Text style={{ color: '#404040', backgroundColor: '#404040', width: window.width, height: 1 }}>
                    </Text>
                    <CardItem>


                      <Left>

                        <Text style={{ color: '#404040', fontSize: 15, alignSelf: 'center' }}>{item.author}</Text>


                      </Left>
                      <Text style={{ fontSize: 10, marginRight: 25 }}>{item.publishedAt}</Text>
                    </CardItem>
                    <CardItem>
                      <Body>

                        <Image source={{ uri: '' + item.urlToImage }} style={{ height: 200, width: window.width, }} />

                        <Text style={{ fontSize: 12, color: '#404040', }}>
                          {item.description}
                        </Text>
                        <Text style={{ color: 'blue', fontSize: 13 }} onPress={() => Linking.openURL('' + item.url)}>
                          For more
                </Text>

                      </Body>
                    </CardItem>


                  </Card>
                </Content>
              </ListItem>
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
    );
      }
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
   activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  }
});
