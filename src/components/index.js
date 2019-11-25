import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-spinner';

export default class extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.bool,
    indicator: PropTypes.element,
    caption: PropTypes.any
  };

  static defaultProps = {
    indicator: (
      <img
        className="is-image"
        src={'https://assets-cdn.shimo.im/assets/images/loading-b67e5a67dc.gif'}
      />
    ),
    caption: 'loading',
    value: false
  };

  render() {
    const {
      className,
      indicator,
      caption,
      value,
      children,
      ...props
    } = this.props;
    return (
      <div
        data-component={CLASS_NAME}
        data-value={value}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        <div hidden={!value} className={`${CLASS_NAME}__bd`}>
          <span className={`${CLASS_NAME}__indicator`}>{indicator}</span>
          {caption && <div className={`${CLASS_NAME}__caption`}>{caption}</div>}
        </div>
        <div hidden={!value} className={`${CLASS_NAME}__overlay`}></div>
        {children}
      </div>
    );
  }
}
