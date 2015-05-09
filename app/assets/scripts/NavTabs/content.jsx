import React from 'react';

class Content extends React.Component {
  render() {
    return <div className='content'>
      {
        this.props.currentTab === 1 ?
        <div className='home'>
          <h1>HOME</h1>
        </div>
        :
        null
      }
      {
        this.props.currentTab === 2 ?
        <div className='projects'>
          <h1>PROJECTS</h1>
        </div>
        :
        null
      }
      {
        this.props.currentTab === 3 ?
        <div className='blog'>
          <h1>BLOG</h1>
        </div>
        :
        null
      }
      {
        this.props.currentTab === 4 ?
        <div className='about'>
          <h1>ABOUT</h1>
        </div>
        :
        null
      }
      {
        this.props.currentTab === 5 ?
        <div className='contact'>
          <h1>CONTACT</h1>
        </div>
        :
        null
      }
    </div>;
  }
}

export default Content;
