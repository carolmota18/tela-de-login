import React from 'react'

class Singup extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Email:'',
            Password:'',
            ConfirmPassword:'',
            Error:'',
        }
    }
    SalvarEmail=(event)=>{
        this.setState({Email:event.target.value})
    }
    SalvarSenha=(event)=>{
        this.setState({Password:event.target.value})
    }
    SalvarComfirmacaodesenha=(event)=>{
        this.setState({ConfirmPassword:event.target.value})
    }
    submit=(event)=>{
        // event.prevetDefault()
        
        if (this.state.Password===this.state.ConfirmPassword) {
            this.props.criarconta(this.state.Email, this.state.Password)
        }
        else{
            
            this.setState({Error:'as senhas tem ser iguais'})
        }
    }
        
    
    render(){
        return(
            <div>
                <form onSubmit={this.submit}>
                    <label>Email</label>
                    <input type='Email' required onChange={this.SalvarEmail}/> 
                    <label>Password</label>
                    <input type='Password' required onChange={this.SalvarSenha}/> 
                    <label>ConfirmPassword</label>
                    <input type='Password' required onChange={this.SalvarComfirmacaodesenha}/> 
                    <button>Sing up</button>
                </form>
                <a href='#'>
                  enter accont 
                </a>
                {this.state.Error}
            </div>
        )
    }
}
export default Singup