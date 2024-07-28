import { RoutesMain } from './RoutesMain/RoutesMain';
import "./styles/styles.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
      <RoutesMain/>
      <ToastContainer/>
    </>
  )
}

export default App
