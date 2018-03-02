/* jshint esversion: 6*/
import React, { Component } from 'react';
import {  } from 'semantic-ui-react';
import { Scrollbars } from 'react-custom-scrollbars';

//Custom imports
import { MenuBar, CustomSideBar } from './components/Exports';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false }
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
      this.setState({ visible: !this.state.visible })
  }

  render() {   
    return (       
        <div className = "App">
            <MenuBar toggleVisibility = {this.toggleVisibility} />
            <Scrollbars
              autoHeight
              autoHeightMax={1000}>
              <CustomSideBar visible = {this.state.visible}/>   
            </Scrollbars>
        </div>

    );
  }  
}

export default App;
