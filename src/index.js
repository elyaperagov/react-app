import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import LoginControl from './LoginControl';
import Form from './Form';
import Toggle from './Toggle';
import Comment from './Comment';
import Clock from './Clock';
import Mailbox from './Mailbox';
import LoggingButton from './LoggingButton';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello pidar',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

const messages = ['React', 'Re: React', 'Re:Re: React'];

function App() {
  return (
    <div>
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author} />
      <Clock />
      <LoggingButton />
      <LoginControl />
      <Toggle />
      <Form />
      <Mailbox unreadMessages={messages} />
    </div>
  );
}

root.render(<App />, document.getElementById('root'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
