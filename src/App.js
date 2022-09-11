import { useState } from "react";

function App() {
  const [userPost, setUserPost] = useState([]);
  const [userComment, setUserComment] = useState([]);
  const [data, setData] = useState([]);
  const [commmentState, setCommentState] = useState("false");
  const [uniqueComment,setUniqueComment] = useState([]);

  const[commentId,setCommentId]=useState([]);

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
  //id
  let commentOfUser = [];
  let userPostComment = " ";
  
 

  let id = 0;

  function Comment() {
    {
      userComment.map((com) => {
        if (id === `${com.postId}`) {
          console.log(commentOfUser);
          userPostComment = `Name : ${com.name}  Email : ${com.email}  Body : ${com.body} `;
          commentOfUser.push(userPostComment);
        }
        return setData(commentOfUser);
      });
    }
  }

  function clear() {
    userPostComment = "";
    commentOfUser = [];
  }

  function showComment(id) {
    setCommentId([...commentId,id]);
    
  }

  function userDetail(id) {
    uniqueComment.map((val) => {
      if (id == val) {
        console.log(val);
        Comment();
        clear();
      }
      setCommentState(true);
    });
  }
const checkData =(data)=>{
  console.log(data);
  return data == id; 
  
    
} 
const getUserComment = ()=>{

}



    
return (
    <>
      <button
        onClick={() => {
          getPost();
        }}
      >
        Post
      </button>
      <button onClick={getComment}> comment</button>

      <ul>
        {userPost.map((post) => {
          return (
            <li key={post.id}>
              <span>User {post.id} -:</span>
             

              <button
                onClick={() => {
                  id = `${post.id}`;
                  showComment(post.id);
                  
                }}
              >
                Comments
              </button>
             
            <span>{commentId.find((id)=>{
              return post.id === id
            })? getUserComment(post.id):"" }</span>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
