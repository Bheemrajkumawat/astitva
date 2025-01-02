import React from "react";
import "./Crosole.css"; 

const Crosole = () => {
  return (
    <>
      <div
        id="carouselExampleDark"
        className="carousel carousel-light slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          {/* First Slide */}
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="ImageCrosole/img1.jpeg"
              className="d-block w-100 carousel-image"
              alt="First Slide"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "default-image.jpg"; 
              }}
            />
            <div className="carousel-caption">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
              {/* Button with text */}
              <button className="btn btn-primary carousel-button">
                Contact
              </button>
            </div>
          </div>
          {/* Second Slide */}
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="ImageCrosole/img2.jpeg"
              className="d-block w-100 carousel-image"
              alt="Second Slide"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "default-image.jpg"; 
              }}
            />
            <div className="carousel-caption">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
              {/* Button with text */}
              <button className="btn btn-primary carousel-button">
                Click Me
              </button>
            </div>
          </div>
          {/* Third Slide */}
          <div className="carousel-item">
            <img
              src="ImageCrosole/img3.jpeg"
              className="d-block w-100 carousel-image"
              alt="Third Slide"
              // Replace with your default image path
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "default-image.jpg"; 
              }}
            />
            <div className="carousel-caption">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
              {/* Button with text */}
              <button className="btn btn-primary carousel-button">
                Click Me
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Crosole;
