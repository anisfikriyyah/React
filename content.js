import React from 'react';

export default class Content extends React.Component{
  render(){
    return (
      <div className="App-content">
        <div>
          <label>Header</label> <input value={this.props.dataState.header} onChange={this.props.changeHeader}/>
        </div>
        <br/>
        <div>
          <label>footer</label> <input value={this.props.dataState.footer} onChange={this.props.changeFooter}/>
        </div>
      </div>
    )
  }
}