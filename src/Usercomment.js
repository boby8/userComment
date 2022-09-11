import { useState } from "react";
import React from "react";

export default function Usercomment() {
  const [userPost, setUserPost] = useState([]);
  const [userComment, setUserComment] = useState([]);
  const [data, setData] = useState([]);
  const [commentId, setCommentId] = useState([]);
  let id = 0;
  function getPost() {
    let url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUserPost(data);
        console.log(data);
      });
  }
  const getComment = () => {
    let url = "https://jsonplaceholder.typicode.com/comments";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUserComment(data);
        console.log(data);
      });
  };

  function storeCommentId(id) {
    setCommentId([...commentId, id]);
  }
  const getUserComment = (id) => {
    console.log("arrived");
    userComment.map((com) => {
      if (id == com.postId) {
        console.log(com.name);
        setData(`Name -> ${com.name} Email-> ${com.email}  Body-> ${com.body}`);
        return data;
      }
    });
  };

  return (
    <>
      <button onClick={getPost}>Post</button>
      <button onClick={getComment}> comment</button>

      <ul>
        {userPost.map((post) => {
          return (
            <li key={post.id}>
              <span>User {post.id} -:</span>

              <button
                onClick={() => {
                  id = post.id;
                  console.log(id);
                  storeCommentId(post.id);
                  getUserComment(post.id);
                }}
              >
                Comments
              </button>
              <span>
                {commentId.find((id) => {
                  return post.id === id;
                })
                  ? data
                  : ""}
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
