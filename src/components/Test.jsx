import { useState, useEffect } from "react";
import io from "socket.io-client";

const ChatTestPage = () => {
  const [socket, setSocket] = useState(null);
  const [roomId, setRoomId] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    // Connect to the Socket.IO server
    const socketConnection = io("http://localhost:3000", {
      transports: ["websocket"],
    });
    setSocket(socketConnection);

    // Listen for chat history
    socketConnection.on("chatHistory", (history) => {
      console.log("Chat History:", history);
      setChatHistory(history);
    });

    // Listen for new messages
    socketConnection.on("newMessage", (newMessage) => {
      console.log("New Message:", newMessage);
      setMessages((prev) => [...prev, newMessage]);
    });

    // Listen for errors
    socketConnection.on("error", (err) => {
      console.error("Socket Error:", err);
    });

    return () => {
      socketConnection.disconnect();
    };
  }, []);

  const handleJoinRoom = () => {
    if (socket && roomId) {
      socket.emit("joinRoom", { roomId });
    }
  };

  const handleSendMessage = () => {
    if (socket && roomId && message) {
      socket.emit("sendMessage", {
        roomId,
        senderId: "your-sender-id", // Replace with a valid sender ID
        content: message,
      });
      setMessage(""); // Clear the input field
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Socket.IO Chat Test</h1>

      <div style={{ marginBottom: "20px" }}>
        <label>
          <strong>Room ID:</strong>
        </label>
        <input
          type="text"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          style={{ marginLeft: "10px", padding: "5px" }}
        />
        <button onClick={handleJoinRoom} style={{ marginLeft: "10px" }}>
          Join Room
        </button>
      </div>

      <div>
        <label>
          <strong>Message:</strong>
        </label>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ marginLeft: "10px", padding: "5px" }}
        />
        <button onClick={handleSendMessage} style={{ marginLeft: "10px" }}>
          Send Message
        </button>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h2>Chat History</h2>
        <ul>
          {chatHistory.map((msg, index) => (
            <li key={index}>
              <strong>{msg.sender?.name || "Unknown"}:</strong> {msg.content}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h2>New Messages</h2>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>
              <strong>{msg.sender || "Unknown"}:</strong> {msg.content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatTestPage;
