import React from "react";

export default function TestimonialContainer({ children, name, location, image}) {
  /************************************
   * Render
   ************************************/

  return (
      <div className='testimonial-container'>
          <div className='testimony-module'>
            <p>{children}</p>
          </div>
          <div className='featured-person-module'>
            <div>
              <h3>{name}</h3>
              <p>{location}</p>
            </div>
            <img src={image} alt='NAME'/>
          </div>
      </div>
  );
}
