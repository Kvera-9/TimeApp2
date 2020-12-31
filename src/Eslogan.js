import React, { Component } from 'react';
import './App.css';

export default class Eslogan extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      text: (<div>It’s nice to meet you</div>),
      text_plainText: "It’s nice to meet you",
      textcopy: (<div> </div>),
      textcopy_plainText: " ",
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
      background: 'rgba(0, 92, 94, 1.000)',
     };
    const style_elText = {
      fontSize: 30.1,
      color: '#feffff',
      textAlign: 'center',
     };
    const style_elTextCopy = {
      color: '#feffff',
      textAlign: 'center',
     };
    
    return (
      <div className="Eslogan">
        <div className="background">
          <div className="containerMinHeight elBackgroundShape" style={style_elBackgroundShape} />
        </div>
        
        <div className="layoutFlow">
          <div className="elText">
            <div className="font-openSans" style={style_elText}>
              <div>{this.state.text}</div>
            </div>
          </div>
          
          <div className="elTextCopy">
            <div className="actionFont" style={style_elTextCopy}>
              <div>{this.state.textcopy}</div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
  
}
