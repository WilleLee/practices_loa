import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./routes/HomePage";

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
