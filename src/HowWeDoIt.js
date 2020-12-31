import React, { Component } from 'react';
import './App.css';

export default class HowWeDoIt extends Component {

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
      background: 'rgba(235, 242, 211, 1.000)',
     };
    const style_elText = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    const style_elTextCopy = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elSpacer = {
      background: 'rgba(255, 255, 255, 0.000)',
     };
    
    return (
      <div className="HowWeDoIt">
        <div className="background">
          <div className="containerMinHeight elBackgroundShape" style={style_elBackgroundShape} />
        </div>
        
        <div className="layoutFlow">
          <div className="elText">
            <div className="headlineFont" style={style_elText}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.howwedoit_text_381730.replace(/\n/g, '<br>')}}></div></div>
            </div>
          </div>
          
          <div className="elTextCopy">
            <div className="baseFont" style={style_elTextCopy}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.howwedoit_textcopy_850462.replace(/\n/g, '<br>')}}></div></div>
            </div>
          </div>
          
          <div className="elSpacer">
            <div style={style_elSpacer} />
          </div>
        </div>
        
      </div>
    )
  }
  
}
