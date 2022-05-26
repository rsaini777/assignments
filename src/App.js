import {  useState } from "react";
import "./App.css";
import InvoiceData from "./components/InvoiceData";
import InvoiceModal from "./components/InvoiceModal";


function App() {
  
  const [changescreen, setChangescreen] = useState(false);
  const [editable, setEditable] = useState(false);
 
  
  return (
    <div className="App">
      {changescreen ? (
        <InvoiceModal
          changescreen={changescreen}
          editable={editable}
          setEditable={setEditable}
          setChangescreen={setChangescreen}
        />
      ) : (
        <InvoiceData
          changescreen={changescreen}
          editable={editable}
          setEditable={setEditable}
          setChangescreen={setChangescreen}
        />
      )}
    </div>
  );
}

export default App;
