import { BrowserRouter, Route, Routes } from "react-router-dom";
import './assets/App.css';
import Feed from "./pages/Feed";
import Delete from "./pages/Delete";
import Edit from "./pages/Edit";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element= {<Home />} /> 
          <Route exact={true} path="/" element={<Home />} /> 
          <Route exact={true} path="/feed" element={<Feed />} />
          <Route exact={true} path="/delete" element={<Delete />} />
          <Route exact={true} path="/edit" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
