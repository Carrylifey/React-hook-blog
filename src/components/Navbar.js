import { Link } from "react-router-dom"
import styled from "styled-components";

const StyleLink = styled(Link)`
text-decoration: none;
color: #9e9e9e;

&:hover {
  text-decoration: underline;
}
`;

function Navbar() {
    return (
      <div className="">
        <ul id="nav">
          <li><StyleLink to='/'>Home</StyleLink></li>
          <li><StyleLink to='/create-post'>CreatePost</StyleLink></li>         
        </ul>

      </div>
    );
  }
  
  export default Navbar;
  