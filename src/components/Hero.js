import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import video from "../assets/WarhammerVideo.mp4";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <video className="video-container" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <article className="content">
        <h1>
          WELCOME TO <br />
          TOYBOY
        </h1>
        <Link to="/products" className="btn hero-btn">
          shop now
        </Link>
      </article>
      {/* <article className="img-container">
        <img src={heroBcg} alt="nice table" className="main-img" />
        <img src={heroBcg2} alt="staff working" className="accent-img" />
      </article> */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  position: relative;
  display: grid;
  place-items: center;
  position: relative;

  .video-container {
    border-radius: 5px;
    position: absolute;
    width: 90vw;
    height: 90%;
    object-fit: cover;
    z-index: -1;
  }

  .content {
    color: var(--clr-grey-7);
    position: absolute;
    z-index: 1;
    bottom: 15%;
    left: 5%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: start;

    h1 {
      margin-bottom: 0;
      font-size: 2rem;
    }
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
      line-height: 1.2;
    }
    p {
      font-size: 1.25rem;
    }
    .video-container {
      object-fit: cover;
      width: 100vw;
      height: calc(100vh - 5rem);
    }
    .content {
      bottom: 5%;
      left: -5%;
      gap: 20px;
      h1 {
        font-size: 4rem;
      }
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 500px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: -30px;
      left: -100px;
      width: 275px;
      height: 275px;
      object-fit: cover;
      box-shadow: 0 0 5px 2px var(--clr-grey-10), 0 0 5px 4px var(--clr-grey-8);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 60%;
      background: linear-gradient(
        45deg,
        var(--clr-grey-4),
        var(--clr-primary-9)
      );
      bottom: 35%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
