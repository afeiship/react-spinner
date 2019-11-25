import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';

import defSpinImg from '@/assets/images/spinner-1s-200px.svg';
const CLASS_NAME = 'react-spinner';

export default class extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    className: PropTypes.string,
    spin: PropTypes.element,
    caption: PropTypes.any
  };

  static defaultProps = {
    spin: <img className="is-image" src={'https://assets-cdn.shimo.im/assets/images/loading-b67e5a67dc.gif'} />,
    caption: 'loading'
  };

  render() {
    const { className, spin, caption, children, ...props } = this.props;
    return (
      <div
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        <div className={`${CLASS_NAME}__bd`}>
          <span className={`${CLASS_NAME}__spin`}>{spin}</span>
          {caption && <div className={`${CLASS_NAME}__caption`}>{caption}</div>}
        </div>
        {children}
      </div>
    );
  }
}
