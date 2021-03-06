import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactSpinner from '../src/main';
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
