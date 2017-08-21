import React, {Component} from 'react';
import {ListItem, List, Avatar, Subheader} from 'material-ui';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import icono from '../../logo.svg';
import firebase from '../../firebase';

class UserList extends Component{

  componentWillMount(){
    firebase.auth().onAuthStateChanged(user=>{
      if(!user){
        this.props.history.push('/')
      }
      else{
        const userToken = JSON.parse(localStorage.getItem('userToken'));
        console.log(userToken)
        const headers = new Headers({
          'Authorization': 'Bearer facebook ' + userToken
        })
        const init ={
          method:'GET',
          headers:headers
        }
        fetch('https://lit-depths-44447.herokuapp.com/users/', init).then(r=>{
          return r.json()
        }).then(data=>{
          console.log(data)
          this.setState({users:data})
        })
      }
    })
  }




    state = {
        users: []
    }

    displayUsers = (user) => {
        return (
            <ListItem
                primaryText={user.username}
                leftAvatar={<Avatar src={icono} />}
                rightIcon={<CommunicationChatBubble />}
            />
        );
    }


    render(){
        return(

            <div>
                <List>
                    <Subheader>Usuario Registrados</Subheader>

                    {this.state.users.map(user=>{
                      return(
                        this.displayUsers(user)
                      )
                    })}

                </List>
            </div>


        );
    }

}

export default UserList;
