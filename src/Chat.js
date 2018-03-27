import React from "react";
import io from "socket.io-client";
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {grey50} from 'material-ui/styles/colors';



const style = {

  placeholderStyle: {
    color: grey50,
  },
  margin: 12,

};

class Chat extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            message: '',
            messages: []
        };

        this.socket = io('new-parent-chat.herokuapp.com');
        // this.socket = io('localhost:8080');

        this.socket.on('RECEIVE_MESSAGE', function(data){
            addMessage(data);
        });

        const addMessage = data => {
            console.log(data);
            this.setState({messages: [...this.state.messages, data]});
            console.log(this.state.messages);
        };

        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                author: this.state.username,
                message: this.state.message
            })
            this.setState({message: ''});

        }
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Start A Chat With Me</div>
                            
                                <div className="messages">
                                    {this.state.messages.map(message => {
                                        return (
                                            <div>{message.author}: {message.message}</div>
                                        )
                                    })}
                                </div>

                            </div>
                            <div className="card-footer">
                            <TextField type="text" hintText="Username" hintStyle={style.placeholderStyle} value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} />
                            <br />
                            <TextField type="text" hintText="Message" hintStyle={style.placeholderStyle} className="form-control" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})} />

       
                                <br/>
                                 <RaisedButton onClick={this.sendMessage} label="Send" primary={true} style={style} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;