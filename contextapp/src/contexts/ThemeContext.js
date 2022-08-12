import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555'}
  }
  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  }
  customBG = (data) => {
    console.log(data);
    this.setState({
      ...this.light,
      light: {
        bg: data.length > 0 ? data : '#e3e3e3'
      }
    })
  }
  render() { 
    return (
      <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme, customBG: this.customBG}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
 
export default ThemeContextProvider;
