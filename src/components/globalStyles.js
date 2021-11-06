import { createGlobalStyle } from "styled-components";
import helpers from "./helpers";

export const GlobalStyles = createGlobalStyle`

// global styles
html {
    font-size: 62.5%;
}

body {
height: 100vh;
font-family: 'Roboto', sans-serif;
background-color: ${helpers.colors.body};

}

img {
    max-width: 100%;
}

#root, .App {
  height: 100%;
}



`;
