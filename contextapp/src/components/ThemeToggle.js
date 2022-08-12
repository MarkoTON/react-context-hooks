import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class ThemeToggle extends Component {
  static contextType = ThemeContext;
  render() { 
    const { toggleTheme, customBG } = this.context;
    return ( 
      <div>
        <span>Enter custom color over input: </span>
        <input type="text" onChange={(e)=> customBG(e.target.value)} />
        <br />
        <button onClick={toggleTheme}>Toggle the theme</button>
      </div>
    );
  }
}
 
export default ThemeToggle;