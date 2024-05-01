"use client"
import React, { useState } from 'react';

const RatingStars = () => {
  const [rating, setRating] = useState(0); // State to track the rating

  const handleStarClick = (index: number) => {
    // Update the rating when a star is clicked
    setRating(index + 1);
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleStarClick(index)}
          style={{ cursor: 'pointer', color: index < rating ? 'gold' : 'gray', fontSize: 40}}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default RatingStars;
