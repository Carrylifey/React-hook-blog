import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../firebase";
import { useFormInput } from "../hooks";

function CreatePost() {

  const title =useFormInput('');
  const subTitle =useFormInput('');
  const content =useFormInput('');
  
  async function handleSubmit(e){
    e.preventDefault();

    console.log('title',title);
    console.log('subtitle',subTitle);
    console.log('content',content);

   await addDoc(collection(db,'posts'),{
      title :title.value,
      content: content.value,
      subTitle : subTitle.value,
      createdAT : new Date()

    });
  }
    return (
      <div className="create-post">
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit}> 
          <div className="form-field">
            <label>title</label>
            <input {...title} />
          </div>

          <div className="form-field">
            <label>Sub title</label>
            <input {...subTitle} />
          </div>
          <div className="form-field">
            <label>Content</label>
            <textarea {...content} ></textarea>
            <button className="create-post-btn ">Create Post</button>
          </div>
        </form>
      </div>
    );
  }
  
  export default CreatePost;