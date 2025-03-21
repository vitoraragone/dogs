import PropTypes from "prop-types";
import React from "react";
import { useEffect } from "react";

const Head = (props) => {
  useEffect(() => {
    document.title = props.title + " | Dogs";
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", props.description || "");
  }, [props]);

  return <></>;
};

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Head;
