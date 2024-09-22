import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./components/Expencetracker/theme.js";
// import { Provider } from "react-redux";
// import store from "./components/shopingCartapp/store.js";
import Context from "./components/Foodrecipie/Context.jsx";
import Globalcontext from "./components/Expencetracker/Context.jsx";
createRoot(document.getElementById("root")).render(
  // <BrowserRouter>
  // <StrictMode>
  //   <Globalcontext>
  //     <ChakraProvider theme={theme}>
  //       <App />
  //     </ChakraProvider>
  //   </Globalcontext>
  // </StrictMode>
  // </BrowserRouter>

  // <Provider store={store}>
  <BrowserRouter>
    <StrictMode>
      <Context>
        <App />
      </Context>
    </StrictMode>
  </BrowserRouter>
  // </Provider>
);
