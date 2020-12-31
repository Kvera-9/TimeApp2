import React, { Component } from 'react';
import './App.css';
import img_elBG from './images/Registro_elBG_957770.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';

export default class Registro extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      emailField: '',
      header: (<div>Regístrate en el banco del tiempo</div>),
      header_plainText: "Regístrate en el banco del tiempo",
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  textInputChanged_elEmailField = (event) => {
    this.setState({emailField: event.target.value});
  }
  
  onClick_elSendButton = (ev) => {
    alert("Sorry but this is just a demo so your email address was not sent to anyhere");
    
    
    
    
  
  }
  
  
  render() {
    const style_elBG = {
      backgroundImage: 'url('+img_elBG+')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
     };
    
    const style_elEmailField = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      color: '#feffff',
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_elSendButton = {
      display: 'block',
      color: '#fff',
      textAlign: 'center',
      backgroundColor: '#242524',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_elHeader = {
      fontSize: 19.4,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    
    return (
      <div className="Registro">
        <div className="background">
          <div className="containerMinHeight elBG" style={style_elBG} />
        </div>
        
        <div className="foreground">
          <input className="baseFont elEmailField" style={style_elEmailField} type="email" placeholder="Email" onChange={this.textInputChanged_elEmailField} value={this.state.emailField}  />
          <Button className="actionFont elSendButton" style={style_elSendButton} onClick={this.onClick_elSendButton} >
            Enviar
          </Button>
          <div className="font-americanTypewriter  elHeader" style={style_elHeader}>
            <div>{this.state.header}</div>
          </div>
        </div>
      </div>
    )
  }
  
}
