import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import Borrow from "./pages/Borrow";
import Book from "./pages/Book";

// Pages

function App() {
    return(
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/book" element={<Book/>} />
            <Route path="/borrow" element={<Borrow/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}
   

export default App;
