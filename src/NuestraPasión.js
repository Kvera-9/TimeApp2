import React, { Component } from 'react';
import './App.css';

export default class NuestraPasión extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      textblock: (<div>Nuestra Pasión</div>),
      textblock_plainText: "Nuestra Pasión",
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
      background: 'rgba(0, 145, 156, 1.000)',
     };
    const style_elTextBlock = {
      fontSize: 30.1,
      color: '#feffff',
      textAlign: 'center',
     };
    
    return (
      <div className="NuestraPasión">
        <div className="background">
          <div className="containerMinHeight elBackgroundShape" style={style_elBackgroundShape} />
        </div>
        
        <div className="foreground">
          <div className="font-AppleSystemUIFont  elTextBlock" style={style_elTextBlock}>
            <div>{this.state.textblock}</div>
          </div>
        </div>
      </div>
    )
  }
  
}
