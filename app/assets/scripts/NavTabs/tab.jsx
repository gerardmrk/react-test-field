import React from 'react';

class Tab extends React.Component {
  handleClick(e) {
    e.preventDefault();
    this.props.handleClick();
  }
  render() {
    return <li className={ this.props.isCurrent ? 'current' : null }>
      <a onClick={ this.handleClick } href={ this.props.url }>{ this.props.location }</a>
    </li>;
  }
}

export default Tab;
