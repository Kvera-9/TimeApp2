import React, { Component } from 'react';
import './App.css';
import img_elBG from './images/WereThirsty_elAidanmeyer129855_665570.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';

export default class ContactUs extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      emailField: '',
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
      color: '#feffff',
      textAlign: 'center',
     };
    
    return (
      <div className="ContactUs">
        <div className="background">
          <div className="containerMinHeight elBG" style={style_elBG} />
        </div>
        
        <div className="foreground">
          <input className="baseFont elEmailField" style={style_elEmailField} type="email" placeholder={this.props.locStrings.contactus_emailfield_625829} onChange={this.textInputChanged_elEmailField} value={this.state.emailField}  />
          <Button className="actionFont elSendButton" style={style_elSendButton} onClick={this.onClick_elSendButton} >
            {this.props.locStrings.contactus_sendbutton_558898}
          </Button>
          <div className="font-AppleSystemUIFont  elHeader" style={style_elHeader}>
            <div>{this.props.locStrings.contactus_header_35473}</div>
          </div>
        </div>
      </div>
    )
  }
  
}
