import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { getStyles } from '@flash/utils'

const Test = ({ name }) => {
  const teste = getStyles()
  console.log(teste)

  return <h1 style={teste}>{name}</h1>
}

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Test,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;