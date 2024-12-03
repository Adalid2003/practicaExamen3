import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Home(){
    return(
        <section className="home">
            <h1>Soy José Jiménez.</h1>
            <p>Soy un <strong>Full Stack Developer</strong> especializado en PHP y Pyhton.</p>
            <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="2x"/>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x"/>
                </a>
            </div>
        </section>
    );
}

export default Home;