import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/AboutOurPassion_elImage_689574.png';

export default class AboutOurPassion extends Component {

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
    const style_elTextCopy = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    const style_elImage = {
      height: 'auto',
     };
    const style_elTextCopy2 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    return (
      <div className="AboutOurPassion">
        <div className="background">
          <div className="containerMinHeight elBackgroundShape" style={style_elBackgroundShape} />
        </div>
        
        <div className="layoutFlow">
          <div className="elTextCopy">
            <div className="baseFont" style={style_elTextCopy}>
              <div>{this.props.locStrings.aboutourpassion_textcopy_240135}</div>
            </div>
          </div>
          
          <div className="elImage">
            <img style={style_elImage} src={img_elImage} alt=""  />
          </div>
          
          <div className="elTextCopy2">
            <div className="baseFont" style={style_elTextCopy2}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.aboutourpassion_textcopy2_68912.replace(/\n/g, '<br>')}}></div></div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
  
}
