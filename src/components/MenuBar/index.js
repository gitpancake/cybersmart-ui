/*jshint esversion: 6*/
import React, { Component } from 'react';

import { UserSettingsModal, HubSettingsModal } from '../Modals';

import { APP_NAME, USER_COOKIE_IDENTIFIER } from '../../config';
import { Dropdown, Menu } from 'semantic-ui-react';
import { MenuIcon, MenuMessage } from '../Exports';

export default class MenuBar extends Component {
  constructor(props) {
    super(props);
    
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  logout() {
    if (window.localStorage) 
      localStorage.removeItem(USER_COOKIE_IDENTIFIER);
      
    window.location.reload();
  }

  toggleVisibility() {
    this.props.toggleVisibility();
  }

  render() {
    return (
      <Menu 
        inverted
        attached
        pointing
        borderless>
          <Menu.Item icon = 'sidebar' onClick = { this.toggleVisibility } />         
          <div className="left logo">
            <div className= "item">
              <p>{APP_NAME}</p>
            </div>
          </div>
          <div className="right menu">
            <Dropdown item icon='announcement' pointing = 'top right'>                        
              <Dropdown.Menu>                
                <MenuMessage message="You left x lights on this week!"/>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item icon='settings' pointing = 'top right'>
              <Dropdown.Menu>
                <UserSettingsModal />
                <HubSettingsModal />
                <MenuIcon title = "Logout" icon = "sign out" onClick = {this.logout}/>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Menu>
    )
  }
};
