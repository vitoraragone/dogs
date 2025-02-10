import React, { useState } from "react";
import styles from "./Image.module.css";
import PropTypes from "prop-types";

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img onLoad={handleLoad} className={styles.img} {...props} alt={alt} />
    </div>
  );
};

Image.propTypes = {
  alt: PropTypes.string,
};

export default Image;
