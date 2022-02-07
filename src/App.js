import "./App.css";
import Main from "./Pages/Dashboard/Main";
import IndexPayment from "./Pages/Payment/IndexPayment";
import Chat from "./Pages/Chat/Chat";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <center>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/payment" element={<IndexPayment />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </BrowserRouter>
      </center>
    </div>
  );
}

export default App;
