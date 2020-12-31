import React, { Component } from 'react';
import './App.css';

export default class OurTeam extends Component {

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
      background: 'rgba(255, 255, 255, 1.000)',
     };
    const style_elTextBlock = {
      fontSize: 30.1,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    
    return (
      <div className="OurTeam">
        <div className="background">
          <div className="containerMinHeight elBackgroundShape" style={style_elBackgroundShape} />
        </div>
        
        <div className="foreground">
          <div className="font-AppleSystemUIFont  elTextBlock" style={style_elTextBlock}>
            <div>{this.props.locStrings.ourteam_textblock_1002658}</div>
          </div>
        </div>
      </div>
    )
  }
  
}
