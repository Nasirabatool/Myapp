import React from "react";
import Navbar from "./Commen/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import CleaningService from "./components/CleaningService";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Company from "./components/Company";
import Blog from "./components/Blog";
import Feedback from "./components/Feedback";
import Contact from "./components/Contact";
import Footer from "./Commen/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <CleaningService />
      <About />
      <Pricing />
      <Feedback />
      <Blog />
      <Company />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;


// import './App.css'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from './Context/Home' 
// import About from './Context/About'
// import Products from './Context/Products'
// import Header from './Context/Header'
// import Login from './Context/Login'
// import Logout from './Context/Logout'
// import { AuthProvider } from './Context/AuthContext'
// import { CartProvider } from './Context/CartContext'

// function App() {
//   return (
//     <> 
//       <BrowserRouter>
//         <AuthProvider>
//           <CartProvider>
//             <Header />
//             <Routes>
//               <Route path='/' element={ <Home/> } />
//               <Route path='/about' element={ <About/> } />
//               <Route path='/products' element={ <Products/> } /> 
//               <Route path='/login' element={ <Login/> } /> 
//               <Route path='/logout' element={ <Logout/> } /> 
//             </Routes>
//           </CartProvider>
//         </AuthProvider>
//       </BrowserRouter>
//     </> 
//   )
// }

// export default App


 