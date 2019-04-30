import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  //how we link a component to a context object. has to be called 'contextType'
  //once the contextType is created, you can use this.context to refer
  //to the data inside of it or by creating a Consumer component.

  //   *** HOW WE GET DATA OUT OF CONTEXT USING THIS.CONTEXT ***
  //   Better to use this when you have only a single context
  //   static contextType = LanguageContext;

  //   render() {
  //     const text = this.context === "english" ? "Submit" : "Voorleggen";
  //     return <button className="ui button primary">{text}</button>;
  //   }

  // *** HOW WE GET DATA OUT OF CONTEXT USING CONSUMERS
  // value is the data that is currently inside the context
  // Better to use when you have multiple contexts
  renderSubmit(language) {
    return language === "english" ? "Submit" : "Voorlagen";
  }

  //The only children allowed inside of a Consumer tag is a function.
  //This is why in the case of the button we had to return
  //the appropriate JSX within a function of just directly.
  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
