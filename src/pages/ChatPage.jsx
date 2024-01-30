import axios from "axios";
import { useEffect, useState,  } from "react";


const ChatPage = () => {
    const [chats,setChats] = useState([])
    const fetchData = async ()=>{
        const {data} = await axios.get('http://localhost:5000/api/chat')
        setChats(data)
    }
    useEffect(()=>{
        fetchData()
    },[])
    console.log(chats)
    return (
        <div>
            <h1>{chats.map((chat)=> {
                return <p key={chat._id}>{chat.chatName}</p>
            })}</h1>
        </div>
    );
};

export default ChatPage;