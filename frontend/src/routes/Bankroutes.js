import React from 'react';
import { Routes, Route } from 'react-router-dom';


  import "../assets/vendor/bootstrap/css/bootstrap.min.css"
  import "../assets/vendor/bootstrap-icons/bootstrap-icons.css"
  import "../assets/vendor/boxicons/css/boxicons.min.css"
  import "../assets/vendor/quill/quill.snow.css"
  import "../assets/vendor/quill/quill.bubble.css"
  import "../assets/vendor/remixicon/remixicon.css"
  import "../assets/vendor/simple-datatables/style.css"
  import "../assets/css/style.css"
  // import "../assets/vendor/apexcharts/apexcharts.min.js"
  import "../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
  import "../assets/vendor/chart.js/chart.umd.js"
  import "../assets/vendor/echarts/echarts.min.js"
  import "../assets/vendor/quill/quill.min.js"
  import "../assets/vendor/simple-datatables/simple-datatables.js"
  import "../assets/vendor/tinymce/tinymce.min.js"
  import "../assets/vendor/php-email-form/validate.js"
 
  import "../assets/js/main.js"
import PredictLoan from '../pages/bank/PredictLoan.js';
import FAQ from '../pages/bank/FAQ.js';
import Contact from '../pages/bank/Contact.js';
import Profile from '../pages/bank/Profile.js';
import Dashboard from '../pages/bank/Dashboard.js';
import Login from '../pages/bank/Login.js';
import Error404 from '../pages/Error404.js';
import PredictCreditRisk from '../pages/bank/PredictCreditRisk.js';


  
  
const Bankroutes = () => {
  return (
  <Routes> 
     <Route exact path='/login' element={<Login />} />
     <Route exact path='/dashboard' element={<Dashboard />} />
     <Route exact path='/predict' element={<PredictLoan />} />
     <Route exact path='/predict_creditrisk' element={<PredictCreditRisk />} />
     <Route exact path='/faq' element={<FAQ />} />
     <Route exact path='/contact' element={<Contact />} />
     <Route exact path='/profile' element={<Profile />} />
     <Route exact path='/' element={<Login />} />
  </Routes>
)
}

export default Bankroutes