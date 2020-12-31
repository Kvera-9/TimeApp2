import React, { Component } from 'react';
import './App.css';

export default class Map extends Component {

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
    
    // Embedded HTML content for element 'embed'
    const htmlContent_embed = "<style>\n    .google-maps {\n        position: relative;\n        padding-bottom: 30%; // This is the aspect ratio\n        height: 0;\n        overflow: hidden;\n    }\n    .google-maps iframe {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100% !important;\n        height: 100% !important;\n    }\n</style>\n\n<div class=\"google-maps\">\n    <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d405688.62766079494!2d-122.32197360858335!3d37.40301688779421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad0cfc739%3A0x7eb356b66bd4b50e!2sSilicon+Valley%2C+CA%2C+USA!5e0!3m2!1sen!2sfi!4v1491569529882\" width=\"2000\" height=\"600\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n\n</div>";
    
    const style_elEmbed = {
      pointerEvents: 'auto',
     };
    const style_elText = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    
    return (
      <div className="Map">
        <div className="background">
          <div className="containerMinHeight elBackgroundShape" style={style_elBackgroundShape} />
        </div>
        
        <div className="layoutFlow">
          <div className="embeddedContent elEmbed">
            <div style={style_elEmbed}>
              <div dangerouslySetInnerHTML={{__html: htmlContent_embed}}></div>
            </div>
          </div>
        </div>
        
        <div className="foreground">
          <div className="headlineFont elText" style={style_elText}>
            <div>{this.props.locStrings.map_text_895751}</div>
          </div>
        </div>
      </div>
    )
  }
  
}
