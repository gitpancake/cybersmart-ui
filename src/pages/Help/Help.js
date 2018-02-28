/*jshint esversion: 6*/
import React, { Component } from 'react';

//Component imports
import { LoginScreen } from '../../components/Exports/Exports';

//CSS import
import '../Master.css';
import './HelpPage.css';

export default class HelpPage extends Component {
    render() {
        return (
            <header className="page-body">
                <p>Help Page</p>
            </header>
        )
    }
}
