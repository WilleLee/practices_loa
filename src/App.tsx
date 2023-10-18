import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Form from "./components/Form";
import Testform4 from "./components/Form_study4";

const GlobalStyles = createGlobalStyle`
  ${reset};
  input, button, textarea, select, option, label {
    all: unset;
  }
  body {
    background-color: #000;
    color: #fff;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
    & *  {
      box-sizing: border-box;
    }
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Form />
      <Testform4 />
    </>
  );
}

export default App;
