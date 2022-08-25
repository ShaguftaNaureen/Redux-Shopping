import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <h1>About Us</h1>
            <p className="lead">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              repellat ipsum, explicabo reiciendis ullam ab doloribus similique
              quod ipsam vero quam voluptate. Voluptates laborum adipisci vero
              nobis eligendi? Veritatis excepturi ipsa, incidunt facilis
              doloribus velit eius totam consequatur mollitia. Repudiandae
              laudantium deleniti odit, similique quam esse mollitia pariatur
              iure perspiciatis aut eveniet temporibus minima ipsam eum nobis
              ipsum sapiente modi quo ut sequi quasi officiis doloremque
              commodi? Cupiditate, quia aut est repellat accusamus dolorum,
              tenetur et, ipsam maiores in assumenda fugit ab recusandae at
              corrupti cumque possimus ullam officiis exercitationem aliquid
              ratione similique. Assumenda ab voluptatum nisi laborum libero
              vel?
            </p>
            <NavLink to="/contact" className="btn btn-outline-dark">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 ">
            <img
              src="/assets/aboutus.jpg"
              alt="About Us"
              height="550px"
              width="550px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
