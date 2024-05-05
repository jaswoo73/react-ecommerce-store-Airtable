import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      price,
      max_price,
      shipping,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");

  return (
    <Wrapper>
      <div className="content">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {/* SEARCH INPUT */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              className="search-input"
              placeholder="Search"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* CATEGORIES */}
          <div className="form-control">
            <h5>category</h5>
            <div>
              {categories.map((cat, index) => {
                return (
                  <button
                    type="button"
                    key={index}
                    onClick={updateFilters}
                    name="category"
                    className={`category-btn ${
                      category === cat ? "cat-active" : null
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
          {/* COMPANIES */}
          <div className="form-control">
            <h5>company</h5>
            <select
              name="company"
              value={company}
              className="company"
              onChange={updateFilters}
            >
              {companies.map((company, index) => {
                return (
                  <option key={index} value={company}>
                    {company}
                  </option>
                );
              })}
            </select>
          </div>
          {/* COLORS */}
          <div className="form-control">
            <h5>colors</h5>
            <div className="colors">
              {colors.map((col, index) => {
                if (col === "all") {
                  return (
                    <button
                      key={index}
                      name="color"
                      onClick={updateFilters}
                      data-color="all"
                      className={`${
                        color === "all" ? "all-btn active" : "all-btn"
                      }`}
                    >
                      all
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    name="color"
                    style={{ background: col }}
                    className={`color-btn ${color === col && "col-active"}`}
                    data-color={col}
                    onClick={updateFilters}
                  >
                    {color === col && <FaCheck />}
                  </button>
                );
              })}
            </div>
          </div>
          {/* PRICE */}
          <div className="form-control">
            <h5>price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
              step={1000}
            />
          </div>
          {/* SHIPPING */}
          <div className="form-control shipping">
            <label htmlFor="shipping">free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onChange={updateFilters}
              checked={shipping}
            />
          </div>
        </form>
        <button type="button" className="clear-btn" onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
    caret-color: var(--clr-primary-6);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    position: relative;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .category-btn::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background: var(--clr-primary-6);
    transform-origin: left;
    transform: scaleX(0);
    transition: transform 0.3s;
  }
  .category-btn:hover::after {
    transform: scaleX(1);
    transform-origin: right;
  }

  .category-btn.cat-active::after {
    transform: scaleX(0);
    transform-origin: left;
  }

  .category-btn::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 2px;
    background: var(--clr-primary-6);
    transform-origin: top;
    transform: scaleY(0);
    transition: transform 0.3s;
  }

  .category-btn.cat-active::before {
    transform: scaleY(1);
    transform-origin: bottom;
  }

  .category-btn {
    padding-left: 0;
    transition: all 0.1s;
  }

  .cat-active {
    /* border-left: solid 3px var(--clr-primary-6); */
    padding-left: 1rem;
    transition: var(--transition);
  }

  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .col-active {
    box-shadow: 0 0 2px 2px var(--clr-grey-6);
  }
  .all-btn.active {
    opacity: 1;
    border-bottom: solid 1px var(--clr-primary-6);
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
    max-width: 130px;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
