import { RouterProvider } from "react-router-dom";
import "./App.css";
import "./index.css";
import routes from "./router";

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
