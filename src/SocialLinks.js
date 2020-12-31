import React, { Component } from 'react';
import './App.css';
import img_elYouTube from './images/SocialLinks_elYouTube_237495.png';
import img_elInstagram from './images/SocialLinks_elInstagram_1043157.png';
import img_elSnapchat from './images/SocialLinks_elSnapchat_261002.png';
import img_elFacebook from './images/SocialLinks_elFacebook_978545.png';

export default class SocialLinks extends Component {

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

  onClick_elYouTube = (ev) => {
    window.open('https://www.youtube.com/channel/UCrcoH14H-MLS-MKxZGMwVGQ/', '_blank');
  
  }
  
  
  onClick_elInstagram = (ev) => {
    window.open('https://www.instagram.com/neonto.studio/', '_blank');
  
  }
  
  
  onClick_elSnapchat = (ev) => {
    window.open('https://twitter.com/neontostudio', '_blank');
  
  }
  
  
  onClick_elFacebook = (ev) => {
    window.open('https://www.facebook.com/neontostudio', '_blank');
  
  }
  
  
  onClick_elLink = (ev) => {
    window.open('https://neonto.com', '_blank');
  
  }
  
  
  render() {
    
    const style_elBackgroundShape = {
      background: 'rgba(255, 255, 255, 1.000)',
     };
    const style_elYouTube = {
      height: 'auto',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_elInstagram = {
      height: 'auto',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_elSnapchat = {
      height: 'auto',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_elFacebook = {
      height: 'auto',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_elCopyright = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    // eslint-disable-next-line no-unused-vars
    const style_elCopyright_inner = {
      textAlign: 'center',
     };
    
    const style_elLink = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_elCredits = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    
    return (
      <div className="SocialLinks">
        <div className="background">
          <div className="containerMinHeight elBackgroundShape" style={style_elBackgroundShape} />
        </div>
        
        <div className="foreground">
          <img className="elYouTube" style={style_elYouTube} src={img_elYouTube} alt="" onClick={this.onClick_elYouTube}  />
          <img className="elInstagram" style={style_elInstagram} src={img_elInstagram} alt="" onClick={this.onClick_elInstagram}  />
          <img className="elSnapchat" style={style_elSnapchat} src={img_elSnapchat} alt="" onClick={this.onClick_elSnapchat}  />
          <img className="elFacebook" style={style_elFacebook} src={img_elFacebook} alt="" onClick={this.onClick_elFacebook}  />
          <div className="baseFont elCopyright" style={style_elCopyright}>
            <div className="bottomAlignedContent">{this.props.locStrings.sociallinks_copyright_1021741}</div>
          </div>
          <div className="actionFont elLink" style={style_elLink} onClick={this.onClick_elLink}  />
          <div className="baseFont elCredits" style={style_elCredits}>
            <div>{this.props.locStrings.sociallinks_credits_869374}</div>
          </div>
        </div>
      </div>
    )
  }
  
}
