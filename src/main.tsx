import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";

import { Provider } from "react-redux";
import store from "./redux/store";
import routes from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>,
);
