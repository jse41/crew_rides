import React from 'react';
import './Styling/Footer.css';

/** Generates footer at bottom of page, Bootstrap */
function Footer() {
  return (
      <footer className="page-footer font-small blue pt-4" position="relative">
          <div className="container-fluid text-center text-md-left">
              <div className="row">
                  <div className="col-md-6 mt-md-0 mt-3">
                      <h5 className="desc">Designed by Jacob Engelbrecht</h5>
                      <div className="desc">
                        <p>Designing my own website had been something I wanted to do for a while and in summer of 2020 I finally set out and did it! 
                            This was a great project for me to at least become familiar with modern, front-end frameworks and development practices.
                        </p>
                      </div>
                  </div>
                  <hr className="clearfix w-100 d-md-none pb-3"></hr>
                  <div className="col-md-3 mb-md-0 mb-3">
                      <h5 className="text-uppercase desc">Links</h5>

                      <ul className="list-unstyled">
                          <li>
                              <div className="desc text-uppercase">
                                <a target="_blank" rel="noopener noreferrer" href="https://casewesternrowing.weebly.com/">Cwru Crew</a>
                              </div>
                          </li>
                          <li>
                              <div className="text-uppercase">
                                <a target="_blank" rel="noopener noreferrer" href="https://xkcd.com/2111/">Something Interesting</a>
                              </div>
                          </li>
                      </ul>

                  </div>
                  <div className="col-md-3 mb-md-0 mb-3">
                      <h5 className="desc">Connect with Me!</h5>
                      <svg className="anim" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#f2f6e9">
                          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/j-engelbrecht/">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </a>
                      </svg>
                  </div>
              </div>
          </div>
          <div className="footer-copyright text-center py-3">© 2020 Copyright: 
                <a href="https://jacobeng3l.com/"> JacobEng3l.com</a>
          </div>

      </footer>
  );
}

export default Footer;