import React from "react";
import { useContext } from "react";
import FeedbackContext from "../../context/FeedbackContext";

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);
  // Calculate rating average
  const averageRating =
    feedback.length === 0
      ? 0
      : feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length;

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average rating: {averageRating.toFixed(1).replace(/[.,]0$/, "")}</h4>
    </div>
  );
};

export default FeedbackStats;
