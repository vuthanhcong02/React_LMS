import "./App.scss";
import Header from "./components/Layout/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Layout/Footer/Footer";
function App() {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <div className="sidenav-container"></div>
        <div className="app-content">
          <Outlet />
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
