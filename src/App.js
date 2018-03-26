import React, { Component } from 'react';
import Chat from "./Chat";
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {

    render() {

        return ( 
          <MuiThemeProvider>
            <div>
              <AppBar title = "New Parent Resources" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
            </div> 
             <div>
          <h1>Hi, I am a new parent on call. What can I help you with? :)</h1>
        </div>
      
     <div>
          <Chat/>
      </div>
          </MuiThemeProvider>

        );
    }
}

export default App;