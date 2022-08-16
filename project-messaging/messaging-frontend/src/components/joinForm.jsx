import React from "react";
import { Link } from "react-router-dom";
import socket from "../socket";
import './joinForm.css';

export default class JoinForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            roomName: "",
        }
        this.nameInputRef = React.createRef();
        this.roomInputRef = React.createRef();
    }
    componentDidMount() {
        this.nameInputRef.current.addEventListener('change', () => {
            this.setState({ userName: this.nameInputRef.current.value });
        });
        this.roomInputRef.current.addEventListener('change', () => {
            this.setState({ roomName: this.roomInputRef.current.value });
        })
    }
    render() {
        return (
            <>
                <div id="roomForm">
                    <h1>Project-Chat</h1>
                    <input ref={this.nameInputRef} id="socketName" placeholder="What is your name darling ?" type="text" />
                    <input ref={this.roomInputRef} id="socketRoom" placeholder="And please tell me where you want to chat ?" type="text" />
                    <Link id="enterRoom" to={(this.state.roomName !== "") && (this.state.userName !== "") ? `/room/${this.state.roomName}` : `/`} onClick={()=>{
                        if(this.state.roomName !== "" && this.state.userName !== ""){
                            socket.connect();
                            socket.emit('change-nick',this.state.userName);
                            socket.emit('change-room',this.state.roomName);
                            socket.userName = this.state.userName;
                            socket.roomName = this.state.roomName;
                        }
                    }}>GO THERE!</Link>
                </div>
            </>
        )
    }
}