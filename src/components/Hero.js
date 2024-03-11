import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-warhmmer-5.webp";
import heroBcg2 from "../assets/hero-warhmmer-6.webp";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          WARHAMMER <br />
          40,000
        </h1>
        <p>
          Discover Comfort and Style at Comfy Sloth - Elevate Your Space with
          Handcrafted Furniture Delivered to Your Doorstep!
        </p>
        <Link to="/products" className="btn hero-btn">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="nice table" className="main-img" />
        <img src={heroBcg2} alt="staff working" className="accent-img" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
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
