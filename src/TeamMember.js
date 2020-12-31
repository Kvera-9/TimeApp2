import React, { Component } from 'react';
import './App.css';
import img_elRoundimage from './images/TeamMember_elRoundimage_812940.png';

export default class TeamMember extends Component {

  // Properties used by this component:
  // name, description, image

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
    const style_elRoundimage = {
      backgroundImage: 'url('+(this.props.image || img_elRoundimage)+')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
     };
    
    const value_text = this.props.name;
    
    const style_elText = {
      fontSize: 19.4,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    
    const value_textCopy = this.props.description;
    
    const style_elTextCopy = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    
    const style_elSpacer = {
      background: 'rgba(254, 255, 255, 1.000)',
     };
    
    return (
      <div className="TeamMember">
        <div className="background">
          <div className="containerMinHeight elBackgroundShape" style={style_elBackgroundShape} />
        </div>
        
        <div className="layoutFlow">
          <div className="elRoundimage">
            <div style={style_elRoundimage} />
          </div>
          
          <div className="elText">
            <div className="font-AppleSystemUIFont" style={style_elText}>
              <div>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.props.locStrings.teammember_text_1015414}</span>)}</div>
            </div>
          </div>
          
          <div className="elTextCopy">
            <div className="baseFont" style={style_elTextCopy}>
              <div>{value_textCopy !== undefined ? value_textCopy : (<span className="propValueMissing">{this.props.locStrings.teammember_textcopy_404214}</span>)}</div>
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
