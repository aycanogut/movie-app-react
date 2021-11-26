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

a, a:-webkit-any-link {
  text-decoration: none 
}

#root, .App {
  height: 100%;
}

// swiper.js breakpoints
.swiper-container {
  width: 480px;
}

@media screen and (min-width: 640px) {
  .swiper-container {
    width: 640px;
  }
}

@media screen and (min-width: 768px) {
  .swiper-container {
    width: 768px;
  }
}

.toaster {

  background-color: ${helpers.colors.body};

  @media only screen and ${helpers.device.md} {
    font-size: 1.4rem;
} ;
@media only screen and ${helpers.device.lg} {
  font-size: 1.8rem;
} ;

}

`;
