import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserRegister from "./pages/userRegister/UserRegister";
import UsersList from "./pages/UsersList/UsersList";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <BrowserRouter>
        <Menu/>
        <Routes>
            <Route index element={<UserRegister/>}/>
            <Route path="/users" element={<UsersList/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
