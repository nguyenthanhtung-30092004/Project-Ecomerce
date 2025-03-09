import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./route/routing";
import { Provider } from "react-redux";
import store from "./redux/Store";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Provider store={store}>
        <ToastContainer />
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
