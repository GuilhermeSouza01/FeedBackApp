import React from "react";
import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import { useContext } from "react";
import Card from "../shared/Card/Card";
import FeedbackContext from "../../context/FeedbackContext";

const FeedbackItem = ({ item }) => {
  const { deleteFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display"> {item.rating} </div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="purple"></FaTimes>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

FeedbackItem.protoTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
