import React, { Component } from 'react';
import './App.css';

export default class Comp1 extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      passwordField: '',
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  textInputChanged_elPasswordField = (event) => {
    this.setState({passwordField: event.target.value});
  }
  
  render() {
    
    const style_elPasswordField = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="Comp1">
        <div className="layoutFlow">
          <div className="elPasswordField">
            <input className="baseFont" style={style_elPasswordField} type="text" placeholder={this.props.locStrings.comp1_passwordfield_197450} onChange={this.textInputChanged_elPasswordField} value={this.state.passwordField}  />
          </div>
        </div>
        
      </div>
    )
  }
  
}
