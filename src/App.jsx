
 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Screens/Home'
import Login from './Components/Screens/Login'
import Sign from './Components/Screens/Sign'
// import { CartProvider } from './Components/ContextReducer'
import Cart from './Components/Cart'
//  import Navbar from './Components/Navbar'
import Order from './Components/Order'
// import ShopRegister from './Components/ShopRegister'
import Owner from './Components/Owner'
import Navbar from './Components/Option/Navbar'
import ShopRegister from './Components/ShopRegister'
import GetOrder from './Components/Option/GetOrder'
import Footer from './Components/Option/Footer'
import RegisterProduct from './Components/RegisterProduct'
import ProductDetail from './Components/Option/ProductDetail'
import Hpractice from './Components/Screens/Hpractice'
   import Profile from './Components/Option/Profile'
import Porders from './Components/Option/Porders'
import OwnerProfile from './Components/OwnerProfile'
import Summary from './Components/Option/Summary'
import Payments from './Components/Option/Payments'
import Ratings from './Components/Option/Ratings'
import ScrollTop from './Components/Option/ScrollTop'
// import ShopOwner from './Components/Screens/ShopOwner'
// import ShopOwner from './Components/Screens/ShopOwner'
// import ScrollTop from './Components/Option/ScrollTop'
// import { CartProvider } from './Components/ContextReducer'
// import  CartProvider  from './Components/ContextReducer'
 


export default function App() {
  return (
   
   
  //  <CartProvider>
    
    <Router>
    <div>
      {/* <ScrollTop/> */}
      <Navbar/>
      {/* <ScrollTop/> */}
      <Routes>
       <Route exact path="/" element={<Home/>}/> 
       <Route exact path="/login" element={<Login/>}/> 
       <Route exact path="/createUser" element={<Sign/>}/>
       <Route exact path="/myCart" element={<Cart/>}/>
       <Route exact path="/myOrders" element={<Order/>}/>
       <Route exact path="/Owner" element={<Owner/>}/>
       <Route exact path="/shopRegister" element={<ShopRegister/>}/>
       <Route exact path="/productDetail/:id" element={<ProductDetail/>}/> 
       <Route exact path="/profile" element={<Profile/>}/>
       <Route exact path="/RegisterProduct"  element={<RegisterProduct/>}/>
       <Route exact path="profile/orders" element={<Porders/>}/>
       <Route exact path="/ownerProfile" element={<OwnerProfile/>}/>
       <Route exact path="/summary/:id" element={<Summary/>}/>
       <Route exact path="/payments" element={<Payments/>}/>
       <Route exact path="/rateProduct/:id" element={<Ratings/>}/>
       

       


       {/* <Route exact path="/shopOwnerProfile"  element={<ShopOwner/>}/>    */}
       {/* <Route exact path="/shopOwnerProfile" element={<ShopOwner/>} />   */}
       

       {/* <Route exact path="shopOwnerProfile" element={<ShopOwner/>}/> */}
      

    
 </Routes>
 {/* <ScrollTop/> */}
 {/* <GetOrder/> */}
 
    </div>
    {/* <Footer/> */}
    {/* <RegisterProduct/> */}
    {/* <ProductDetail/> */}
    </Router>

    // </CartProvider>
  )
}
