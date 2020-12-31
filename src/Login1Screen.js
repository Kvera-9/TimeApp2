import React, { Component } from 'react';
import './App.css';
import Logo from './Logo';
import FirebaseLogin from './FirebaseLogin';
import img_elImage2 from './images/Login1Screen_elImage2_274201.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';

export default class Login1Screen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      field2: '',
      field: '',
      field4: '',
      field3: '',
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  textInputChanged_elField2 = (event) => {
    this.setState({field2: event.target.value});
  }
  
  textInputChanged_elField = (event) => {
    this.setState({field: event.target.value});
  }
  
  onClick_elButton = (ev) => {
    // Go to screen 'Start'
    this.props.appActions.goToScreen('start', { transitionId: 'fadeIn' });
  
  }
  
  
  textInputChanged_elField4 = (event) => {
    this.setState({field4: event.target.value});
  }
  
  textInputChanged_elField3 = (event) => {
    this.setState({field3: event.target.value});
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
    
    const style_elField2 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_elField2_outer = {
      display: 'none',
     };
    
    const style_elField = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_elField_outer = {
      display: 'none',
     };
    
    const style_elButton = {
      display: 'block',
      color: '#fff',
      textAlign: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.8500)',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_elFirebaseLogin = {
      pointerEvents: 'auto',
     };
    
    const style_elField4 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_elField3 = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    const style_elImage2 = {
      backgroundImage: 'url('+img_elImage2+')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
     };
    
    return (
      <div className="AppScreen Login1Screen" style={baseStyle}>
        <div className="background">
          <div className="elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="hasNestedComps elLogo">
            <div>
              <Logo ref={(el)=> this._elLogo = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
          
          <div className="elField2" style={style_elField2_outer}>
            <input className="baseFont" style={style_elField2} type="text" placeholder={this.props.locStrings.login1_field2_20874} onChange={this.textInputChanged_elField2} value={this.state.field2}  />
          </div>
          
          <div className="elField" style={style_elField_outer}>
            <input className="baseFont" style={style_elField} type="text" placeholder={this.props.locStrings.login1_field_702949} onChange={this.textInputChanged_elField} value={this.state.field}  />
          </div>
          
          <div className="elButton">
            <Button className="actionFont" style={style_elButton} onClick={this.onClick_elButton} >
              {this.props.locStrings.login1_button_1004251}
            </Button>
          </div>
          
          <div className="elFirebaseLogin">
            <div style={style_elFirebaseLogin}>
              <FirebaseLogin ref={(el)=> this._elFirebaseLogin = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
          
          <div className="elField4">
            <input className="baseFont" style={style_elField4} type="text" placeholder={this.props.locStrings.login1_field4_450194} onChange={this.textInputChanged_elField4} value={this.state.field4}  />
          </div>
          
          <div className="elField3">
            <input className="baseFont" style={style_elField3} type="text" placeholder={this.props.locStrings.login1_field3_781441} onChange={this.textInputChanged_elField3} value={this.state.field3}  />
          </div>
          
          <div className="elImage2">
            <div style={style_elImage2} />
          </div>
        </div>
        
      </div>
    )
  }
  
}
