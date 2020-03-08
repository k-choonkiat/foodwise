import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';

class Typography extends Component {
  render() {
    return (
      <ChatBot
  steps={[
    {
      id: 'hello-world',
      message: 'Hello World!',
      end: true,
    },
  ]}
/>
  
    )};
}

export default Typography;
