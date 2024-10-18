import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '/pages/Home.jsx'
import About from '../pages/About.jsx'
import ContactUS from '../pages/ContactUS.jsx'
import Feedback from '../pages/Feedback.jsx'
import TourPackages from '../pages/TourPackages.jsx'
import BookingForm from '../pages/BookingForm.jsx'
import Days6 from '../pages/Days6.jsx'
import Days8 from '../pages/Days8.jsx'
import Days10 from '../pages/Days10.jsx'
import Days12 from '../pages/Days12.jsx'
import Days15 from '../pages/Days15.jsx'
import Days18 from '../pages/Days18.jsx'
import Days182 from '../pages/Days182.jsx'
import Days20 from '../pages/Days20.jsx'
import PaymentSuccess from '../pages/PaymentSuccess.jsx'
import PaymentCancel from '../pages/PaymentCancel.jsx'
import Afterfeedback from '../pages/Afterfeedback.jsx'






const App = () => {
  return (
    
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/ContactUS" element={<ContactUS />} />
      <Route path="/Feedback" element={<Feedback />} />
      <Route path="/TourPackages" element={<TourPackages />} />
      <Route path="/BookingForm" element={<BookingForm />} />
      <Route path="/Afterfeedback" element={<Afterfeedback />} />
      <Route path="/Days6" element={<Days6 />} />
      <Route path="/Days8" element={<Days8 />} />
      <Route path="/Days10" element={<Days10 />} />
      <Route path="/Days12" element={<Days12 />} />
      <Route path="/Days15" element={<Days15 />} />
      <Route path="/Days18" element={<Days18 />} />
      <Route path="/Days182" element={<Days182 />} />
      <Route path="/Days20" element={<Days20 />} />
      <Route path="/PaymentSuccess" element={<PaymentSuccess />} />
      <Route path="/PaymentCancel" element={<PaymentCancel />} />
      </Routes>
    
  )
}

export default App