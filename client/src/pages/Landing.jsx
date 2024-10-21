import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";

import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby keytar mixtape gochujang tattooed poke chia. Farm-to-table
            pour-over green juice migas narwhal taiyaki enamel pin actually kale
            chips synth. Activated charcoal swag actually four loko. Try-hard
            portland salvia YOLO, occupy cold-pressed wayfarers umami hexagon
            kogi pabst VHS blackbird spyplane single-origin coffee raw denim.
            Aesthetic fanny pack ethical, ennui bitters praxis truffaut bicycle
            rights air plant neutral milk hotel freegan hashtag quinoa pickled.
            Taiyaki craft beer yr church-key small batch salvia.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
          <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
