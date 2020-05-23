import React from "react";
import "./styles.css";
import styled from "styled-components";
import "styled-components/macro";

const StyledForm = styled.form`
  --text-color: #afafaf;
`;

const StyledField = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  border-bottom: 2px dashed var(--text-color);
  margin: 4rem auto 1rem;
  transition: 500ms;

  &::after {
    content: "";
    position: relative;
    display: block;
    height: 4px;
    width: 100%;
    background: #d16dff;
    transform: scaleX(0);
    transform-origin: 0%;
    opacity: 0;
    transition: all 500ms ease;
    top: 2px;
  }
  &:focus-within {
    border-color: transparent;
  }
  &:focus-within::after {
    transform: scaleX(1);
    opacity: 1;
  }
  &:focus-within label,
  input:not(:placeholder-shown) + label {
    transform: scale(0.8) translateY(-5rem);
    opacity: 1;
  }
`;

const StyledInput = styled.input`
  outline: none;
  border: none;
  overflow: hidden;
  margin: 0;
  width: 100%;
  padding: 0.25rem 0;
  background: none;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  transition: border 500ms;

  &:valid {
    color: yellowgreen;
  }
  &:invalid {
    color: orangered;
  }
`;

const StyledLabel = styled.label`
  color: var(--text-color);
  font-size: 1.2rem;
  z-index: -1;
  position: absolute;
  transform: translateY(-2rem);
  transform-origin: 0%;
  transition: transform 400ms;
`;

const FancyInputStyledComponents = () => (
  <StyledForm>
    <StyledField>
      <StyledInput
        type="email"
        name="email"
        className="input"
        placeholder=" "
      />
      <StyledLabel htmlFor="email" className="label">
        Email
      </StyledLabel>
    </StyledField>
  </StyledForm>
);

export default FancyInputStyledComponents;
