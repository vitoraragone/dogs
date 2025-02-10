import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../userContext";
import PhotoCommentsForm from "./PhotoCommentsForm";
import PropTypes from "prop-types";
import styles from "./PhotoComments.module.css";

const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments);
  const commentsSection = useRef(null);
  const { login } = useContext(UserContext);

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${props.single ? styles.single : ""}`}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && (
        <PhotoCommentsForm
          single={props.single}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  );
};

PhotoComments.propTypes = {
  id: PropTypes.number,
  comments: PropTypes.array,
  single: PropTypes.bool,
};

export default PhotoComments;
