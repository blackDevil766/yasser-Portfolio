import React, { useState } from "react";
import Item from "./Item";
import Tilt from "react-parallax-tilt"; 
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar(props) {
  const [onscrolls, setOnScroll] = useState();


  window.addEventListener("scroll", () => {
    if (window.scrollY >= 150) {
      setOnScroll("nav");
    } else {
      setOnScroll("nav2");
    }
  });

  return (
    <Navbar id={onscrolls} className="navbar" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <Tilt>
            <svg
              width="67pt"
              height="67pt"
              version="1.1"
              viewBox="0 0 700 700"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="transparent"
                className="path"
                stroke="#c4cfde"
                strokeWidth="30"
                d="m570.5 197.75v-113.75c0-14-10.5-24.5-24.5-24.5h-113.75c-21 0-42 7-59.5 17.5-8.75 5.25-15.75 12.25-22.75 21-19.25-22.75-49-38.5-82.25-38.5h-113.75c-14 0-24.5 10.5-24.5 24.5v113.75c0 33.25 15.75 61.25 38.5 82.25-22.75 19.25-38.5 49-38.5 82.25v113.75c0 14 10.5 24.5 24.5 24.5h113.75c14 0 24.5-10.5 24.5-24.5s-10.5-24.5-24.5-24.5h-89.25v-89.25c0-31.5 24.5-56 56-56h89.25v89.25c0 59.5 47.25 106.75 106.75 106.75h113.75c14 0 24.5-10.5 24.5-24.5v-113.75c0-33.25-15.75-61.25-38.5-82.25 26.25-21 40.25-50.75 40.25-84zm-334.25 57.75c-31.5 0-56-24.5-56-56v-91h89.25c31.5 0 56 24.5 56 56v89.25h-89.25zm285.25 106.75v89.25h-89.25c-31.5 0-56-24.5-56-56v-89.25h89.25c29.75-1.75 56 24.5 56 56zm-147-106.75v-89.25c0-19.25 8.75-36.75 24.5-47.25 8.75-7 21-10.5 31.5-10.5h89.25v89.25c0 31.5-24.5 56-56 56h-89.25z"
              />
            </svg>
          </Tilt>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px", margin: "0 auto" }}
            navbarScroll
            id="navbarItemsContainer"
          >
            <Nav.Link href="/#">
              <Item time="1500" text="HOME" />
            </Nav.Link>
            <Nav.Link href="/#AboutMe">
              <Item time="1500" text="ABOUT" />
            </Nav.Link>
            <Nav.Link href="/#portfolio">
              <Item text="PORTFOLIO" />
            </Nav.Link>
            <Nav.Link href="/#resume">
              {/*  linkIt="#resume" */}
              <Item text="SKILLS" />
            </Nav.Link>
            <Nav.Link href="/#contact">
              <Item text="CONTACT" />
            </Nav.Link>
          </Nav>

          <div className="hireMe-part">
            <a href="img\Yasser-allam-resume.pdf" target="_blank" download>
              <button  className="button btn" type="submit">
                Resume
              </button>
              
            </a>

           

          
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavBar;

