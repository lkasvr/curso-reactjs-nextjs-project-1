import { PostCard } from '../PostCard';

import './styles.css'

export const Posts = ({ posts }) => (
  <div className="posts">
    {posts.map(post => (
      <PostCard
        key={post.id}
        id={post.id}
        cover={post.cover}
        title={post.title}
        body={post.body}
      />
    ))}
  </div>
);