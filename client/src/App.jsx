import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Header } from "./component/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./component/Authentication/Login/Login";
import { Signup } from "./component/Authentication/signup/Signup";
import Dashboard from "./component/dashboard/dashboard";
function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
