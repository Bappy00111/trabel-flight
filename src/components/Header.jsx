import React from "react";
import logo  from '../../src/image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xX3N0X2xvZ28iIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCA1OTIuNjEgMTYxLjIzIj48c3R5bGU+LnN0MHtmaWxsOiMxODgyZmZ9LnN0.svg'

const Header = () => {
  return (
    <div className="navbar  sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto ">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {/* <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul> */}
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a>Flight</a>
            </li>
            <li>
              <a>Hotel</a>
            </li>
            <li>
              <a>Holiday</a>
            </li>
            <li>
              <details>
                <summary>Visa</summary>
                <ul className="p-2 w-40">
                  <li>
                    <a>visa Application</a>
                  </li>
                  <li>
                    <a>visa Guide</a>
                  </li>
                  <li>
                    <a>Transit visa</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Medical</a>
            </li>
            <li>
              <a>Promotions</a>
            </li>
            <li>
              <details>
                <summary>Others</summary>
                <ul className="p-2 w-40">
                  <li>
                    <a>About</a>
                  </li>
                  <li>
                    <a>Sky Trip</a>
                  </li>
                  <li>
                    <a>why ShareTrip?</a>
                  </li>
                  <li>
                    <a>Travel Guide</a>
                  </li>
                  <li>
                    <a>News</a>
                  </li>
                  <li>
                    <a>FAQ & Support</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <img className="h-10 w-40 cursor-pointer sm:it" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-gray-500">
          <li>
            <a>Flight</a>
          </li>
          <li>
            <a>Hotel</a>
          </li>
          <li>
            <a>Holiday</a>
          </li>
          <li>
            <details>
              <summary>Visa</summary>
              <ul className="p-2 w-40">
                <li>
                  <a>visa Application</a>
                </li>
                <li>
                  <a>visa Guide</a>
                </li>
                <li>
                  <a>Transit visa</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Medical</a>
          </li>
          <li>
            <a>Promotions</a>
          </li>
          <li>
            <details>
              <summary>Others</summary>
              <ul className="p-2 w-40">
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Sky Trip</a>
                </li>
                <li>
                  <a>why ShareTrip?</a>
                </li>
                <li>
                  <a>Travel Guide</a>
                </li>
                <li>
                  <a>News</a>
                </li>
                <li>
                  <a>FAQ & Support</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="lg:navbar-end ">
      <button className="btn btn-info text-white rounded-full">Login</button>
      </div>
    </div>
  );
};

export default Header;