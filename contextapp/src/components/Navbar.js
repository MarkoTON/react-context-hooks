import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Navbar extends Component {
  // static contextType = ThemeContext;
  render() {
    return (
      // Adding .Consumer
      <AuthContext.Consumer>{(authContext) => { 
        return (
          <ThemeContext.Consumer>{(themeContext) => {
            const { isAuthenticated, toggleAuth } = authContext;
            const { isLightTheme, light, dark } = themeContext;
            const theme = isLightTheme ? light : dark;
            return (
              <nav style={{ background: theme.ui, color: theme.syntax }}>
                <h1>Context App</h1>
                <div onClick={() => toggleAuth()} style={{borderBottom: '1px solid black', width: '30%', margin: 'auto auto', padding: '0px 0px 5px 0px'}}>
                  { isAuthenticated ? 'Logged in' : 'Logged out' }
                </div>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </nav>
            )
          }}</ThemeContext.Consumer>
      )}}</AuthContext.Consumer>
    );
  }
}
 
export default Navbar;