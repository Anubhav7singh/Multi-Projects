import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./components/shopingCartapp/store.js";
import Context from "./components/Foodrecipie/Context.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Context>
        <App />
      </Context>
    </StrictMode>
  </BrowserRouter>

  // <Provider store={store}>
  //   <BrowserRouter>
  //     <StrictMode>
  //       <App />
  //     </StrictMode>
  //   </BrowserRouter>
  // </Provider>
);
