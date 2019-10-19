import React from 'react';
import logo from './logo.svg';
import './App.css';
import Testew from './Testew'


export default class App extends React.Component {

initialState={
    nome: "",
    cidade:"SP",
    data:"2017-03-03"
  }

  constructor(props){
    super(props)
    this.state = this.initialState
  }


  // function atualizaInput() {
  //   setState
  // }
// componentWillMount(){
//   setTimeout(()=>{
//     this.setState({nome:"canta"})
//   },1000)
// }

atualizaInput1 = function(e){
  this.setState({nome:e.target.value})
}

atualizaInput2 = function(e){
  this.setState({cidade:e.target.value})
}

atualizaInput3 = function(e){
  this.setState({data:e.target.value})
}



  render() {
    return (
      <div className="App">
        <Testew/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        <input type="text" value ={this.state.nome} onChange={this.atualizaInput1.bind(this)}  />
        <input type="text" value ={this.state.cidade} onChange={this.atualizaInput2.bind(this)}  />
        <input type="date" value ={this.state.data} onChange={this.atualizaInput3.bind(this)}  />


        </header>
      </div>
    );
  }
}


