import React from "react";

//Contexts work very similary to props except that instead
//of only being able to pass data to direct children, you can
//use them to pass data down to any descendent of the component
const Context = React.createContext("english"); //english is an example of a default value being put into the context object

export class LanguageStore extends React.Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
