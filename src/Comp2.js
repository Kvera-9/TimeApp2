import React, { Component } from 'react';
import './App.css';
import Comp1 from './Comp1';

export default class Comp2 extends Component {

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
    
    return (
      <div className="Comp2">
        <div className="layoutFlow">
          <div className="hasNestedComps elComp">
            <div>
              <Comp1 ref={(el)=> this._elComp = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
        </div>
        
      </div>
    )
  }
  
}
