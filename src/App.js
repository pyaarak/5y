import logo from "./logo.svg";
import "./App.css";
import Banner from "./Components/Banner";
import Second_Banner from "./Components/Second_Banner";
import Home_Services from "./Components/Home_Services";
import Technologies from "./Components/Technologies";
import Contact_Banner from "./Components/Contact_Banner";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutus from "./Components/Aboutus";
import Services from "./Components/Services";
import FullStackDev from "./Components/FullStackDev";
import Msc from "./Components/Msc";
import FlutterDev from "./Components/FlutterDev";
import Autotesting from "./Components/AutoTesting";
import Uiuxdev from "./Components/Uiuxdev";
import MobileTesting from "./Components/MobileTesting";
import MobileAppdevelopment from "./Components/MobileAppdevelopment";
import IotIntegration from "./Components/IotIntegration";
import ContactUs from "./Components/ContactUs";
import Careers from "./Components/Careers";
import FixedFooter from "./Components/FixedFooter";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <Second_Banner></Second_Banner>
                <Home_Services></Home_Services>
                <Technologies></Technologies>
                <Contact_Banner></Contact_Banner>
              </>
            }
          ></Route>
          <Route path="/aboutus" element={<Aboutus></Aboutus>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/services/fullstack" element={<FullStackDev></FullStackDev>}></Route>
          <Route path="/services/mscloud" element={<Msc></Msc>}></Route>
          <Route path="/services/flutter" element={<FlutterDev></FlutterDev>}></Route>
          <Route path="/services/autotesting" element={<Autotesting></Autotesting>}></Route>
          <Route path="/services/uiux" element={<Uiuxdev></Uiuxdev>}></Route>
          <Route path="/services/mobiletesting" element={<MobileTesting></MobileTesting>}></Route>
          <Route path="/services/MobileAppdevelopment" element={<MobileAppdevelopment></MobileAppdevelopment>}></Route>
          <Route path="/services/iotintegration" element={<IotIntegration></IotIntegration>}></Route>
          <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
          <Route path="/contactus/careers" element={<Careers></Careers>}></Route>
        </Routes> 
      </Router>

      <Footer></Footer>
      {/* <FixedFooter></FixedFooter> */}
    </div>
  );
}

export default App;
