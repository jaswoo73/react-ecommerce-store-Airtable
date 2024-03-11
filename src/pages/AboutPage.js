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
            <h2>our story</h2>
            <div className="underline"></div>
            <p>
              Indulge in the allure of Comfy Sloth's handcrafted furniture—where
              style meets comfort. Browse our curated selection, bringing the
              ease of buying exquisite pieces right to the palm of your hand.
              Elevate your space effortlessly with quality delivered to your
              doorstep.
            </p>
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
    height: 300px;
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
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
