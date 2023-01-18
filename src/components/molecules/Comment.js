import React from "react";

const Comment = (props) => {
  const { name, comment, picture } = props

  return (
    <div>
      <div className="user" style={{marginTop: "27px"}}>
        <img className="rounded-circle" src={ picture } alt="Profile"/>
          <div>
            <h3>{ name }</h3>
            <p>"{ comment }"</p>
          </div>
      </div>
    </div>
  )
}

export default Comment;