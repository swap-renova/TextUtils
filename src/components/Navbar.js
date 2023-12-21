import React from 'react'
import PropTypes from 'prop-types';

export default function Navbar(props) {
  let btnTxt,btncls;
  if(props.mode === "light"){
    btnTxt = "Enable DarkMode";
    btncls = "dark";
  }else{
    btnTxt = "Enable LightMode";
    btncls = "light";
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
            <img src={process.env.PUBLIC_URL +"/logo.png"} height="75"/>
            <a className="navbar-brand" to="/"><h1>{props.title}</h1></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              </ul>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="switchMode" onClick={props.toggleMode} />
                <label className={`form-check-label text-${btncls}`} htmlFor="switchMode">{btnTxt}</label>
              </div>
            </div>
          </div>
        </nav>
  )
}

// set the data type for each props
Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

// set the default value for each prop
Navbar.defaultProps = {
    title: "Ikdey value tak..."
}