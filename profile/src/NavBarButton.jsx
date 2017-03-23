import React, {Component} from 'react';
import './CSS/NavBarButton.css';

class NavBarButton extends Component{
  render() {
    return (
        <button className="buttons">
          {this.props.text}
        </button>
    )
  }
}
export default NavBarButton;
