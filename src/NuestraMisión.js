import React, { Component } from 'react';
import './App.css';

export default class NuestraMisión extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      textblock: (<div>Nuestra misión:</div>),
      textblock_plainText: "Nuestra misión:",
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
      background: 'rgba(31, 146, 158, 1.000)',
     };
    const style_elTextBlock = {
      fontSize: 30.1,
      color: '#feffff',
      textAlign: 'center',
     };
    
    return (
      <div className="NuestraMisión">
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
