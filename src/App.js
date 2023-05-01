import './App.css';

import HomeComponent from './components/HomeComponent';
import axios from 'axios';
import {
  BrowserRouter,
  RouterProvider,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import CustomerComponent from './../src/components/CustomerComponent';
import Protected from './components/Protected';
import MenuComponent from './components/MenuComponent';
const loginHandler = function () {

}
function App() {
  const OnLoginHandler = function(){
    
  }
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent OnLogin = {OnLoginHandler}></HomeComponent>}/>
          <Route path="/account" element={<Protected PropComponent = {CustomerComponent}></Protected>} />
          <Route path="/allRestaurantMenu" element={<Protected PropComponent = {MenuComponent}></Protected>} />
        </Routes>
      </BrowserRouter>
      


    </div>
  );
}

export default App;
