import logo from "./logo.svg";
import "./App.css";
import img1 from "../src/assest/img1.jpg";
import Sighup from "./Components/Sighup";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm-5 mt-5">
            <Sighup />
          </div>
          <div className="col-sm-7 ">
            <img src={img1} className="img-fluid w-100"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
