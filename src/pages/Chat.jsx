import React, {useEffect, useRef, useState} from 'react';
import Button from "../UI/button/Button";
import Input from "../UI/input/input";
import classes from "../styles/Chat.module.css";

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [isConnectionOpen, setConnectionOpen] = useState(false);
    const [messageBody, setMessageBody] = useState("");

    const user_id = localStorage.getItem("user_id");
    const ws = useRef();


    const sendMessage = () => {
        if (messageBody) {
            ws.current.send(
                JSON.stringify({
                    sender: user_id,
                    body: messageBody,
                })
            );
            setMessageBody("");
        }
    };

    useEffect(() => {
        ws.current = new WebSocket("ws://localhost:5678");

        ws.current.onopen = () => {
            console.log("Connection opened");
            setConnectionOpen(true);
        };

        ws.current.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setMessages((_messages) => [..._messages, data]);
        };

        return () => {
            console.log("Cleaning up...");
            ws.current.close();
        };
    }, []);


    return (
        <div>
            <div className={classes.chat__frame}>
                {messages.map((message, index) => (
                    <div key={index} className={
                        message.sender === user_id ? classes.current__user__message : classes.another__user__message
                    }
                    >
                        <div>
                            {message.body}
                            <div className={classes.date}>
                                <br/>
                                at {new Date().toLocaleTimeString()}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            <div>
                You are chatting with id {user_id}
                <Input
                    id="message"
                    type="text"
                    placeholder="message text"
                    value={messageBody}
                    onChange={(e) => setMessageBody(e.target.value)}
                    required
                />
                <Button
                    onClick={sendMessage}
                    disabled={!isConnectionOpen}
                >
                    Send Message
                </Button>
            </div>
        </div>
    );
}


export default Chat;