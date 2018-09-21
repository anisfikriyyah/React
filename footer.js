import React from 'react';
export default class Footer extends React.Component{
  render(){
    return (
      <div className="App-footer">
        <p><b>{this.props.dataFooter}</b></p>
      </div>
    )
  }
}