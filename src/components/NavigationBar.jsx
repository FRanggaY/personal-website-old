import React, { useState } from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { motion } from 'framer-motion';


export const NavigationBar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 50){
        setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 50){
        setShowScroll(false)
        }
    };

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    window.addEventListener('scroll', checkScrollTop)


    return (
        <div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} >
                <Navbar className="customNavbar" fixed="top" >
                    <Container>
                        <Navbar.Brand className="customLogoBrand" href="/"><span>FRY</span></Navbar.Brand>
                        <Nav className="d-lg-inline-flex d-none">
                            <Nav.Link className="text-white" href="#about" >About</Nav.Link>
                            <Nav.Link className="text-white" href="#skill" >Skill</Nav.Link>
                            <Nav.Link className="text-white" href="#portfolio" >Portfolio</Nav.Link>
                        </Nav>
                        <Nav className="d-lg-none d-inline">
                            <Nav.Link className="text-white" onClick={handleShow}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className="bi bi-three-dots" viewBox="0 0 16 16">
                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                </svg>
                            </Nav.Link>
                        </Nav>

                        <Offcanvas show={show} onHide={handleClose} placement="end" >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>FRY</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                            <ul class="navbar-nav flex-row flex-wrap bd-navbar-nav">
                                <li class="nav-item col-6 col-lg-auto">
                                    <a class="nav-link py-2 px-0 px-lg-2" href="#about" >About</a>
                                </li>
                                <li class="nav-item col-6 col-lg-auto">
                                    <a class="nav-link py-2 px-0 px-lg-2" href="#skill" >Skill</a>
                                </li>
                                <li class="nav-item col-6 col-lg-auto">
                                    <a class="nav-link py-2 px-0 px-lg-2" href="#portfolio" >Portfolio</a>
                                </li>
                            </ul>
                            <hr class="d-lg-none text-black-50"/>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </Container>
                </Navbar>
            </motion.div>
            

            <div className="d-flex justify-content-end">
                <Button className="scrollToTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" className="bi bi-arrow-up mt-1" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                    </svg>
                </Button>
            </div>
            
        </div>
    );
}