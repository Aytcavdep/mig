import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import Aboutpage from "./pages/Aboutpage";
import Contacts from "./pages/Contacts";
import Notfoundpage from "./pages/Notfoundpage";
import Layout from "./components/Layout";
import Cnc from "./pages/services/Cnc";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="services" element={<Services />}>
            <Route path="cnc" element={<Cnc />} />
          </Route>
          <Route path="about" element={<Aboutpage />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
