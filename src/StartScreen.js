import React, { Component } from 'react';
import './App.css';
import Slogantop from './Slogantop';
import WereThirsty from './WereThirsty';
import OurTeam from './OurTeam';
import TeamMember from './TeamMember';
import OurMission from './OurMission';
import WhatWeDo from './WhatWeDo';
import HowWeDoIt from './HowWeDoIt';
import Com1 from './Com1';
import AboutOurPassion from './AboutOurPassion';
import ContactUs from './ContactUs';
import Map from './Map';
import SocialLinks from './SocialLinks';
import btn_icon_625800 from './images/btn_icon_625800.png';
import Menu from './Menu';
import Logo from './Logo';
import btn_icon_731745 from './images/btn_icon_731745.png';
import btn_icon_380607 from './images/btn_icon_380607.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';

export default class StartScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      elMenu_visible: false,
      elMenuUp_visible: false,
      elMenuDown_visible: true,
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  onClick_elFab = (ev) => {
    alert("This is a demo");
  
  }
  
  
  onClick_elMenuUp = (ev) => {
    this.setState({elMenu_visible: !this.state.elMenu_visible});
  
    this.setState({elMenuDown_visible: true});
  
    this.setState({elMenuUp_visible: false});
  
  }
  
  
  onClick_elMenuDown = (ev) => {
    this.setState({elMenu_visible: !this.state.elMenu_visible});
  
    this.setState({elMenuUp_visible: true});
  
    this.setState({elMenuDown_visible: false});
  
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
    
    // eslint-disable-next-line
    const dataSheet_propuestas = this.props.dataSheets['propuestas'];
    
    const style_elBackgroundShape = {
      background: 'rgba(255, 255, 255, 1.000)',
     };
    
    // Source items and any special components used for list/grid element 'Team pics'.
    let items_teamPics = [];
    let listComps_teamPics = {};
    items_teamPics = items_teamPics.concat(this.props.appActions.getDataSheet('propuestas').items);
    this._elTeamPics_items = [];
    
    const style_elTeamPics = {
      height: 'auto',  // This element is in scroll flow
     };
    
    const style_elFab = {
      display: 'block',
      color: '#fff',
      textAlign: 'left',
      backgroundColor: '#222835',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_elMenu = {
      filter: 'drop-shadow(0.0px 6.8px 48px rgba(0, 0, 0, 0.4500))',
      overflow: 'visible',
     };
    const elMenu = this.state.elMenu_visible ? (
      <div className="hasNestedComps elMenu" style={style_elMenu}>
        <Menu {...this.props} ref={(el)=> this._elMenu = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
      </div>
     ) : null;
    const style_elTop = {
      width: '100%',
      height: '100%',
     };
    const style_elTop_outer = {
      backgroundColor: 'transparent',
      padding: '6.8px',
     };
    
    const style_elMenuUp = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_731745+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '88.865%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const elMenuUp = this.state.elMenuUp_visible ? (
      <button className="actionFont elMenuUp" style={style_elMenuUp} onClick={this.onClick_elMenuUp}  />
     ) : null;
    
    const style_elMenuDown = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_380607+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '89.763%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const elMenuDown = this.state.elMenuDown_visible ? (
      <button className="actionFont elMenuDown" style={style_elMenuDown} onClick={this.onClick_elMenuDown}  />
     ) : null;
    
    return (
      <div className="AppScreen StartScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackgroundShape" style={style_elBackgroundShape} />
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="hasNestedComps elSlogantop">
            <div>
              <Slogantop {...this.props} ref={(el)=> this._elSlogantop = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
          
          <div className="hasNestedComps elJoinUs">
            <div>
              <WereThirsty {...this.props} ref={(el)=> this._elJoinUs = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
          
          <div className="hasNestedComps elTeamHeadline">
            <div>
              <OurTeam {...this.props} ref={(el)=> this._elTeamHeadline = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
          
          <div className="hasNestedComps elTeamPics">
            <div style={style_elTeamPics}>
              {items_teamPics.map((row, index) => {
                let itemComp = (row._componentId)
                    ? listComps_teamPics[row._componentId]
                    : <TeamMember appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} dataSheetId={'propuestas'} dataSheetRow={row} {...{ 'name': row['name'], 'description': row['description'], 'image': row['image'], }} ref={(el) => {if (el) this._elTeamPics_items.push(el)}} />;
                return (<div key={row.key}>
                    {itemComp}
                  </div>);
              })}
              <div className="marker" ref={(el)=> this._elTeamPics_endMarker = el} />
            </div>
          </div>
          
          <div className="hasNestedComps elOurMission">
            <div>
              <OurMission {...this.props} ref={(el)=> this._elOurMission = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
          
          <div className="hasNestedComps elWhatWeDo">
            <div>
              <div className="col0">
                <WhatWeDo appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
              </div>
              <div className="col1">
                <HowWeDoIt appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
              </div>
            </div>
          </div>
          
          <div className="hasNestedComps elOurPassion">
            <div>
              <Com1 {...this.props} ref={(el)=> this._elOurPassion = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
          
          <div className="hasNestedComps elAboutOurPassion">
            <div>
              <AboutOurPassion {...this.props} ref={(el)=> this._elAboutOurPassion = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
          
          <div className="hasNestedComps elContactUs">
            <div>
              <ContactUs {...this.props} ref={(el)=> this._elContactUs = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
          
          <div className="hasNestedComps elMap">
            <div>
              <Map {...this.props} ref={(el)=> this._elMap = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
          
          <div className="hasNestedComps elSocial">
            <div>
              <SocialLinks {...this.props} ref={(el)=> this._elSocial = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
        </div>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <Button className="actionFont elFab" style={style_elFab}  variant="fab" onClick={this.onClick_elFab} >
              <img src={btn_icon_625800} alt="" style={{width: '100%', marginTop: '4%'}} />
            </Button>
            { elMenu }
            <div className="hasNestedComps elTop" style={style_elTop_outer}>
              <div style={style_elTop}>
                <Logo {...this.props} ref={(el)=> this._elTop = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
              </div>
            </div>
            
            { elMenuUp }
            { elMenuDown }
          </div>
        </div>
      </div>
    )
  }
  
}
