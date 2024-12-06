import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import "./App.css";

const App = () => {

  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const scrollRef = useRef(null);

const handleSubmit = async () => {
    if (userInput.trim()) {
      // Add user message to messages
      const userMessage = `me: ${userInput}`;
      setMessages([...messages, userMessage]);
      const userInputCopy = userInput; // Capture current input for server usage
      setUserInput("");

      try {
        // Send the user's message to your backend
        const response = await axios.post("http://localhost:4000/api/chat", {
          message: userInputCopy,
        });

        // Add AI response to messages
        const serverMessage = `server: ${response.data.message}`;
        setMessages((prevMessages) => [...prevMessages, serverMessage]);
      } catch (error) {
        console.error("Error calling backend API:", error);
        const errorMessage = "server: There was an error with the AI service.";
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <h1 className="title">AI Mock Interviewer</h1>
      <div className="container">
        
        <div className="scrollable-box" ref={scrollRef}>
          {messages.length > 0 ? (
            messages.map((msg, index) => (
              <p key={index} className="message">{msg}</p>
            ))
          ) : (
            <p>No messages yet...</p>
          )}
        </div>
        <div className="input-section">
          <input
            type="text"
            className="input"
            placeholder="Type your message..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button
            className="submit-button"
            onClick={handleSubmit}
            disabled={!userInput.trim()}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default App;