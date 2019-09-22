import React,{ Component } from 'react';
import './App.css';
import Component from './Component'
export default class CharacterCard extends Component {
    render() {
        return (
            <div>{this.props.value}</div>
        )
    }
}