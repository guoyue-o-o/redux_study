import React from "react";
import Home from "./pages/home";

import ComA from "./pages/ComA";
import ComB from "./pages/ComB";


// Provider导入
import { Provider } from "react-redux";
// 引入store
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Home /> */}
        <ComA />

        <ComB />
      </div>
    </Provider>
  );
}


export default App;
