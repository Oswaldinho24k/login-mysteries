import React, {Component} from 'react';
import {ListItem, List, Avatar, Subheader} from 'material-ui';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import icono from '../../logo.svg';

class UserList extends Component{


    state = {
        users: []
    }

    displayUsers = (user) => {
        return (
            <ListItem
                primaryText="user.name"
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
                    
                    {/*{this.state.users.map(displayUsers(user))}*/}

                    <ListItem
                        primaryText="David"
                        leftAvatar={<Avatar src="images/ok-128.jpg" />}
                        rightIcon={<CommunicationChatBubble />}
                    />

                </List>
            </div>


        );
    }

}

export default UserList;