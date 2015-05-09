import React from 'react';
import Tab from './tab.jsx';

class Tabs extends React.Component {
  handleClick(tab) {
    this.props.changeTab(tab);
  }

  render() {
    return <nav>
      <ul>
        { this.props.tabList.map((tab, currentTab) => {
          return <Tab
            key={ tab.id }
            handleClick={ this.handleClick.bind(this, tab) }
            url={ tab.url }
            isCurrent={ (this.props.currentTab === tab.id) }
            location={ tab.location }/>;
        }.bind(this))}
      </ul>
    </nav>;
  }
}

export default Tabs;
