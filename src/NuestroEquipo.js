import React, { Component } from 'react';
import './App.css';

export default class NuestroEquipo extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      textblock: (<div>¿Alguna vez te has planteado que tu tiempo puede ser una moneda de cambio?<br /></div>),
      textblock_plainText: "¿Alguna vez te has planteado que tu tiempo puede ser una moneda de cambio?\n",
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
    const style_elTextBlock = {
      fontSize: 30.1,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    
    return (
      <div className="NuestroEquipo">
        <div className="background">
          <div className="containerMinHeight elBackgroundShape" style={style_elBackgroundShape} />
        </div>
        
        <div className="foreground">
          <div className="font-AppleSystemUIFont  elTextBlock" style={style_elTextBlock}>
            <div><div dangerouslySetInnerHTML={{__html: this.state.textblock_plainText.replace(/\n/g, '<br>')}}></div></div>
          </div>
        </div>
      </div>
    )
  }
  
}
