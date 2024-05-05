import React, { useState } from "react";
import styled from "styled-components";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

// use ES6 default parameter (=[]) to prevent undefined
const ProductImages = ({ images = [] }) => {
  const [mainImg, setMainImg] = useState(images[0]);
  console.log(images);
  return (
    <Wrapper>
      <button
        type="button"
        className="prev-btn"
        onClick={() => {
          let newIndex =
            images.indexOf(mainImg) - 1 < 0
              ? images.length - 1
              : images.indexOf(mainImg) - 1;
          setMainImg(images[newIndex]);
        }}
      >
        <MdArrowLeft size={26} />
      </button>
      <img src={mainImg?.url} alt="main" className="main" />
      <button
        type="button"
        className="next-btn"
        onClick={() => {
          let newIndex =
            images.indexOf(mainImg) + 1 >= images.length
              ? 0
              : images.indexOf(mainImg) + 1;
          setMainImg(images[newIndex]);
        }}
      >
        <MdArrowRight size={26} />
      </button>
      <div className="gallery">
        {images.map((image, index) => {
          return (
            <img
              src={image?.url}
              key={image?.id}
              alt="other images"
              onClick={() => setMainImg(images[index])}
              className={`${image.url === mainImg.url ? "active" : ""}`}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  .main {
    height: 600px;
  }
  .prev-btn {
    display: flex;
    align-items: center;
    position: absolute;
    padding: 5px;
    cursor: pointer;
    top: 40%;
    left: 5%;
    z-index: 10;
    border: none;
  }
  .next-btn {
    display: flex;
    align-items: center;
    position: absolute;
    padding: 5px;
    cursor: pointer;
    top: 40%;
    right: 5%;
    z-index: 10;
    border: none;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: contain;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    row-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
      object-fit: cover;
      transition: var(--transition);
      filter: saturate(50%);
    }

    img:hover {
      scale: 1.1;
    }

    img.active {
      box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
      filter: brightness(120%);
    }
  }
  /* .active {
  } */
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default ProductImages;
