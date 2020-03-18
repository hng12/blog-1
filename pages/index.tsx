import React from 'react';

import PostCard, { Post } from '~/components/post-card';
import Header from '~/components/header/index';
import posts from '~/data/posts.json';

const [latest] = posts;

const Index = () => (
  <>
    <Header url={latest.path} image={latest.image} title={latest.title} />
    <div className="grid w-11/12 gap-12 pt-32 pb-4 mx-auto grid-cols-fill-120 md:max-w-6xl md:w-a lg:max-w-screen-lg xl:max-w-screen-xl">
      {posts.map((post: Post) => (
        <PostCard key={post.path} {...post} />
      ))}
    </div>
  </>
);

export default Index;
