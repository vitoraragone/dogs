import React, { useContext } from "react";
import styles from "./PhotoContent.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PhotoComments from "./PhotoComments";
import { UserContext } from "../userContext";
import PhotoDelete from "./PhotoDelete";
import Image from "../Components/Helper/Image";

const PhotoContent = ({ data, single }) => {
  const user = useContext(UserContext);

  const { photo, comments } = data;

  return (
    <div className={`${styles.photo} ${single ? styles.single : ""}`}>
      <div className={styles.img}>
        <Image alt={photo.title} src={photo.src} />
      </div>
      <div className={styles.details}>
        <p className={styles.author}>
          {user.data && user.data.username === photo.author ? (
            <PhotoDelete id={photo.id} />
          ) : (
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
          )}

          <span className={styles.visualizacoes}>{photo.acessos}</span>
        </p>
        <h1 className="title">
          <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
        </h1>
        <ul className={styles.attributes}>
          <li>{photo.peso} kg</li>
          <li>{photo.idade} anos</li>
        </ul>
      </div>

      <PhotoComments single={single} id={photo.id} comments={comments} />
    </div>
  );
};

PhotoContent.propTypes = {
  data: PropTypes.object,
  single: PropTypes.bool,
};

export default PhotoContent;
