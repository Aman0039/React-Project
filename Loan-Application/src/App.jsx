import { Routes, Route, useLocation } from "react-router-dom";
import Home from './componets/HomePage/HomePage';
import Footer from './componets/Layout/Footer';
import MultiStepForm from './componets/Multi-Step-Form/MultiStepForm';
import Header from './componets/Layout/Header';
import Dashboard from './componets/Dashboard/Dashboard';
import Unknown from './ui/Unknown';

function App() {

  const location = useLocation();

  const knownPaths = ["/", "/dashboard", "/applicant-form","/dashboard/application-status","/dashboard/extend-tenure","/dashboard/repayment"];
  const isUnknownPage = !knownPaths.includes(location.pathname);

  // To handle Unknown Pages/Sources this component only Render.

  if (isUnknownPage)
    return (
        <Routes>
          <Route path="*" element={<Unknown />} />
        </Routes>
    )

    // Actual Component rendering..
  return (
    <div className='select-none'>
      {location.pathname !== "/" && <Header />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard/*' element={<Dashboard />} />
        <Route path='applicant-form' element={<MultiStepForm />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
