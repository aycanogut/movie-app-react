import Page from "./components/Page/Page";
import Normalize from "react-normalize";
import { GlobalStyles } from "./components/globalStyles";

function App() {
  return (
    <div className="App">
      <Normalize />
      <GlobalStyles />
      <Page />
    </div>
  );
}

export default App;
