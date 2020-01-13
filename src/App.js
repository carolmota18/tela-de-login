import React from 'react';
import Login from './componente/Login';
import Singup from './componente/Singup'
import Timer from './componente/Timer'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      Tela:'',
      Usuario:{
        Email:'',
        Password:'',
      }
    }
  }

  criarconta=(Email,Password)=> {
  this.setState({
    Usuario:{
      Email:Email,
      Password:Password,
    },
    Tela:'login'
  })
    
  }

  renderTela= () => {
    switch(this.state.Tela){
      case 'singup':
        return <Singup criarconta={this.criarconta}/>
      case'timer':
        return <Timer/>
      case 'login':
      default:
        return <Login/>
    }
  }

  render(){
    return (
      <div className="App">
        <Singup/>
      </div>
    );
  }
  
  
}

export default App;
