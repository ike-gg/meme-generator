import React from "react";
import starEmpty from '../images/star-empty.png'
import starFilled from '../images/star-filled.png'

const StarImage = ({isFilled, handleClick}) => {
  let starIcon = isFilled ? starFilled : starEmpty;
  return (
    <img 
      src={starIcon} 
      className="card--favorite"
      onClick={handleClick}
    />
  )
}

export default StarImage; 