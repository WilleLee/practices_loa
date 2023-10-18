import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Testform4 from "./components/Form_study4";
import FormExample from "./components/FormExample";

const GlobalStyles = createGlobalStyle`
  ${reset};
  input, button,  select, option, label {
    all: unset;
  }
  textarea {
    resize: none;
    outline: none;
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
      <FormExample />
      <Testform4 />
    </>
  );
}

export default App;
