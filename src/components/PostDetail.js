import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { getDoc, doc } from 'firebase/firestore';
import Radium from 'radium';

function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    // Reference to the specific document in the "posts" collection
    const postRef = doc(db, 'posts', postId);

    getDoc(postRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          // Document exists, retrieve its data
          const postData = docSnapshot.data();
          console.log('snapshot',docSnapshot.data())
          setPost(postData);
          console.log('post data', postData);
        } else {
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.error('Error getting document:', error);
      });
  }, [postId]);

  return (
    <div className="post-detail">
      <h1 style={Styles.heading}>{post.title}</h1>
      <p style={Styles.PostDetail}>{post.content}</p>
    </div>
  );
}

export default Radium (PostDetail);


const Styles ={
  PostDetail :{
    border :'1px solid #e1e1e1',
    padding :5,
    paddingTop : 10,
    borderRadius:5,

    '@media(max-width: 720px) ' : {
      color :'pink'
    }
  },
heading :{
  textAlign: 'center',
  margin :0,
 
  ':hover':{
    color: 'orange',
  } 
}

}

