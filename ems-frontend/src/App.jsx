import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponents from "./components/HeaderComponents";
import FooterComponents from "./components/FooterComponents";
import ListEmployeeComponents from "./components/ListEmployeeComponents";
import EmployeeComponents from "./components/EmployeeComponents";
import LandingPage from "./components/LandingPage"; // Import Landing Page

function App() {
  return (
    <BrowserRouter>
      <HeaderComponents />

      <Routes>
        <Route path="/" element={<LandingPage />} />  {/* Landing Page */}
        <Route path="/employees" element={<ListEmployeeComponents />} />
        <Route path="/add-employee" element={<EmployeeComponents />} />
      </Routes>

      <FooterComponents />
    </BrowserRouter>
  );
}

export default App;
