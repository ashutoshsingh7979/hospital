import "./App.css";
import Navbar from "./component/Navbar";
import Front from "./component/Front";
import About2 from "./component/About2";
import About from "./component/About";
// import Booking from "./component/Booking";
// import Patent from "./Patent";
import "./component/Appoint.css";
// import Home from "./Home";
// import { Routes ,Route} from "react-router-dom";
// import Appoint from "./Appoint"
// import { BrowserRouter } from "react-router-dom";
// import Appoint from "./Appoint";
// import Booking from "./component/Booking";
// import Navbar from "./component/Navbar";




function App() {
  return (
    <>
  
      <Navbar/>
      {/* <Routes>
        <Route  path="/doctors" element={<Home/>}/>/
        <Route  path="/Booking" element={<Appoint/>}/>
      </Routes> */}

      <Front />
      <About />
      <About2 />
     
      
    </>
  );
}

export default App;
