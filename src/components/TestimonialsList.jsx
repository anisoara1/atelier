import React from "react";
import Testimonial from "./Testimonial";
import "./TestimonialsList.css";

const testimonialsData = [
  { name: "John Doe", text: "Acesta este un testimonial grozav!" },
  { name: "Jane Smith", text: "Îmi place foarte mult acest produs!" },
];

const TestimonialsList = () => (
  <div className="testimonials-list">
    {testimonialsData.map((testimonial, index) => (
      <Testimonial key={index} {...testimonial} />
    ))}
  </div>
);

export default TestimonialsList;
