import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Home-page/Home';
import Footer from './Components/Footer';
import About from './About-page/About';
import Service from './Service-page/Service';
import HomeLoan from './HomeLoan-page/Homeloan';
import ContactUs from './Contact-page/ContactUs';
import PersonalLoan from './PersonalLoan-page/PersonalLoan';
import GoldLoan from './GoldLoan-page/GoldLoan';
import BusinessLoan from './BusinessLoan-page/BusinessLoan';
function App() {


  return (
    <>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='contact' element={<ContactUs />} />

          {/* Loan-pages */}
          <Route path='/homeloan' element={<HomeLoan />} />
          <Route path='/personalloan' element={<PersonalLoan />} />
          <Route path='/goldloan' element={<GoldLoan />} />
          <Route path='/businessloan' element={<BusinessLoan />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </>

  )
}

export default App
