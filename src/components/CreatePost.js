import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../firebase";
import { useFormInput } from "../hooks";
import styled,{css} from "styled-components";

const Stylebtn= styled.button`
height: auto;
  width: fit-content;
  background: ${(props)=>props.primary ? '#4caf50' : ' blue'};
  border: 0;
  color: #fff;
  
  padding: 8px;
  font-size: 15px;
  border-radius: 3px;
  cursor: pointer;
  margin: auto;
  margin-top:2%;
  ${(props)=>props.primary && css`
  
  border : 4px solid ${props.Bgcolor};
  
  `};


`;

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
            <Stylebtn primary Bgcolor='purple'>Create Post</Stylebtn>
          </div>
        </form>
      </div>
    );
  }
  
  export default CreatePost;