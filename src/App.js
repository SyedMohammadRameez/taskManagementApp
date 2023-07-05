import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Task from "./components/Task";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Task />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
