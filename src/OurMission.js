import React, { Component } from 'react';
import './App.css';

export default class OurMission extends Component {

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
    const style_elTextBlock = {
      fontSize: 30.1,
      color: '#feffff',
      textAlign: 'center',
     };
    
    return (
      <div className="OurMission">
        <div className="background">
          <div className="containerMinHeight elBackgroundShape" style={style_elBackgroundShape} />
        </div>
        
        <div className="foreground">
          <div className="font-AppleSystemUIFont  elTextBlock" style={style_elTextBlock}>
            <div>{this.props.locStrings.ourmission_textblock_401318}</div>
          </div>
        </div>
      </div>
    )
  }
  
}
