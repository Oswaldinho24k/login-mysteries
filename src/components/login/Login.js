import React from 'react';
import {RaisedButton, FontIcon} from 'material-ui';
import ActionLock from 'material-ui/svg-icons/action/lock';
import firebase from '../../firebase';

class Login extends React.Component{

  login=()=>{
    let provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(result=>{
      
      let token = result.credential.accessToken
      console.log(token)
      localStorage.setItem('userToken', JSON.stringify(token));
      this.props.history.push('/users')
    })


  }

    render(){
        const style = {
            margin: 12,
        };



        return(
            <div>
                <RaisedButton label="Facebook"
                    onTouchTap={this.login}
                    primary={true}
                    style={style}
                    icon={<ActionLock />}
                />
            </div>
        );
    }

}

export default Login;
