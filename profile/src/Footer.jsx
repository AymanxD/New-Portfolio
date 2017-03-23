import React, {Component} from 'react';
import './CSS/Footer.css';
import {Icon} from 'react'


export default class Footer extends Component{
  render(){
    return(
      <footer>
        <div className="font"><Icon name='rocket' /> aymanmohatarem@gmail.com
        </div>
      </footer>
    )
  }
}
