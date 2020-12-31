import React, { Component } from 'react';
import './App.css';
import img_elLogowhite from './images/Logo_elLogowhite_200495.png';

export default class Logo extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
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
      background: 'rgba(169, 234, 11, 1.000)',
     };
    const style_elLogowhite = {
      backgroundImage: 'url('+img_elLogowhite+')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
     };
    
    const style_elRectangle = {
      background: 'rgba(254, 255, 255, 1.000)',
      display: 'none',
     };
    
    return (
      <div className="Logo">
        <div className="background">
          <div className="containerMinHeight elBackgroundShape" style={style_elBackgroundShape} />
        </div>
        
        <div className="foreground">
          <div className="elLogowhite" style={style_elLogowhite} />
          <div className="elRectangle" style={style_elRectangle} />
        </div>
      </div>
    )
  }
  
}
