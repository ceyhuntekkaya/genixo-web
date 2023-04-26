import React, { Component, createContext } from "react";
import i18next from "i18next";

export const SiteContext = createContext();

class SiteContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "tr",
    };
    this.setLanguage = this.setLanguage.bind(this);
  }

  setLanguage = (language) => {
    this.setState({ language });
    i18next.changeLanguage(language)
  };

  render() {
    return (
      <SiteContext.Provider
        value={{
          ...this.state,
          setLanguage: this.setLanguage,
        }}
      >
        {this.props.children}
      </SiteContext.Provider>
    );
  }
}

export default SiteContextProvider;
