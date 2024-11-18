import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Using query strings and you need to fetch it
// This is done by useParams. Steps: 
// 1) Import useParams (above line 2)
// 2) Add function const Posts= () => { }
// 3) Add const { id } = useParams ();
// 4) console.log(id); to check if you 
// get object will show id: with a number 
// e.g. id: 5.
// 5) Return ( );
// 6) (line 21-23) - <div> {id} </div>

const Posts = () => {
   const { id } = useParams (); 
   const [posts, setPosts] = useState([]);

useEffect(() => { 
    async function fetchPosts () {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
    setPosts(data);
}
    fetchPosts(); 
}, []);

return (
    <>
    <div className="post__search">
      <button>← Back</button>
      <div className="post__search--container">
        <label className="post__search--label">Search by Id</label>
        <input
          type="number"
        />
        <button>Enter</button>
      </div>
    </div>
    {
      posts.map((post) => (
        <div className="post">
        <div className="post__title">{post.title}</div>
        <p className="post__body">{post.body}</p>
        </div>
        ))}
    <div className="post">
      <div className="post__title">
        <div className="post__title--skeleton"></div>
      </div>
      <div className="post__body">
        <p className="post__body--skeleton"></p>
      </div>
    </div>
  </>
    );
}

export default Posts; 


// 7) Add API link, for this example go to 
// jsonplaceholder.typicode.com/posts/1 - you 
// reference the Routes on jsonplaceholder.typicode.com, 
// it shows Routes - GET Posts/1 - we use this one as 
// this is the user id fetch request. Click on it for link. 
// 8) Change console.log to console.log(fetch 
// ("jsonplaceholder.typicode.com/posts/1"));
// 9) Change the console.log as it may cause issues, remove. 
// 10) Input  "useEffect(() => { }, []);" after const id..." 
// 11) Change (line 1, add useEffect) 
//  "import React, {useEffect} from "react-router-dom"
// 12) Inside useEffect add await fetch link (typicode link), this fetches the data: 
// "const data = await fetch ("https://jsonplaceholder.typicode.com/posts/1")"
// When you console.log the data you get a promise in the console. get the Response
// using async function inside (line):
// async function fetchPosts () { const data... }
// 13) Fetch posts - call the function
// // When you need to access link and fetch it needs to be fetched
// using an await function
// 14) You need to add: "const data2 = await data.json()"
// 15) Add:  console.log(data2);
// Need to await twice just to get the data, on lines 38 and 40.
// However if we want to await once only you can use axios!! 
// 16) Need to "yarn add axios"
// 17) Line 3 add " import axios from 'axios' "
// 18) Remove line (console log data 2)
// 19) Remove line: "const data2 = await data.json()""
// 20) Change line:  const data = await fetch to below: 
// 21) const data = await axios.get("https://jsonplaceholder.....
// 22) Change the const and console.log to have response (better practice):
// 23) const response = await axios.get... and console.log(response.data);
// 24) To make the data pull the different ID's link needs to be changed to: 
// ("https://jsonplaceholder.typicode.com/posts?userId1"). This however does
// NOT make it Dynamic! In order to do this must change it to: 
// (`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
// 25) Next step is to render the posts, to do this we need a map: 
// 26) After return change contents of div from {id} to:
// {data.map(post => <div> {post.id}</div>)} 
// When you do this it will throw an error saying 'data not defined'.
// 27) In order to define the data (which is only in a const function 
// currently) we need to add new code under const {id} = useParams();:
// let data {};
// 28) Line 22 should be: const {data} = await axios.get....
// 29) Line 18 after  const { id } = useParams add: 
//  const [posts, setPosts] = useState([]);
// 30) After line 22, on 23 add:     setPosts(data);
// 31) UseState needs to be added, first add next to useEffect line 1 import.
// 32) useState is a fancy way of declaring a variable:
// posts.map in the same line as (point 26) changing data.map to posts.map
// 33) Also change the posts.title - that needs to be added in so title displays:
// 34) {data.map(post => <div> {post.title}</div>)} (changed id to title)
// // 35) When the component first mounts, the value of post is whatever is inside
// the useState(), reference point 29. At the moment it is undefined. You need an 
// array to map, it cannot stay undefined. How do we fix this? You can have an empty
// array which is defined as empty brackets: [], so it would be useState([]) reference
// point 29.
// 36) You can take posts.html div data and replace:
// {data.map(post => <div> {post.id}</div>)} with the data from posts.html inside the div
// (after return). 
// 37) Changes made to the data, used posts.map (reference lines 41-45). ***IMPORTANT NOTE:
// When creating a map you need to return it for it to work!*** Or add paranthesis, options:
// 38) Option 1: 
//  {
// posts.map((post) => (
//   <div className="post">
//   <div className="post__title">{post.title}</div>
//   <p className="post__body">{post.body}</p>
//  </div>
//  ))}
// 39) Option 2: 
//   {
// posts.map((post) => {
//   return <div className="post">
//   <div className="post__title">{post.title}</div>
//   <p className="post__body">{post.body}</p>
//  </div>
//  })}
// 40)


// ADDITIONAL NOTES: 

// when you enter rfc you get framework: 

// export default function Posts() {
//   return (
//     <div>
//     Posts
//     </div>
//   )
// }
