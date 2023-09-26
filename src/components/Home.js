import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from "../firebase";
import {  getDocs,collection } from "firebase/firestore";

  function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // Reference to the "posts" collection
    const postsRef = collection(db, "posts");

    // Fetch data using getDocs (once)
    getDocs(postsRef)
      .then((querySnapshot) => {
        const posts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("posts", posts);
        setPosts(posts);
      })
      .catch((error) => {
        console.error("Error getting documents: ", error);
      });

    // Real-time data collection using onSnapshot
    
    // Cleanup the listener when the component unmounts
  
  }, []);

  return (
    <div className="home">
      <h1 style={styles.heading}>Welcome To my blog</h1>
      <div id="blog-by">Subhankar</div>

      {posts.map((posts, index) => (
        <div className="post" key={`post-${index}`}>
          <Link to={`/post/${posts.id} `}>
            <h3>{posts.title}</h3>
          </Link>
          <p>
            {posts.subTitle}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Home;


const styles ={
  heading: {
    marginTop :30,
    fontSize:60,
  }
}
