import React, {Component} from 'react';
import NavBarButtons from './NavBarButtons.jsx';

export default class NavBar extends Component{
  render(){
    return(
      <div>
        <NavBarButtons text={'Home'}/>
        <NavBarButtons text={'About'}/>
        <NavBarButtons text={'Skills'}/>
      </div>
    )
  }
}
