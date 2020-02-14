# react-spinner
> Spinner for react.

## installation
```shell
npm install -S @feizheng/react-spinner
```

## update
```shell
npm update @feizheng/react-spinner
```

## properties
| Name      | Type    | Default         | Description                           |
| --------- | ------- | --------------- | ------------------------------------- |
| className | string  | -               | The extended className for component. |
| value     | bool    | false           | The spinner visible value.            |
| onChange  | func    | -               | The change handler.                   |
| indicator | element | <img src="#" /> | The indicator element.                |
| caption   | any     | 'loading'       | The indicator text.                   |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-spinner/dist/style.scss";

  // customize your styles:
  $react-spinner-options: ()
  ```
2. import js
  ```js
  import ReactSpinner from '@feizheng/react-spinner';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  import musicSvg from './assets/music-1080px.svg';
  import wedgesSvg from './assets/wedges-2.9s-108px.svg';

  class App extends React.Component {
    constructor(inProps) {
      super(inProps);
      this.state = {
        loading: false,
        svg: musicSvg
      };
    }
    handleClick1 = (inEvent) => {
      const { loading } = this.state;
      this.setState({ loading: !loading, svg: musicSvg });
    };

    handleClick2 = (inEvent) => {
      const { loading } = this.state;
      this.setState({ loading: !loading, svg: wedgesSvg });
    };

    render() {
      const { loading, svg } = this.state;
      return (
        <div className="app-container">
          <button className="button" onClick={this.handleClick1}>
            Toggle Loading - Music
          </button>
          <button className="button" onClick={this.handleClick2}>
            Toggle Loading - WedgesSvg
          </button>
          <ReactSpinner value={loading} indicator={<img src={svg} />}>
            <img
              width="100%"
              src="https://yt-adp.ws.126.net/linxue/7001123_axeu_20191122.jpg"
            />
            <img
              hidden
              width="100%"
              src="http://cms-bucket.ws.126.net/2019/11/25/886cba5835d2491798fe3d6584778129.png"
            />
          </ReactSpinner>
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-spinner/
