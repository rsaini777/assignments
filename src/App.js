import { useState } from "react";
import "./App.css";
import Google from "./components/Google";
import InvoiceData from "./components/InvoiceData";
import InvoiceModal from "./components/InvoiceModal";

function App() {
  const [changescreen, setChangescreen] = useState(false);
  const [editable, setEditable] = useState(false);
  const [googlescreen, setGooglescreen] = useState(true);
  const [user, setUser] = useState({});

  return (
    <div className="App">
      {googlescreen ? (
        <Google
          googlescreen={googlescreen}
          setGooglescreen={setGooglescreen}
          user={user}
          setUser={setUser}
          googleDivId="signInDiv"
        />
      ) : changescreen ? (
        <InvoiceModal
          setGooglescreen={setGooglescreen}
          changescreen={changescreen}
          editable={editable}
          setEditable={setEditable}
          setChangescreen={setChangescreen}
        />
      ) : (
        <InvoiceData
          setGooglescreen={setGooglescreen}
          changescreen={changescreen}
          editable={editable}
          setEditable={setEditable}
          setChangescreen={setChangescreen}
          setUser={setUser}
          googleDivId="signInDiv"
        />
      )}
    </div>
  );
}

export default App;
