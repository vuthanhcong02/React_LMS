import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MyCourse from './components/MyCourse/MyCourse';
import DashboardUser from './components/DashboardUser/DashboardUser';
import Home from './components/Home/Home';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
     <BrowserRouter>  
        <Routes>
          <Route path="/" element={<App />} >
            <Route index element={<Home />}/>
            <Route path="/my-course" element={<MyCourse/>}/>
            <Route path="dashboard" element={<DashboardUser />}/>
          </Route>
        </Routes>
      </BrowserRouter>
 // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
