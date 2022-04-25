import propType from 'prop-types';

import './styles.css';

export const PostCard = ({ cover, title, body, id }) => {
  return (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post-content">
        <b>{id}</b>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  title: propType.string.isRequired,
  cover: propType.string.isRequired,
  body: propType.string.isRequired,
  id: propType.number.isRequired,
};
