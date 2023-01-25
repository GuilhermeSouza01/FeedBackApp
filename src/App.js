import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import FeedbackForm from "./components/FeedbackForm/FeedbackForm";
import FeedbackList from "./components/FeedbackList/FeedbackList";
import FeedbackStats from "./components/FeedbackStats/FeedbackStats";
import Header from "./components/Header/Header";
import feedbackData from "./data/feedbackData";
import "./styles.css";

const App = () => {
  const [feedback, setFeedback] = useState(feedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="">
      <Header title="FeedBack App" />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </div>
  );
};

export default App;
