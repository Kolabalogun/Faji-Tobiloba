
import Pages from './Function/Pages';
import { ToastContainer } from "react-toastify";


import "react-toastify/dist/ReactToastify.css";

import './index.css';
function App() {
  return (
    <>

      <ToastContainer position="top-center" />
      <Pages />
    </>
  );
}

export default App;
