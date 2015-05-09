import React from 'react';
import Tabs from './tabs.jsx';
import Content from './content.jsx';

let tabList = [
  { id: 1, location: 'Home', url: '/home' },
  { id: 2, location: 'Projects', url: '/projects' },
  { id: 3, location: 'Blog', url: '/blog' },
  { id: 4, location: 'About', url: '/about' },
  { id: 5, location: 'Contact', url: '/contact' }
];

class Main extends React.Component {
  getInitialState() {
    return {
      tabList: tabList,
      currentTab: 1
    };
  }
  changeTab(tab) {
    this.setState({ currentTab: tab.id });
  }
  render() {
    return <div>
      <Tabs
        currentTab={ this.state.currentTab }
        changeTab={ this.changeTab }
        tabList={ this.state.tabList }/>
      <Content currentTab={ this.state.currentTab }/>
    </div>;
  }
}

export default Main;
