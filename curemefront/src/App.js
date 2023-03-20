import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopMenu from "./components/TopMenu";
import AdminPanel from "./components/AdminPanel";
import Doc from "./components/Doc";
import Hosp from "./components/Hosp";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import DocSignup from "./components/DocSignup";
import DocLogin from "./components/DocLogin";
import DocHome from "./components/DocHome";
import Dermatologist from "./components/Dermatologist";
import Urologist from "./components/Urologist";
import Gastroenterilogist from "./components/Gastroenterilogist";
import Gynecologist from "./components/Gynecologist";
import SingleHosp from "./components/SingleHosp";
import GeneralPhysician from "./components/GeneralPhysician";
import ChildSpecialist from "./components/ChildSpecialist";
import footer from "./components/footer";
function App() {
  return (
    <Router>
      <>
        <TopMenu></TopMenu>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/adminPanel" element={<AdminPanel />}></Route>
          <Route path="/Doc" element={<Doc />}></Route>
          <Route path="/Hosp" element={<Hosp />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/docSignup" element={<DocSignup />}></Route>
          <Route path="/docLogin" element={<DocLogin />}></Route>
          <Route path="/docHome" element={<DocHome />}></Route>
          <Route path="/Dermatologist" element={<Dermatologist />}></Route>
          <Route
            path="/Gastroenterilogist"
            element={<Gastroenterilogist />}
          ></Route>
          <Route path="/Urologist" element={<Urologist />}></Route>
          <Route path="/childSpecialist" element={<ChildSpecialist />}></Route>
          <Route path="/Gynecologist" element={<Gynecologist />}></Route>
          <Route path="/singleHosp" element={<SingleHosp />}></Route>
          <Route
            path="/generalPhysician"
            element={<GeneralPhysician />}
          ></Route>
        </Routes>
        <footer></footer>
      </>
    </Router>
  );
}

export default App;
