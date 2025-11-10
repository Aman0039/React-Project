import PersonalDetails from './form-pages/PersonalDetails'
import FinacialDetails from './form-pages/FinacialDetails'
import LoanDetails from './form-pages/LoanDetails'
import Jointer from '../../ui/Jointer'
import { Link } from 'react-router-dom';


const MultiStepForm = () => {

  return (
    <>
    <Jointer/>
      <div className="min-h-screen flex flex-col items-center py-10">
        <form className="bg-linear-to-tr from-rose-300 via-green-50 to-rose-400 p-8 rounded-2xl shadow-lg w-full max-w-3xl space-y-8">
          <h1 className="text-3xl font-bold text-center mb-6 text-emerald-800">
            Loan Application Form
          </h1>

          <PersonalDetails/>
          <FinacialDetails/>
          <LoanDetails/>


          {/* Consent and Submit */}
          <div className="flex items-center gap-2 mt-4">
            <input type="checkbox" id="consent" className="w-4 h-4" />
            <label htmlFor="consent" className="text-sm">
              I confirm that the above information is true to the best of my knowledge.
            </label>
          </div>

          <div className="text-center mt-6">
            <Link
            to="/dashboard"
            >
            <button type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-6 rounded-md transition-all">
              Submit Application
            </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default MultiStepForm
