import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header_main from './Components/Header_main/Header_main';
import Home_page_slider from './Components/Home_page_slider/Home_page_slider';
import Header from './Components/Header/Header';
import Sports_bar from './Components/Sports_bar/Sports_bar';
import Cricket from './Components/Cricket/Cricket';
import { Route, Routes } from 'react-router-dom';
import Change_password from './Components/Change_password/Change_password';
import Soccer from './Components/Soccer/Soccer';
import Tennis from './Components/Tennis/Tennis';
import Account_statement from './Components/Account_statement/Account_statement';
import Dashboard from './Components/Dashboard/Dashboard';
import Politics from './Components/Politics/Politics';

function App() {
  return (
    <div className="App">
  
    <Header/>
   <Sports_bar/>
   <Routes>

        <Route path="/" element={<Dashboard   />} />
        <Route path="/Politics" element={<Politics   />} />
        <Route path="Account_Statement" element={<Account_statement />} />
        <Route path="/Soccer" element={<Soccer />} />
        <Route path="/Tennis" element={<Tennis />} />
        <Route path="/Cricket" element={<Cricket />} />
        <Route path="/Change_Password" element={<Change_password />} />
        {/* <Route path="mint_now" element={<Mint_Now />} /> */}
      </Routes>
    </div>
  );
}

export default App;
