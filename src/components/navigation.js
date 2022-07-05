import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <NavLink to="/animated-landing-page-React/" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/animated-landing-page-React/about" exact>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/animated-landing-page-React/approch" exact>
                  Aprroch
                </NavLink>
              </li>
              <li>
                <NavLink to="/animated-landing-page-React/caseStudues" exact>
                  Case studies
                </NavLink>
              </li>

              <li>
                <NavLink to="/animated-landing-page-React/services" exact>
                  Services
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contact</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Email</li>
                <li>
                  <NavLink to="/animated-landing-page-React/contact" exact>
                    Get in touch with us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/animated-landing-page-React/audit" exact>
                    Get a free audit
                  </NavLink>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Headquaters</li>
                <li>Route to Jura 49</li>
                <li>7000 friberge</li>
                <li>Swizerland</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Phone</li>
                <li>+41 (0) 79 510 28 70</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Legal</li>
                <li>Privacy &amp; Cokies </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
