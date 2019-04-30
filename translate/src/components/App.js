import React from "react";

import UserCreate from "./UserCreate";
import LanguageSelector from "./LanguageSelector";
import { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          {/* The reason we have the provider wrapping the parent UserCreate
            element is because everytime you define a provider, it's a separate
            "pipe" of information. Basically creating a provider for both
            the Button and Field components individually will have them referencing
            separate objects which can cause inconsistencies with the data so wrapping
            child elements with providers isn't a good idea.
        
            This value prop is how we update data inside the context 
            
            In the case of multiple providers, it doesn't matter how they're
            organized in the code, ie one being nested inside of another. As long as they wrap the 
            intended component then it will work as expected.*/}
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
