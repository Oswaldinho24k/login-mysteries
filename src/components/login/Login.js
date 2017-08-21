import React from 'react';
import {RaisedButton, FontIcon} from 'material-ui';
import ActionLock from 'material-ui/svg-icons/action/lock';

class Login extends React.Component{

    render(){
        const style = {
            margin: 12,
        };

        return(
            <div>
                <RaisedButton label="Twitter" 
                    primary={true}
                    style={style} 
                    icon={<ActionLock />}
                />
            </div>
        );
    }

}

export default Login;