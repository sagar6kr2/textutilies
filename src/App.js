import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import TextFrom from "./component/Textfrom";

function App() {
  return (
    <>
      <Navbar title ="TextUtils"  aboutText="AboutUtils"/>
      {/* <Navbar/> */}
      <div className ="container my-3">
      <TextFrom  heading="Enter the text to analiyze" line ="Example area"/>
      </div>
    </>
  );
}

export default App;
