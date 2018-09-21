import React from 'react';

export default class Header extends React.Component{
  render(){
    return (
      <div className="App-header">
        <h1>{this.props.dataHeader}</h1>
      </div>
    )
  }
}