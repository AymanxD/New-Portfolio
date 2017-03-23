import React, {Component} from 'react';
import './CSS/Title.css';
import NavBarButton from './NavBarButton.jsx';

export default class Title extends Component{
  render(){
    return (
      <div className="NameBox">
        <div className='Name'>
            <h1 className="title">Ayman Mohatarem</h1>
              <hr/>
            <h3 className="subtitle">Front-End JavaScript Developer</h3>
              <hr/>
            <div className="Buttons">
              <NavBarButton text={'Home'} />
              <NavBarButton text={'About Me'} />
              <NavBarButton text={'My Skills'} />
            </div>
        </div>
      </div>
    )
  }
}
