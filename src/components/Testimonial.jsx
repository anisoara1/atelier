import React from "react";

const Testimonial = ({ name, text }) => (
  <div className="testimonial">
    <p>{text}</p>
    <h4>{name}</h4>
  </div>
);

export default Testimonial;
