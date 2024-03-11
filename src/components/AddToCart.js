import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";
import { FaCartPlus } from "react-icons/fa6";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, stock, colors } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      return Math.max(oldAmount + 1, stock);
    });
  };
  const decrease = () => {
    setAmount((oldAmount) => {
      return Math.min(oldAmount, 1);
    });
  };

  return (
    <Wrapper>
      <div className="colors">
        <span>colors : </span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                className={`color-btn ${color === mainColor && "active"}`}
                style={{ background: `${color}` }}
                onClick={() => setMainColor(colors[index])}
              >
                {color === mainColor && <FaCheck />}
              </button>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link
          to="/cart"
          className="btn"
          onClick={() => addToCart(id, mainColor, amount, product)}
          title="Add to cart"
        >
          <FaCartPlus />
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    box-shadow: 0 0 0 2px var(--clr-grey-3);
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
    display: grid;
    place-items: center;
    font-size: 30px;
    padding: 1rem 0.5rem;
  }
`;
export default AddToCart;
