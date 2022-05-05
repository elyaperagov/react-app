import logo from './logo.svg';
import './App.css';
import LoginControl from './Components/LoginControl';
import Form from './Components/Form';
import Toggle from './Components/Toggle';
import Comment from './Components/Comment';
import Clock from './Components/Clock';
import Mailbox from './Components/Mailbox';
import LoggingButton from './Components/LoggingButton';
import Warning from './Components/Warning';
import Essay from './Components/Essay';
import Select from './Components/Select';
import Reservation from './Components/Reservation';
import Calculator from './Components/Calculator';
import Dialog from './Components/Dialog';
const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello pidar',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

const messages = ['React', 'Re: React', 'Re:Re: React'];


function ListItem(props) {
  // Правильно! Не нужно определять здесь ключ:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Правильно! Ключ нужно определять внутри массива:
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];

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
      <Warning />
      <NumberList numbers={numbers} />
      <Essay />
      <Select />
      <Reservation />
      <Calculator />
      <Dialog />
    </div>
  );
}

export default App;
