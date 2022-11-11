import react from 'react';
import Navbar from './components/Navbar.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Forgot from './components/Forgot.jsx';
import Otp from './components/Otp.jsx'
import Otp2 from './components/Otp2.jsx'
import Main from './components/Main.jsx';
import Password from './components/Password.jsx';
import Home from './pages/homee/home.jsx';
import Contactus from './pages/contactus/contactus.jsx';
import NewAddress from './newAddress/newaddress.jsx';
import Verifyadd from './verifyAddress/verifyadd.jsx';
import Payment from './payment/payment.jsx';
import Cart from './cart/cart.jsx';
import Category from './category/category.jsx';
import RestrauntPage from './restrauntpage/restrauntpage.jsx';
import Page from './components/page.jsx';
import SellerLogin from './sellerauth/login1.jsx';
import SellerFrg from './sellerauth/sellerfrg.jsx';
import SellerFrgOtp from './sellerauth/sellerfrgotp.jsx';
import SellerResetPwd from './sellerauth/sellerresetpwd.jsx';
import SellerSignup from './sellerauth/sellersignup.jsx';
import SellerSignupOtp from './sellerauth/sellersignupotp.jsx';
import RestrauntAdd from './sellerauth/restrauntadd.jsx';
import FoodAdd from './sellerauth/foodadd.jsx';
import Location from './components/location.jsx';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import SellerorBuyer from './components/sellerorbuyer.jsx';
import Seller from './sellerauth/sellerpage.jsx';
    // var y = localStorage.getItem("check");
    // var y = localStorage.getItem("routecheck1");
    // localStorage.removeItem("routecheck1");
function App(){
    return(
        <div>   
             <Router>
                <Routes>
                   <Route path='/buyer' exact element={<Navbar /> }>  
                     </Route>
                     <Route path='/signup' exact element={<Signup />}>
                     </Route>
                     <Route path='/login' exact element={<Login />}>
                     </Route>
                     <Route path='/forgot' exact element={<Forgot />}>
                     </Route>
                     <Route path='/otp' exact element={<Otp />}>
                     </Route>
                     <Route path='/main' exact element={<Main />}>
                     </Route>    
                     <Route path='/otp2' exact element={<Otp2 />}>
                     </Route>   
                     <Route path='/password' exact element={<Password />}>
                     </Route>    
                     <Route path='/home' exact element={<Home />}>
                     </Route>      
                     <Route path='/contact' exact element={<Contactus />}>
                     </Route> 
                     <Route path='/newadd' exact element={<NewAddress />}>
                     </Route>    
                     <Route path='/veradd' exact element={<Verifyadd />}>
                     </Route>    
                     <Route path='/payment' exact element={<Payment />}>
                     </Route> 
                     <Route path='/cart' exact element={<Cart />}>
                     </Route>    
                     <Route path='/category' exact element={<Category />}>
                     </Route>     
                     <Route path='/restrauntpage' exact element={<RestrauntPage/>}>
                     </Route>
                     <Route path='/page' exact element={<Page />}>
                     </Route> 
                     <Route path='/sellerlogin' exact element={<SellerLogin />}>
                     </Route>  
                     <Route path='/sellerfrg' exact element={<SellerFrg />}>
                     </Route>  
                     <Route path='/sellerfrgotp' exact element={<SellerFrgOtp />}>
                     </Route>  
                     <Route path='/sellerresetpwd' exact element={<SellerResetPwd/>}>
                     </Route> 
                     <Route path='/sellersignup' exact element={<SellerSignup />}>
                     </Route>   
                     <Route path='/sellersignupotp' exact element={<SellerSignupOtp />}>
                     </Route> 
                     <Route path='/restrauntadd' exact element={<RestrauntAdd />}>
                     </Route> 
                     <Route path='/foodadd' exact element={<FoodAdd />}>
                     </Route> 
                     <Route path='/location' exact element={<Location/>}>
                     </Route> 
                     <Route path='/seller' exact element={<Seller/>}>
                     </Route> 
                     <Route path='/' exact element={<SellerorBuyer/>}>
                     </Route>    

             </Routes>
        </Router>
        </div>

  );
}
export default App;