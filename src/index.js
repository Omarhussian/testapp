import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import OverlayLoader from "./Components/base/OverlayLoader";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Suspense fallback={<OverlayLoader />}>
      <App />
    </Suspense>
  </Provider>
);
