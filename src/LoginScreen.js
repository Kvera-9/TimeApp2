import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/LoginScreen_elImage_716313.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';

export default class LoginScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      userNameField: (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_username'] : '') || '',
      passwordField: '',
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  onClick_elButton = (ev) => {
    // Go to screen 'Start'
    this.props.appActions.goToScreen('start', { transitionId: 'fadeIn' });
  
  }
  
  
  textInputChanged_elUserNameField = (event) => {
    this.setState({userNameField: event.target.value});
  }
  
  textInputChanged_elPasswordField = (event) => {
    this.setState({passwordField: event.target.value});
  }
  
  render() {
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackground = {
      width: '100%',
      height: '100%',
     };
    const style_elBackground_outer = {
      backgroundColor: '#f6f6f6',
     };
    const style_elText = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    const style_elImage = {
      backgroundImage: 'url('+img_elImage+')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
     };
    
    const style_elButton = {
      display: 'block',
      color: 'white',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    let cssClass_progress = 'circularProgressIndicator';
    if (this.props.appActions.isLoading()) 
      cssClass_progress += ' circularProgressIndicator-active';
    
    
    const value_userNameField = this.state.userNameField;
    
    const style_elUserNameField = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_elPasswordField = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_elTextBlock = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    return (
      <div className="AppScreen LoginScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="elText">
            <div className="baseFont" style={style_elText}>
              <div>{this.props.locStrings.login1_text_241076}</div>
            </div>
          </div>
          
          <div className="elImage">
            <div style={style_elImage} />
          </div>
          
          <div className="elButton">
            <Button className="actionFont" style={style_elButton}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.login1_button_137024}
            </Button>
          </div>
          
          <div className="elProgress">
            <div>
              <svg className={cssClass_progress}>
                <circle className="circularProgress-animatedPath" style={{stroke: '#0093d5'}} cx="25" cy="25" r="17" fill="none" strokeWidth="3" strokeMiterlimit="10" />
              </svg>
            </div>
          </div>
          
          <div className="elUserNameField">
            <input className="baseFont" style={style_elUserNameField} type="text" placeholder={this.props.locStrings.login_field2_587344} onChange={this.textInputChanged_elUserNameField} value={value_userNameField !== undefined ? value_userNameField : ''}  />
          </div>
          
          <div className="elPasswordField">
            <input className="baseFont" style={style_elPasswordField} type="text" placeholder={this.props.locStrings.login_field_618892} onChange={this.textInputChanged_elPasswordField} value={this.state.passwordField}  />
          </div>
        </div>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <div className="baseFont elTextBlock" style={style_elTextBlock}>
              <div>{this.props.locStrings.login_textblock_833318}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}
