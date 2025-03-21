import React from "react";
import styles from "./PhotoDelete.module.css";
import { PHOTO_DELETE } from "../api";
import useFetch from "../Hooks/useFetch";
import PropTypes from "prop-types";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm("Tem certeza que deseja deletar?");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      <button
        disabled={loading}
        onClick={handleClick}
        className={styles.delete}
      >
        {loading ? "Deletando" : "Deletar"}
      </button>
    </>
  );
};

PhotoDelete.propTypes = {
  id: PropTypes.number,
};

export default PhotoDelete;
