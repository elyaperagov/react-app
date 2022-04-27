
import React from 'react';

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.state = {isLogged: true};

    // Эта привязка обязательна для работы `this` в колбэке.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.state.isLogged)
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      isLogged: !prevState.isLogged
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Включено' : 'Выключено'}
      </button>
    );
  }
}
