import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-spinner';
const DEFAULT_INDICATOR = (
  <img
    className="is-image"
    src={'https://assets-cdn.shimo.im/assets/images/loading-b67e5a67dc.gif'}
  />
);

export default class ReactSpinner extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The spinner visible value.
     */
    value: PropTypes.bool,
    /**
     * The change handler.
     */
    onChange: PropTypes.func,
    /**
     * The indicator element.
     */
    indicator: PropTypes.element,
    /**
     * The indicator text.
     */
    caption: PropTypes.any
  };

  static defaultProps = {
    indicator: DEFAULT_INDICATOR,
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
