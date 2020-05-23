import React from "react";
import "./styles.css";

const FancyInput = () => (
  <form>
    <div className="field">
      <input type="email" name="email" className="input" placeholder=" " />
      <label htmlFor="email" className="label">
        Email
      </label>
    </div>
  </form>
);

export default FancyInput;
