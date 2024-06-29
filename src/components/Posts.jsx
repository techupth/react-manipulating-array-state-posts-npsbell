import { useState } from "react";
import { Data } from "./Data";

function Posts() {
const [post, setPost] = useState(Data)

const handleLikeClick = (postIndex) => {
  const newPost = [...post]
  newPost[postIndex].likes = newPost[postIndex].likes + 1
  setPost(newPost) 
}

const handleDislikeClick = (postIndex) => {
  const newPost = [...post]
  newPost[postIndex].likes = newPost[postIndex].likes - 1
 setPost(newPost)
}
  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>

      <div class="post-list">
        {Data.map((post, index) => {
          return(
          <div class="post-item" key={index}> 
            <div class="post-header">
              <h2>{post.title}</h2>
              <div class="post-social-media-stats">
                <span class="stats-topic">Likes: </span>
                <span class="post-likes">{post.likes}</span>
              </div>
            </div>
            <p class="post-content">{post.content}</p>
            <div class="post-actions">
              <button class="like-button" onClick={() => handleLikeClick(index)}>Like</button>
              <button class="dislike-button" onClick={() => handleDislikeClick(index)}>Dislike</button>
            </div>
          </div>
          )
        })}
      </div>

    </div>
  );
}

export default Posts;
