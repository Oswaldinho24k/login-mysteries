import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {AppBar, IconMenu, MenuItem, IconButton} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Routes from './routes';

class App extends Component {

  state = {
    logged: true
  }

  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };

  render() {

    const Logged = () => (
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
      </IconMenu>
    );
    
    return (

      <div>
        <AppBar
        title="Login mysteries"
        iconElementRight={this.state.logged ? <Logged /> : "Login"}
      />
        <Routes/>
      </div>
    );
  }
}


export default App;
