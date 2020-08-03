import React from 'react';
import './Styling/Footer.css';
import { Container, Row, Col } from 'react-bootstrap'

/** Generates footer at bottom of page, Bootstrap */
function Footer() {
    return (
        <footer className="page-footer font-small blue pt-4" position="relative">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="desc">Designed by CWRU Crew</h5>
                        <div className="desc">
                            <p>This website was designed to replace a shared sheet where we planned rides previously. This system worked, but as our club continues to grow, we hope
                            to provide a better user experience through this website developed by the team itself!
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
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/jse41/crew_rides">Look at the Code</a>
                                </div>
                            </li>
                        </ul>

                    </div>
                    <div className="col-md-3 mb-md-0 mb-3">
                        <Container fluid>
                            <Row>
                                <Col sm={12} md={12} lg={12} key={1}>
                                    <div className="headerText desc">
                                        <h5>Check us out!</h5>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="col-md-3 mb-md-0 mb-3 headerText desc" sm={3} md={3} lg={3} key={1}>
                                    <svg className="anim" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#f2f6e9">
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/cwrucrew/?hl=en">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </a>
                                    </svg>
                                </Col>
                                <Col className="col-md-3 mb-md-0 mb-3 headerText desc" sm={3} md={3} lg={3} key={2}>
                                    <svg className="anim" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#f2f6e9">
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/cwrucrew/">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
                                        </a>
                                    </svg>
                                </Col>
                                <Col className="col-md-3 mb-md-0 mb-3 headerText desc" sm={3} md={3} lg={3} key={3}>
                                    <svg className="anim" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#f2f6e9">
                                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/cwrucrew?lang=en">
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                        </a>
                                    </svg>
                                </Col>
                                <Col className="col-md-3 mb-md-0 mb-3 headerText desc" sm={3} md={3} lg={3} key={4}>
                                    <svg className="anim" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#f2f6e9">
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCsjGG15v2YX6r7P3KvKwaVA">
                                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                        </a>
                                    </svg>
                                </Col>
                            </Row>
                        </Container>

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