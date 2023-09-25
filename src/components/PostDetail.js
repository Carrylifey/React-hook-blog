import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { getDoc, doc } from 'firebase/firestore';

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
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;
