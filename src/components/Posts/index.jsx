import propType from 'prop-types';
import { PostCard } from '../PostCard';

import './styles.css';

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard key={post.id} id={post.id} cover={post.cover} title={post.title} body={post.body} />
    ))}
  </div>
);

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: propType.arrayOf(
    propType.shape({
      title: propType.string.isRequired,
      cover: propType.string.isRequired,
      body: propType.string.isRequired,
      id: propType.number.isRequired,
    }),
  ),
};
