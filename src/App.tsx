import { RouterProvider } from "react-router-dom";
import { PrescriptionProvider  } from './store/prescription-context';
import { Toaster } from 'sonner';
import "./App.css";
import "./index.css";
import routes from "./router";

function App() {
  return (
    <PrescriptionProvider>
      <RouterProvider router={routes} />
      <Toaster />
    </PrescriptionProvider>
  );
}

export default App;
