import React from 'react';
import Main from '../../../TESTFIELD/main.jsx';


class App extends React.Component {
  render() {
    return <Main/>;
  }
}

React.render(
  <App/>,
  document.getElementById('content')
);
