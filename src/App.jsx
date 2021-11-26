import Normalize from "react-normalize";
import { ToastContainer } from "react-toastify";

import Routing from "./components/Routing/Routing";
import { GlobalStyles } from "./components/globalStyles";

function App() {
  return (
    <div className="App">
      {/* <Normalize /> */}
      <ToastContainer theme="theme" />
      <GlobalStyles />
      <Routing />
    </div>
  );
}

export default App;
