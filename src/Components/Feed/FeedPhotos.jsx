import React, { useEffect } from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../Hooks/useFetch";
import { PHOTOS_GET } from "../../api";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import styles from "./FeedPhotos.module.css";
import PropTypes from "prop-types";

const FeedPhotos = ({ setInfinite, page, user, setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) setInfinite(false);
    }
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`animeLeft ${styles.feed}`}>
        {data &&
          data.map((photo) => (
            <FeedPhotosItem
              key={photo.id}
              photo={photo}
              setModalPhoto={setModalPhoto}
            />
          ))}
      </ul>
    );
  else return null;
};

FeedPhotos.defaultProps = {
  user: 0,
};

FeedPhotos.propTypes = {
  setModalPhoto: PropTypes.func,
  setInfinite: PropTypes.func,
  page: PropTypes.number,
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};

export default FeedPhotos;
