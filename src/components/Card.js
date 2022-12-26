import React, {Component} from 'react'

class Card extends Component{
  constructor(){
    super();
    this.state = {mostrar: false }
  }
  componentDidMount(){
    fetch('http://localhost:4000/api/')
      .then(res=>res.json())
      .then(res=>this.setState({mostrar: res.response}));
  }
  render(){
    return (
      <div className='card bg-info col-1 mx-auto'>
        {this.state.mostrar ? <div className='card-body'>Si no está logeado</div>
        : <div>No se mostró</div>}
      </div>
    )
  }
}

export default Card
