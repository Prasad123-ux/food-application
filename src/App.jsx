
 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Screens/Home'
import Login from './Components/Screens/Login'
import Sign from './Components/Screens/Sign'
 


export default function App() {
  return (
    <Router>
    <div>
      
      <Routes>
       <Route exact path="/" element={<Home/>}/> 
       <Route exact path="/login" element={<Login/>}/> 
       <Route exact path="/createUser" element={<Sign/>}/>

      </Routes>
    </div>
    </Router>
  )
}
