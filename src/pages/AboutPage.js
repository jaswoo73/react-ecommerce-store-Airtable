import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/about.webp";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="About" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <article>
              <h2>About Us:</h2>
              <div className="underline"></div>
              <p>
                Toyboy is your ultimate destination for all things Warhammer
                40k. From meticulously crafted miniatures to awe-inspiring
                collectibles, we're here to fuel your passion for the grim
                darkness of the far future. Explore our vast selection and
                immerse yourself in the epic universe of Warhammer 40,000.
                Welcome to Toyboy – where adventure awaits!
              </p>
            </article>
            <article>
              <h2> Contact Us:</h2>
              <div className="underline"></div>
              <ul>
                <li>Email: contact@toyboy.com</li>
                <li>Phone: +603-32130231</li>
                <li>Address: 123 Warhammer Way, Sector 40k, Toyboy City</li>
              </ul>
            </article>
          </div>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  place-items: top;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 400px;
    object-fit: cover;
    object-position: top;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
    display: grid;
    grid-template-rows: auto auto;
    gap: 2rem;
  }
  .underline {
    margin-left: 0;
  }
  ul {
    margin-top: 2rem;
    li {
      margin-top: 1rem;
    }
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
