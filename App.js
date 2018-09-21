import React from 'react';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import './App.css';
export default class App extends React.Component {
  constructor(props){
    super(props);
// deklarasi isi state
    this.state = {
      header: "abnnnn",
      footer: "fikriyyah"
    };
}
// mengubah header dengan setState
  changeHeader(e){
    this.setState({header: e.target.value});
  }
// mengubah footer dengan setState
  changeFooter(e){
    this.setState({footer: e.target.value});
  }
// dataState : props untuk melempar data state ke component konten
  // changeHeader, changeFooter: props untuk menangkap data perubahan dari component konten
  // dataHeader: props untuk melempar data state ke component header
  // dataFooter: props untuk melempar data state ke component footer
render() {
    return (
      <div className="App">
        <Header dataHeader={this.state.header} />
<Content
          dataState={this.state}
          changeHeader={this.changeHeader.bind(this)}
          changeFooter={this.changeFooter.bind(this)} />
<Footer dataFooter={this.state.footer} />
      </div>
    )
  }
}