import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";
import FeedbackList from "./components/FeedbackList/FeedbackList";
import FeedbackStats from "./components/FeedbackStats/FeedbackStats";
import Header from "./components/Header/Header";
import feedbackData from "./data/feedbackData";
import "./styles.css";
import AboutPage from "./pages/AboutPage/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

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
    <Router>
      <Header title="FeedBack App" />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <AboutIconLink />
      </div>
    </Router>
  );
};

export default App;
