import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Request from "./pages/Request";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import Account from "./pages/Account";
import ProjectDetails from "./pages/ProjectDetails";
import "./App.css";

function App() {
    const [connect, setConnect] = useState(false);
    const handleConnect = () => {
      setConnect(true);
    };
    const logout = () => {
      setConnect(false);
    };
  return (
    <main>
      <BrowserRouter>
        <Header
          logout={logout}
          handleConnect={handleConnect}
          connect={connect}
        />
        <div className={'min-height'}> 
        <Routes>
          <Route path="/" element={<Home handleConnect={handleConnect} />} />
          <Route path="/request" element={<Request />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/account" element={<Account />} />
          <Route path="/project_details/:id" element={<ProjectDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
  
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
