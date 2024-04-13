import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
<div>
<aside className="main-sidebar sidebar-dark-primary elevation-4" style={{ maxHeight: '100vh', overflowY: 'auto' }}>
    <a href="index3.html" className="brand-link">
      <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
      <span className="brand-text font-weight-light">Etudiant</span>
    </a>
    <div className="sidebar">
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <ul>
      
       <li className="nav-item" style={{display: 'flex', alignItems: 'center'}}>
        <a href="pages/widgets.html" className="nav-link" style={{display: 'flex', alignItems: 'center'}}>
          <i className="nav-icon fas fa-th" />
          <p style={{marginBottom: 0, marginLeft: 5}}>Profile</p>
        </a>
      </li>

      <li className="nav-item" style={{display: 'flex', alignItems: 'center'}}>
        <a href="pages/widgets.html" className="nav-link" style={{display: 'flex', alignItems: 'center'}}>
          <i className="nav-icon fas fa-th" />
          <p style={{marginBottom: 0, marginLeft: 5}}>Widgets</p>
        </a>
      </li> 
      
      <li className="nav-item" style={{display: 'flex', alignItems: 'center'}}>
        <a href="pages/widgets.html" className="nav-link" style={{display: 'flex', alignItems: 'center'}}>
          <i className="nav-icon fas fa-th" />
          <p style={{marginBottom: 0, marginLeft: 5}}>Ajoute  Utulisateur</p>
        </a>
      </li>
      
       <li className="nav-item" style={{display: 'flex', alignItems: 'center'}}>
        <a href="pages/widgets.html" className="nav-link" style={{display: 'flex', alignItems: 'center'}}>
          <i className="nav-icon fas fa-th" />
          <p style={{marginBottom: 0, marginLeft: 5}}>Liste d'utilisateur</p>
        </a>
      </li>


        </ul>
    

      </div>
    </div>
  </aside>
</div>

  );
};

export default Sidebar;
