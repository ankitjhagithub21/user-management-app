import {BrowserRouter,Routes,Route} from 'react-router-dom'
import "./App.css"
import Users from './components/Users'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import CreateUser from './components/CreateUser';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Toaster} from "react-hot-toast"
import UpdateUser from './components/UpdateUser';
const App = () => {


  return (
    <BrowserRouter>
    <Toaster/>
    <Navbar />
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/create" element={<CreateUser/>}/>
        <Route path="/update/:id" element={<UpdateUser/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
