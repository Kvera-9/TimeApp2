import React, { Component } from 'react';
import './App.css';

export default class Slogantop extends Component {

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
      background: 'rgba(85, 180, 22, 1.000)',
     };
    const style_elTextCopy = {
      fontSize: 36.6,
      color: '#feffff',
      textAlign: 'center',
     };
    
    return (
      <div className="Slogantop">
        <div className="background">
          <div className="containerMinHeight elBackgroundShape" style={style_elBackgroundShape} />
        </div>
        
        <div className="layoutFlow">
          <div className="elTextCopy">
            <div className="font-AppleSystemUIFont" style={style_elTextCopy}>
              <div>{this.props.locStrings.slogantop_textcopy_323518}</div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
  
}
