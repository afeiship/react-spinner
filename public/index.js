import ReactSpinner from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  constructor(inProps) {
    super(inProps);
    this.state = {
      loading: false
    };
  }
  onClick = (inEvent) => {
    const { loading } = this.state;
    this.setState({ loading: !loading });
  };

  render() {
    const { loading } = this.state;
    console.log('loading', loading);
    return (
      <div className="app-container">
        <button onClick={this.onClick}>Toggle Loading</button>
        <ReactSpinner value={loading} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
