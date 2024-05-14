import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer style={{ color: "#ffffff" }}>
        <Container>
          <Row>
            <Col className="text-center py-3">
              <p style={{ color: "#ffffff" }}>
                ShopCart.ann.in &nbsp;&nbsp; - &nbsp;&nbsp; &copy; {currentYear}{" "}
                &nbsp;&nbsp; : &nbsp;&nbsp;
                <a
                  style={{ color: "#ffffff", textDecoration: "none" }}
                  href="mailto:katreaniket3@gmail.com"
                >
                  katreaniket3@gmail.com &nbsp;
                </a>{" "}
                <a
                  href="https://www.instagram.com/annie_jb_/"
                  style={{ textDecoration: "None", color: "#ffffff" }}
                  target="_blank"
                >
                  {"   "}&nbsp; ||&nbsp; {"   "}
                  <FaInstagram style={{ fontSize: "20px", color: "#ffffff" }} />
                  {"   "}
                </a>{" "}
                <a
                  href="https://www.linkedin.com/in/aniket-katre-752465149/"
                  style={{ textDecoration: "None", color: "#ffffff" }}
                  target="_blank"
                >
                  {"   "} &nbsp;|| &nbsp;{"   "}
                  <FaLinkedin style={{ fontSize: "20px" }} />
                  {"   "}
                </a>{" "}
                <a
                  href="https://github.com/AniketKatre/"
                  style={{ textDecoration: "None", color: "#ffffff" }}
                  target="_blank"
                >
                  {"   "} &nbsp;|| &nbsp; {"   "}
                  <FaGithub style={{ fontSize: "20px" }} />
                  {"   "}
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
