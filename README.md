# react-spinner
> Spinner for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-spinner
```

## properties
| Name      | Type    | Required | Default   | Description                           |
| --------- | ------- | -------- | --------- | ------------------------------------- |
| className | string  | false    | -         | The extended className for component. |
| value     | bool    | false    | false     | The spinner visible value.            |
| indicator | element | false    | -         | The indicator element.                |
| caption   | any     | false    | 'loading' | The indicator text.                   |


## usage
1. import css
  ```scss
  @import "~@jswork/react-spinner/dist/style.css";

  // or use sass
  @import "~@jswork/react-spinner/dist/style.scss";

  // customize your styles:
  $react-spinner-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactSpinner from '@jswork/react-spinner';
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
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-spinner">
          <button
            className="button mb-2 is-fullwidth is-primary"
            onClick={this.handleClick1}>
            Toggle Loading - Music
          </button>
          <button
            className="button mb-2 is-fullwidth is-info"
            onClick={this.handleClick2}>
            Toggle Loading - WedgesSvg
          </button>
          <ReactSpinner value={loading} indicator={<img src={svg} />}>
            <img
              hidden
              width="100%"
              src="https://yt-adp.ws.126.net/linxue/7001123_axeu_20191122.jpg"
            />
            <img
              width="100%"
              src="http://cms-bucket.ws.126.net/2019/11/25/886cba5835d2491798fe3d6584778129.png"
            />
          </ReactSpinner>
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-spinner/


## license
Code released under [the MIT license](https://github.com/afeiship/react-spinner/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-spinner
[version-url]: https://npmjs.org/package/@jswork/react-spinner

[license-image]: https://img.shields.io/npm/l/@jswork/react-spinner
[license-url]: https://github.com/afeiship/react-spinner/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-spinner
[size-url]: https://github.com/afeiship/react-spinner/blob/master/dist/react-spinner.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-spinner
[download-url]: https://www.npmjs.com/package/@jswork/react-spinner
