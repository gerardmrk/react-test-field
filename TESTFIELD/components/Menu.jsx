// EXAMPLE (Feel free to delete):

import React from 'react';

class Menu extends React.Component {
  render() {
    let listStyle = {
      color: 'tomato'
    };

    return <ul style={listStyle}>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>;
  }
}

export default Menu;
