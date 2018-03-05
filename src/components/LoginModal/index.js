/*jshint esversion: 6*/
import React, { Component } from 'react';

import { API_USERS_URL } from '../../config';
import { Modal, Button, Form, Grid, Message } from 'semantic-ui-react';

export default class LoginModal extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: localStorage.getItem("token") === null,
            username : "",
            password: "",
            loginError: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.loginAction = this.loginAction.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
   
    handleClick() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleClose() {
        this.setState({ isOpen: false });
    }

    handleUserChange(e) {
        this.setState({username: e.target.value});
    }

    handlePassChange(e) {
        this.setState({password: e.target.value});
    }

    loginAction() {
        fetch(API_USERS_URL + "/login", {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              username: this.state.username,
              password: this.state.password
          })
        }).then(res => {
          if (res.ok) {
              res.json().then(result =>
                    localStorage.setItem("token", result.token)
                );   
                this.handleClose();
          } else if (res.status === 401) {
            this.setState({loginError: true});
          }
        }, function (e) {
          alert("Error submitting form!");
        });
      }

    render() {
      return (
        <Modal
          dimmer={true}
          open={this.state.isOpen}
          onClose={this.handleClick}
          size='small'
          closeOnEscape={false}
          closeOnRootNodeClick={false}
        >
          <Modal.Header></Modal.Header>
          <Modal.Content>
            <Modal.Description>
                <Grid
                    textAlign='center'
                    style={{ height: '100%' }}
                    verticalAlign='middle'
                    >
                    <Grid.Row>
                        <Grid.Column>
                            <Message compact>
                                It looks like you need to login! <br />
                                Just enter your hub login details to get started!
                            </Message>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column style={{ maxWidth: 450 }}>
                            <Form size='large'>
                                    <Form.Input
                                    fluid
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='E-mail address'
                                    value={this.state.username}
                                    onChange={this.handleUserChange}
                                    error = {this.state.loginError}
                                    />
                                    <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    value={this.state.password}
                                    onChange={this.handlePassChange}
                                    error = {this.state.loginError}
                                    />
                                    <Button positive icon ='home' labelPosition='right' content="Login" onClick={this.loginAction.bind(this)} />                                        
                            </Form>
                            <Message hidden={!this.state.loginError} color='red'>
                                There was an error logging you in, please check your login credentials!
                            </Message>
                        </Grid.Column> 
                    </Grid.Row>
                </Grid>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions></Modal.Actions>
        </Modal>
      )
    }
  }
