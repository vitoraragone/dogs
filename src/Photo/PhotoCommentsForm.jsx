import React, { useState } from "react";
import Enviar from "../Assets/enviar.svg?react";
import PropTypes from "prop-types";
import useFetch from "../Hooks/useFetch";
import { COMMENT_POST } from "../api";
import Error from "../Components/Helper/Error";
import styles from "./PhotoCommentsForm.module.css";

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const [comment, setComment] = useState("");
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form
      className={`${styles.form} ${single ? styles.single : ""}`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente algo..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      {error && <Error error={error} />}
    </form>
  );
};

PhotoCommentsForm.propTypes = {
  id: PropTypes.number,
  setComments: PropTypes.func,
  single: PropTypes.bool,
};

export default PhotoCommentsForm;
