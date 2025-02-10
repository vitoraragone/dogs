import PropTypes from "prop-types";
import React from "react";
import styles from "./FeedPhotosItem.module.css";
import Image from "../Helper/Image";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} title={photo.title} />
      <span className={styles.span}>{photo.acessos}</span>
    </li>
  );
};

FeedPhotosItem.propTypes = {
  photo: PropTypes.object,
  src: PropTypes.string,
  title: PropTypes.string,
  acessos: PropTypes.string,
  setModalPhoto: PropTypes.func,
};

export default FeedPhotosItem;
