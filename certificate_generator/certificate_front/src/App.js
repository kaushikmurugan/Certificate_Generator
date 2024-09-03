import "./App.css";
import Forms from "./components/form";
import { Route, Routes } from "react-router-dom";
import { Table } from "./components/table";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Delete from "./components/Remove";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Form" exact element={<Forms />} />
        <Route path="/Table" exact element={<Table />} />
        <Route path="/delete/:id" exact element={<Delete />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
