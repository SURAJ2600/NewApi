import React from 'react';
import { Scene, Router,Reducer } from 'react-native-router-flux'
import News from './news.js';
import Detail from './detailnews.js';


import {Container, StyleProvider} from 'native-base';
const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        console.log("ACTION:", action);
        return defaultReducer(state, action);
    }
};
const RouterComponent = () => {
     
       return (
       <Router>

  
           <Scene key="root">
               <Scene key="news" component={News}  hideNavBar={true}/>
         <Scene key="detail" component={Detail}  hideNavBar={true}/>
            
            </Scene>
          </Router>
         
         
          
        

      );
}

export default RouterComponent;