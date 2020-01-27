import React from "react";
import NextApp from "next/app";
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import { CacheProvider } from "@emotion/core";
import theme from "../theme";
import { cache } from "emotion";

class App extends NextApp {
  render() {
    const { Component } = this.props;
    return (
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <CSSReset />
          <ColorModeProvider>
            <Component />
          </ColorModeProvider>
        </ThemeProvider>
      </CacheProvider>
    );
  }
}

export default App;
