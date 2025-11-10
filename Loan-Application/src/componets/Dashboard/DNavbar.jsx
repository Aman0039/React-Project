import React, { useState } from "react";
import { Link } from "react-router-dom";
import { House, Menu, X } from "lucide-react";
import Jointer from "../../ui/Jointer";

const DNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="fixed w-full z-10 mt-30 min-mt-20 bg-linear-to-tr from-white via-blue-100 to-emerald-100 text-gray-700 font-medium shadow-sm">
      <Jointer />
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-14">
            <Link
              to="/"
              className="text-3xl font-semibold text-gray-800 hover:text-emerald-700"
            >
              <House/>
            </Link>

            {/* Hamburger Button (Mobile) */}
            <button
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-8 text-lg">
              <li className="hover:text-gray-800">
                <Link to="application-status">Application Status</Link>
              </li>
              <li className="hover:text-gray-800">
                <Link to="extend-tenure">Extend Tenure</Link>
              </li>
              <li className="hover:text-gray-800">
                <Link to="repayment">Repayment</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <ul className="flex flex-col items-center py-4 gap-4 text-lg">
              <li>
                <Link
                  to="application-status"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-emerald-700"
                >
                  Application Status
                </Link>
              </li>
              <li>
                <Link
                  to="extend-tenure"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-emerald-700"
                >
                  Extend Tenure
                </Link>
              </li>
              <li>
                <Link
                  to="repayment"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-emerald-700"
                >
                  Repayment
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default DNavbar;
