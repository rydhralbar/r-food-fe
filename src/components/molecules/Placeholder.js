import React from "react";

const Placeholder = () => {
  return (
    <div class="row" style={{width: "45rem", height: "15rem"}}>
      <div class="card col-lg-4 col-6" aria-hidden="true">
        <img src="..." class="card-img-top" alt="Food"/>
        <div class="card-body">
    <h5 class="card-title placeholder-glow">
      <span class="placeholder col-6 mt-5"></span>
    </h5>
    <p class="card-text placeholder-glow">
      <span class="placeholder col-7"></span>
    </p>
        </div>
      </div>
    </div>
  )
}

export default Placeholder;