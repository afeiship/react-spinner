# react-spinner
> Spinner for react.

## installation
```shell
npm install -S @feizheng/react-spinner
```

## usage
1. import css
  ```scss
  @import "~react-spinner/style.scss";

  // customize your styles:
  $react-spinner-options: ()
  ```
2. import js
  ```js
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

  ```

## documentation
- https://afeiship.github.io/react-spinner/
