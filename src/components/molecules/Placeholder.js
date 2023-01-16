import React from "react";

const Placeholder = () => {
  return (
    <div className="row" style={{width: "45rem", height: "15rem"}}>
      <div className="card col-lg-4 col-6" aria-hidden="true">
        <img src="..." className="card-img-top" alt="Food"/>
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
  )
}

export default Placeholder;