import React from "react";
import PropTypes from "prop-types";

const FeedbackStats = ({ feedback }) => {
  // Calculate rating average
  const averageRating =
    feedback.reduce((accumulator, current) => {
      return accumulator + current.rating;
    }, 0) / feedback.length;

  averageRating.toFixed(1);

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average rating: {isNaN(averageRating) ? 0 : averageRating}</h4>
    </div>
  );
};

FeedbackStats.propTypes = {
  feedback: PropTypes.array,
};

export default FeedbackStats;
