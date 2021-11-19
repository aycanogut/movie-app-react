import Normalize from "react-normalize";

import Routing from "./components/Routing/Routing";
import { GlobalStyles } from "./components/globalStyles";

function App() {
  return (
    <div className="App">
      <Normalize />
      <GlobalStyles />
      <Routing />
    </div>
  );
}

export default App;
