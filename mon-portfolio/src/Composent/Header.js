import React from 'react';

function Header () {
    return (
        <div className="top-header-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="header-info">
                <ul>
                  <li><i className="bi bi-geo-alt-fill"></i>New market Sandigo - California</li>
                  <li className="exam-gmail"><i className="bi bi-envelope"></i>example@gmail.com</li>
                  <li><i className="bi bi-alarm"></i>9.00 am - 5.00 pm</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="top-header-social-icon">
                <ul>
                  <li><a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a></li>
                  <li><a href="#" aria-label="Pinterest"><i className="fab fa-pinterest-p"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Header;
