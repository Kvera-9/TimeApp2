import React, { Component } from 'react';
import './App.css';

export default class Idea extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      text: (<div>El valor del tiempo!</div>),
      text_plainText: "El valor del tiempo!",
      textcopy: (<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo lorem ac diam aliquam condimentum. Vestibulum cursus, ipsum vel placerat tincidunt, felis orci porttitor orci, non ullamcorper arcu leo in enim. Morbi mattis tortor lectus, vitae interdum enim consequat sit amet. Quisque in arcu libero. Praesent eu elit arcu.</div>),
      textcopy_plainText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo lorem ac diam aliquam condimentum. Vestibulum cursus, ipsum vel placerat tincidunt, felis orci porttitor orci, non ullamcorper arcu leo in enim. Morbi mattis tortor lectus, vitae interdum enim consequat sit amet. Quisque in arcu libero. Praesent eu elit arcu.",
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
      <div className="Idea">
        <div className="background">
          <div className="containerMinHeight elBackgroundShape" style={style_elBackgroundShape} />
        </div>
        
        <div className="layoutFlow">
          <div className="elText">
            <div className="headlineFont" style={style_elText}>
              <div>{this.state.text}</div>
            </div>
          </div>
          
          <div className="elTextCopy">
            <div className="baseFont" style={style_elTextCopy}>
              <div>{this.state.textcopy}</div>
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
