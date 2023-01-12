import React from "react";
import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <div>
       <nav
        aria-label="..."
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <ul className="pagination">
          <li className="page-item previous">
            <span className="page-link">Previous</span>
          </li>
          <li className="page-item active">
            <span className="page-link">1</span>
          </li>
          <li className="page-item" aria-current="page">
            <Link className="page-link" to="/">
              2
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="/">
              3
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="/">
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination;