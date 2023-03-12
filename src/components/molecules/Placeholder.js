import React from "react";

const Placeholder = () => {
  return (
    <div
      className="row"
      style={{
        width: "53rem",
        height: "16rem",
        marginBottom: "50px",
        marginLeft: "1px",
      }}
    >
      <div className="card col-lg-4 col-6" aria-hidden="true">
        <img
          src="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
          className="card-img-top"
          alt="Food"
          style={{
            height: "100px",
            width: "100px",
            marginTop: "20px",
            marginLeft: "20px",
            objectFit: "cover",
          }}
        />
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6 mt-5"></span>
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Placeholder;
