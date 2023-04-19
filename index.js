import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter } from "react-router-dom";
import Appoint from "./Appoint";
import Navbar from "./component/Navbar";
import Booking from "./component/Booking";
// import Checkup from "./Checkup";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Checkup from "./Checkup";
import Ambulance from "./component/Ambulance";
import Medicine from "./component/Medicine";
import Donate from "./component/Donate";
import Doctors from "./component/Doctors";
const router = createBrowserRouter([
  {
    path:"/home",
    element:<App/>,
  },
  {
    path:"/",
    element:<App/>,
  },
  {
    path: "/about",
    element:<><Navbar/> <Booking/></>,
  },
  {
  path:"/book",
  element:<> <Navbar/> <Appoint/></>
  },
  {
    path:"/checkup",
    element:<Checkup/>
  },
  {
    path:"/ambulance",
    element:<Ambulance/>
  },
  {
    path:"/medicine",
    element:<Medicine/>
  },
  {
    path:"/donate",
    element:<Donate/>
  },
  {
    path:"/doctors",
    element:<><Navbar/> <Doctors/></>
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <BrowserRouter>
    <App />
    </BrowserRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
