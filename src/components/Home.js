import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { getDocs, collection } from 'firebase/firestore';
import styled from 'styled-components';

const BlogHeading = styled.h1`
  text-align: center;
  color: #2196f3;
  margin-bottom: 2px;
`;

const SubTitle = styled.p`
  font-size: 33px;
  color: red;
`;

const Divstyle = styled.div`
  border: 1px solid #e1e1e1;
  padding: 10px 10px;
  border-radius: 5px;
  margin-top: 10px;

  &:hover{
    border: 1px solid #2196f3;
  }

  h3 {
    margin: 0;
    padding: 0;
    font-size: 25px;
    font-weight: bold;
    color: green;
  }
  a {
    text-decoration: none;
  }

  @media (max-width:800px){
    border:5px solid black;
  }
`;

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // Reference to the "posts" collection
    const postsRef = collection(db, 'posts');

    // Fetch data using getDocs (once)
    getDocs(postsRef)
      .then((querySnapshot) => {
        const posts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log('posts', posts);
        setPosts(posts);
      })
      .catch((error) => {
        console.error('Error getting documents: ', error);
      });

    // Real-time data collection using onSnapshot

    // Cleanup the listener when the component unmounts
  }, []);

  return (
    <div className="home">
      <BlogHeading>Welcome To my blog</BlogHeading>
      <div id="blog-by">Subhankar</div>

      {posts.map((posts, index) => (
        <Divstyle className="post" key={`post-${index}`}>
          <Link to={`/post/${posts.id} `}>
            <h3>{posts.title}</h3>
          </Link>
          <SubTitle>{posts.subTitle}</SubTitle>
        </Divstyle>
      ))}
    </div>
  );
}

export default Home;

const styles = {
  heading: {
    marginTop: 30,
    fontSize: 60,
  },
};
