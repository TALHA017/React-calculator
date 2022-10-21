import React from 'react';
// import './App.css';

function Header(): JSX.Element {
  return (

    <header className="bg-white shadow">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand ms-4" href="#">
             Add Form
        </a>


        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                {/*<button className="btn btn-primary"> <span className="sr-only">Add Form</span> </button>*/}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
      {/*<a href={}/>*/}
    </div>
  </header>
    );
  }
  
  export default Header;