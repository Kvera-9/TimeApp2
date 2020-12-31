import React, { Component } from 'react';
import './App.css';
import img_elAidanmeyer129855 from './images/Razón_elAidanmeyer129855_665570.jpg';

export default class Razón extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      text: (<div>Bienvenido al banco del tiempo</div>),
      text_plainText: "Bienvenido al banco del tiempo",
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  render() {
    
    const style_elBackgroundShape = {
      background: 'rgba(255, 255, 255, 1.000)',
     };
    const style_elAidanmeyer129855 = {
      backgroundImage: 'url('+img_elAidanmeyer129855+')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
     };
    
    const style_elRectangle = {
      background: 'rgba(254, 255, 255, 0.500)',
     };
    const style_elText = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    
    return (
      <div className="Razón">
        <div className="background">
          <div className="containerMinHeight elBackgroundShape" style={style_elBackgroundShape} />
          <div className="containerMinHeight elAidanmeyer129855" style={style_elAidanmeyer129855} />
        </div>
        
        <div className="layoutFlow">
          <div className="elRectangle">
            <div style={style_elRectangle} />
          </div>
          
          <div className="elText">
            <div className="headlineFont" style={style_elText}>
              <div>{this.state.text}</div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
  
}
