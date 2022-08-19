import React from "react";
import './chatScreen.css';
import { FiSend } from 'react-icons/fi';
import socket from "../socket";



export default class ChatScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            yourMessage: ""
        }
        this.messageScreenRef = React.createRef();
        this.buttonRef = React.createRef();
        this.inputRef = React.createRef();
    }

    displayMessage(message) {

        const div = document.createElement('div');
        const innerDiv = document.createElement('p');
        innerDiv.className = `messageText`;
        innerDiv.innerHTML = `${message.content}`;
        div.appendChild(innerDiv);
        div.className = `message ${message.sender === socket.userName ? "me" : "other"}`;
        this.messageScreenRef.current.appendChild(div);
        this.setState({ yourMessage: "" });

    }
    componentDidMount() {
        socket.on('get-message', message => this.displayMessage(message));
    }
    render() {
        return (
            <>
                <div ref={this.messageScreenRef} id="messages">

                </div>
                <div id="controller">
                    <input ref={this.inputRef} onChange={(event) => {
                        this.setState({ yourMessage: event.target.value })
                    }} type="text" placeholder="Enter your message..." id="message" />
                    <button onClick={() => {
                        if (this.state.yourMessage !== "") {
                            socket.emit('send-message', this.state.yourMessage);
                            this.inputRef.current.value = "";
                        }
                    }} id="send"><FiSend /></button>
                </div>
            </>
        )
    }
}